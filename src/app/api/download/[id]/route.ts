import { NextRequest, NextResponse } from 'next/server'
import { catalogItems } from '@/lib/catalog/skills-agents'
import { createClient } from '@/lib/supabase/server'
import fs from 'fs/promises'
import path from 'path'
import JSZip from 'jszip'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const email = request.nextUrl.searchParams.get('email')

    console.log(`[Download] Starting download for skill: ${id}`)

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
      console.log(`[Download] Skill not found: ${id}`)
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
      console.error('[Download] Failed to log download:', dbError)
    }

    // Resolve paths - folderPath points to skill folder, skillFilename is the SKILL.md file
    const skillsMarketplacePath = process.cwd()
    const folderPath = path.resolve(skillsMarketplacePath, skill.folderPath)
    const skillFilePath = path.join(folderPath, skill.skillFilename)

    console.log(`[Download] Looking for skill at: ${skillFilePath}`)

    // Verify the skill file exists
    try {
      await fs.access(skillFilePath)
    } catch {
      console.error(`[Download] Skill file not found: ${skillFilePath}`)
      return NextResponse.json(
        { error: 'Skill file not found' },
        { status: 404 }
      )
    }

    // Create ZIP using JSZip (Promise-based, works in serverless)
    const zip = new JSZip()
    const skillFolder = zip.folder(skill.id)

    if (!skillFolder) {
      throw new Error('Failed to create folder in ZIP')
    }

    // Add the main SKILL.md file (with frontmatter preserved!)
    const skillContent = await fs.readFile(skillFilePath, 'utf-8')
    skillFolder.file('SKILL.md', skillContent)
    console.log(`[Download] Added SKILL.md to ZIP`)

    // Check for references folder and add if exists
    const referencesPath = path.join(folderPath, 'references')
    try {
      const refStats = await fs.stat(referencesPath)
      if (refStats.isDirectory()) {
        const refFiles = await fs.readdir(referencesPath)
        const refsFolder = skillFolder.folder('references')
        
        if (refsFolder) {
          for (const file of refFiles) {
            const filePath = path.join(referencesPath, file)
            const fileStats = await fs.stat(filePath)
            
            if (fileStats.isFile()) {
              const content = await fs.readFile(filePath, 'utf-8')
              refsFolder.file(file, content)
              console.log(`[Download] Added reference: ${file}`)
            }
          }
        }
      }
    } catch {
      // No references folder, that's fine
      console.log(`[Download] No references folder found`)
    }

    // Generate ZIP as blob
    console.log(`[Download] Generating ZIP...`)
    const zipBlob = await zip.generateAsync({ type: 'blob' })
    console.log(`[Download] ZIP created, size: ${zipBlob.size} bytes`)

    // Generate clean filename
    const filename = `${skill.name.toLowerCase().replace(/\s+/g, '-')}.zip`

    // Return ZIP file as download
    return new NextResponse(zipBlob, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': zipBlob.size.toString(),
      },
    })
  } catch (error) {
    console.error('[Download] Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
