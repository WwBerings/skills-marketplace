import { NextRequest, NextResponse } from 'next/server'
import { catalogItems } from '@/lib/catalog/skills-agents'
import { createClient } from '@/lib/supabase/server'
import fs from 'fs/promises'
import path from 'path'
import JSZip from 'jszip'

export async function GET(request: NextRequest) {
  try {
    const email = request.nextUrl.searchParams.get('email')

    console.log(`[DownloadAll] Starting download for all skills`)

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Get all skills (not agents)
    const skills = catalogItems.filter((item) => item.type === 'skill')
    console.log(`[DownloadAll] Found ${skills.length} skills to bundle`)

    // Log download to Supabase
    try {
      const supabase = await createClient()
      await supabase.from('skill_downloads').insert({
        skill_id: 'all-skills-bundle',
        skill_name: 'All Skills Bundle',
        email: email,
      })
    } catch (dbError) {
      // Log but don't fail the download if tracking fails
      console.error('[DownloadAll] Failed to log download:', dbError)
    }

    // Create ZIP using JSZip
    const zip = new JSZip()
    const skillsMarketplacePath = process.cwd()

    // Add each skill to the ZIP
    for (const skill of skills) {
      const folderPath = path.resolve(skillsMarketplacePath, skill.folderPath)
      const skillFilePath = path.join(folderPath, skill.skillFilename)

      // Create skill folder in ZIP
      const skillFolder = zip.folder(skill.id)
      if (!skillFolder) {
        console.error(`[DownloadAll] Failed to create folder for: ${skill.id}`)
        continue
      }

      // Add SKILL.md file
      try {
        const skillContent = await fs.readFile(skillFilePath, 'utf-8')
        skillFolder.file('SKILL.md', skillContent)
        console.log(`[DownloadAll] Added ${skill.id}/SKILL.md`)
      } catch {
        console.error(`[DownloadAll] Could not read skill file: ${skillFilePath}`)
        continue
      }

      // Add references folder if exists
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
              }
            }
            console.log(`[DownloadAll] Added ${skill.id}/references/ (${refFiles.length} files)`)
          }
        }
      } catch {
        // No references folder for this skill
      }
    }

    // Add README with setup instructions
    const readme = `# Marketing Skills Bundle

This bundle contains ${skills.length} AI skills for Claude.

## Included Skills

${skills.map((s) => `- **${s.name}**: ${s.description}`).join('\n')}

## Setup Instructions

1. Open Claude at claude.ai
2. Create a new Project or open an existing one
3. Go to Project Knowledge
4. Upload the SKILL.md file from each skill folder
5. For skills with a references/ folder, upload those files too

## Tips

- Start with Brand Voice to establish your tone
- Combine skills for powerful workflows (e.g., Keyword Research → SEO Content)
- Each skill works independently - pick what you need

Built by Willem | skills-marketplace
`
    zip.file('README.md', readme)

    // Generate ZIP
    console.log(`[DownloadAll] Generating ZIP...`)
    const zipBlob = await zip.generateAsync({ type: 'blob' })
    console.log(`[DownloadAll] ZIP created, size: ${zipBlob.size} bytes`)

    // Return ZIP file
    return new NextResponse(zipBlob, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="all-marketing-skills.zip"',
        'Content-Length': zipBlob.size.toString(),
      },
    })
  } catch (error) {
    console.error('[DownloadAll] Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
