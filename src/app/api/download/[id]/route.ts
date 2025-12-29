import { NextRequest, NextResponse } from 'next/server'
import { catalogItems } from '@/lib/catalog/skills-agents'
import { createClient } from '@/lib/supabase/server'
import fs from 'fs/promises'
import path from 'path'
import archiver from 'archiver'
import { PassThrough } from 'stream'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const email = request.nextUrl.searchParams.get('email')

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Find the skill in catalog
    const skill = catalogItems.find((item) => item.id === id)
    if (!skill) {
      return NextResponse.json(
        { error: 'Skill not found' },
        { status: 404 }
      )
    }

    // Log download to Supabase
    try {
      const supabase = await createClient()
      await supabase.from('skill_downloads').insert({
        skill_id: skill.id,
        skill_name: skill.name,
        email: email,
      })
    } catch (dbError) {
      // Log but don't fail the download if tracking fails
      console.error('Failed to log download:', dbError)
    }

    // Resolve paths - folderPath points to skill folder, skillFilename is the SKILL.md file
    const skillsMarketplacePath = process.cwd()
    const folderPath = path.resolve(skillsMarketplacePath, skill.folderPath)
    const skillFilePath = path.join(folderPath, skill.skillFilename)

    // Verify the skill file exists
    try {
      await fs.access(skillFilePath)
    } catch {
      console.error('Skill file not found:', skillFilePath)
      return NextResponse.json(
        { error: 'Skill file not found' },
        { status: 404 }
      )
    }

    // Create ZIP archive
    const archive = archiver('zip', { zlib: { level: 9 } })
    const chunks: Buffer[] = []

    // Collect chunks into buffer
    const passthrough = new PassThrough()
    passthrough.on('data', (chunk: Buffer) => chunks.push(chunk))

    archive.pipe(passthrough)

    // Skill folder name inside ZIP (matches skill id)
    const skillFolderName = skill.id

    // Add the main SKILL.md file (with frontmatter preserved!)
    // Place inside skill folder: skill-name/SKILL.md
    const skillContent = await fs.readFile(skillFilePath, 'utf-8')
    archive.append(skillContent, { name: `${skillFolderName}/SKILL.md` })

    // Check for references folder and add if exists
    // Place inside skill folder: skill-name/references/
    const referencesPath = path.join(folderPath, 'references')
    try {
      const refStats = await fs.stat(referencesPath)
      if (refStats.isDirectory()) {
        archive.directory(referencesPath, `${skillFolderName}/references`)
      }
    } catch {
      // No references folder, that's fine
    }

    // Finalize archive
    await archive.finalize()

    // Wait for all chunks to be collected
    await new Promise<void>((resolve, reject) => {
      passthrough.on('end', resolve)
      passthrough.on('error', reject)
    })

    // Combine all chunks into a single buffer
    const zipBuffer = Buffer.concat(chunks)

    // Generate clean filename
    const filename = `${skill.name.toLowerCase().replace(/\s+/g, '-')}.zip`

    // Return ZIP file as download
    return new NextResponse(zipBuffer, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': zipBuffer.length.toString(),
      },
    })
  } catch (error) {
    console.error('Download error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

