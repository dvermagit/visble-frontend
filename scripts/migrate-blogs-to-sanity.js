// const { createClient } = require('@sanity/client')
// const fs = require('fs')
// const path = require('path')
// const matter = require('gray-matter')
// require('dotenv').config({ path: '.env.local' })

// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
//   apiVersion: '2024-01-01',
//   useCdn: false,
//   token: process.env.SANITY_API_TOKEN,
// })

// // Simple markdown to Portable Text converter
// function markdownToPortableText(markdown) {
//   const blocks = []
//   const lines = markdown.split('\n')
//   let currentParagraph = []

//   for (let i = 0; i < lines.length; i++) {
//     const line = lines[i]

//     if (line.trim() === '') {
//       if (currentParagraph.length > 0) {
//         blocks.push({
//           _type: 'block',
//           _key: `block-${Date.now()}-${Math.random()}`,
//           style: 'normal',
//           children: [{ _type: 'span', _key: `span-${Date.now()}-${Math.random()}`, text: currentParagraph.join(' '), marks: [] }],
//           markDefs: [],
//         })
//         currentParagraph = []
//       }
//       continue
//     }

//     if (line.startsWith('# ')) {
//       blocks.push({
//         _type: 'block',
//         _key: `block-${Date.now()}-${Math.random()}`,
//         style: 'h1',
//         children: [{ _type: 'span', _key: `span-${Date.now()}-${Math.random()}`, text: line.replace(/^# /, ''), marks: [] }],
//         markDefs: [],
//       })
//       continue
//     }
//     if (line.startsWith('## ')) {
//       blocks.push({
//         _type: 'block',
//         _key: `block-${Date.now()}-${Math.random()}`,
//         style: 'h2',
//         children: [{ _type: 'span', _key: `span-${Date.now()}-${Math.random()}`, text: line.replace(/^## /, ''), marks: [] }],
//         markDefs: [],
//       })
//       continue
//     }
//     if (line.startsWith('### ')) {
//       blocks.push({
//         _type: 'block',
//         _key: `block-${Date.now()}-${Math.random()}`,
//         style: 'h3',
//         children: [{ _type: 'span', _key: `span-${Date.now()}-${Math.random()}`, text: line.replace(/^### /, ''), marks: [] }],
//         markDefs: [],
//       })
//       continue
//     }
//     if (line.startsWith('#### ')) {
//       blocks.push({
//         _type: 'block',
//         _key: `block-${Date.now()}-${Math.random()}`,
//         style: 'h4',
//         children: [{ _type: 'span', _key: `span-${Date.now()}-${Math.random()}`, text: line.replace(/^#### /, ''), marks: [] }],
//         markDefs: [],
//       })
//       continue
//     }

//     currentParagraph.push(line.trim())
//   }

//   if (currentParagraph.length > 0) {
//     blocks.push({
//       _type: 'block',
//       _key: `block-${Date.now()}-${Math.random()}`,
//       style: 'normal',
//       children: [{ _type: 'span', _key: `span-${Date.now()}-${Math.random()}`, text: currentParagraph.join(' '), marks: [] }],
//       markDefs: [],
//     })
//   }

//   return blocks
// }

// async function migrateBlogsToSanity() {
//   console.log('🗑️  Deleting existing blogs...')
//   const existingIds = await client.fetch('*[_type == "blog"]._id')
//   for (const id of existingIds) {
//     await client.delete(id)
//   }
//   console.log('✅ Deleted\n')

//   console.log('📝 Migrating blog posts to Sanity...\n')

//   const blogDir = path.join(process.cwd(), 'content', 'blog')
  
//   if (!fs.existsSync(blogDir)) {
//     console.error('❌ Blog directory not found:', blogDir)
//     return
//   }

//   const folders = fs.readdirSync(blogDir)

//   for (const folder of folders) {
//     const folderPath = path.join(blogDir, folder)
//     const mdPath = path.join(folderPath, 'index.md')

//     if (!fs.existsSync(mdPath)) {
//       console.log(`⚠️  Skipping ${folder} - no index.md found`)
//       continue
//     }

//     try {
//       const fileContent = fs.readFileSync(mdPath, 'utf-8')
//       const { data: frontmatter, content } = matter(fileContent)

//       console.log(`📄 Processing: ${frontmatter.title}`)

//       const body = markdownToPortableText(content)

//       // Upload cover image - try multiple locations
//       let coverImageAsset = null
//       if (frontmatter.coverImage) {
//         const possiblePaths = [
//           path.join(folderPath, frontmatter.coverImage),
//           path.join(process.cwd(), 'public', 'images', 'blog', frontmatter.coverImage),
//           path.join(process.cwd(), 'public', frontmatter.coverImage),
//         ]

//         for (const imagePath of possiblePaths) {
//           if (fs.existsSync(imagePath)) {
//             console.log(`  📸 Uploading image: ${frontmatter.coverImage}`)
//             const imageBuffer = fs.readFileSync(imagePath)
//             coverImageAsset = await client.assets.upload('image', imageBuffer, {
//               filename: path.basename(frontmatter.coverImage),
//             })
//             break
//           }
//         }

//         if (!coverImageAsset) {
//           console.log(`  ⚠️  Image not found: ${frontmatter.coverImage}`)
//         }
//       }

//       const sanityDoc = {
//         _type: 'blog',
//         title: frontmatter.title,
//         slug: {
//           _type: 'slug',
//           current: folder,
//         },
//         excerpt: frontmatter.excerpt || frontmatter.description || '',
//         category: frontmatter.category || (frontmatter.categories && frontmatter.categories[0]) || 'seo',
//         tags: frontmatter.tags || [],
//         body: body,
//         publishedAt: frontmatter.date ? new Date(frontmatter.date).toISOString() : new Date().toISOString(),
//         seoTitle: frontmatter.seoTitle || frontmatter.title,
//         seoDescription: frontmatter.seoDescription || frontmatter.excerpt || '',
//       }

//       if (coverImageAsset) {
//         sanityDoc.coverImage = {
//           _type: 'image',
//           asset: {
//             _type: 'reference',
//             _ref: coverImageAsset._id,
//           },
//         }
//       }

//       await client.create(sanityDoc)
//       console.log(`✅ Migrated: ${frontmatter.title}\n`)

//     } catch (error) {
//       console.error(`❌ Error migrating ${folder}:`, error.message)
//     }
//   }

//   console.log('🎉 Blog migration complete!')
// }

// migrateBlogsToSanity()

const { createClient } = require('@sanity/client')
const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
require('dotenv').config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

// Enhanced markdown to Portable Text converter with proper marks
function parseInlineMarks(text) {
  const children = []
  const markDefs = []
  let position = 0
  
  // Regex patterns for inline markdown
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  const boldRegex = /\*\*([^*]+)\*\*/g
  const italicRegex = /\*([^*]+)\*/g
  const codeRegex = /`([^`]+)`/g
  
  // Find all matches and their positions
  const matches = []
  
  let match
  while ((match = linkRegex.exec(text)) !== null) {
    matches.push({ type: 'link', start: match.index, end: match.index + match[0].length, text: match[1], url: match[2] })
  }
  while ((match = boldRegex.exec(text)) !== null) {
    matches.push({ type: 'bold', start: match.index, end: match.index + match[0].length, text: match[1] })
  }
  while ((match = italicRegex.exec(text)) !== null) {
    // Skip if it's part of a bold (**, not single *)
    if (text[match.index - 1] !== '*' && text[match.index + match[0].length] !== '*') {
      matches.push({ type: 'italic', start: match.index, end: match.index + match[0].length, text: match[1] })
    }
  }
  while ((match = codeRegex.exec(text)) !== null) {
    matches.push({ type: 'code', start: match.index, end: match.index + match[0].length, text: match[1] })
  }
  
  // Sort by position
  matches.sort((a, b) => a.start - b.start)
  
  // Build children array
  matches.forEach((m, idx) => {
    // Add text before this match
    if (position < m.start) {
      const plainText = text.substring(position, m.start)
      if (plainText) {
        children.push({
          _type: 'span',
          _key: `span-${Date.now()}-${Math.random()}`,
          text: plainText,
          marks: []
        })
      }
    }
    
    // Add the marked text
    if (m.type === 'link') {
      const markKey = `link-${Date.now()}-${Math.random()}`
      markDefs.push({
        _key: markKey,
        _type: 'link',
        href: m.url
      })
      children.push({
        _type: 'span',
        _key: `span-${Date.now()}-${Math.random()}`,
        text: m.text,
        marks: [markKey]
      })
    } else if (m.type === 'bold') {
      children.push({
        _type: 'span',
        _key: `span-${Date.now()}-${Math.random()}`,
        text: m.text,
        marks: ['strong']
      })
    } else if (m.type === 'italic') {
      children.push({
        _type: 'span',
        _key: `span-${Date.now()}-${Math.random()}`,
        text: m.text,
        marks: ['em']
      })
    } else if (m.type === 'code') {
      children.push({
        _type: 'span',
        _key: `span-${Date.now()}-${Math.random()}`,
        text: m.text,
        marks: ['code']
      })
    }
    
    position = m.end
  })
  
  // Add remaining text
  if (position < text.length) {
    const plainText = text.substring(position)
    if (plainText) {
      children.push({
        _type: 'span',
        _key: `span-${Date.now()}-${Math.random()}`,
        text: plainText,
        marks: []
      })
    }
  }
  
  // If no matches, return plain text
  if (children.length === 0) {
    children.push({
      _type: 'span',
      _key: `span-${Date.now()}-${Math.random()}`,
      text: text,
      marks: []
    })
  }
  
  return { children, markDefs }
}

function markdownToPortableText(markdown) {
  const blocks = []
  const lines = markdown.split('\n')
  let currentParagraph = []
  let inList = false
  let listItems = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmed = line.trim()

    // Skip image lines and author lines
    if (trimmed.startsWith('![') || 
        trimmed.includes('Isha Sachdeva') || 
        trimmed.includes('Founder, visble.ai') ||
        trimmed.match(/^#{6,}\s*Isha/)) {
      continue
    }

    // Empty line
    if (trimmed === '') {
      // Flush list
      if (inList && listItems.length > 0) {
        blocks.push({
          _type: 'block',
          _key: `block-${Date.now()}-${Math.random()}`,
          style: 'normal',
          listItem: 'bullet',
          children: listItems,
          markDefs: [],
        })
        listItems = []
        inList = false
      }
      
      // Flush paragraph
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(' ')
        const parsed = parseInlineMarks(text)
        blocks.push({
          _type: 'block',
          _key: `block-${Date.now()}-${Math.random()}`,
          style: 'normal',
          children: parsed.children,
          markDefs: parsed.markDefs,
        })
        currentParagraph = []
      }
      continue
    }

    // Headings (clean any escaped characters)
    if (trimmed.startsWith('# ')) {
      const cleanText = trimmed.replace(/^# /, '').replace(/\\/g, '')
      const parsed = parseInlineMarks(cleanText)
      blocks.push({
        _type: 'block',
        _key: `block-${Date.now()}-${Math.random()}`,
        style: 'h1',
        children: parsed.children,
        markDefs: parsed.markDefs,
      })
      continue
    }
    if (trimmed.startsWith('## ')) {
      const cleanText = trimmed.replace(/^## /, '').replace(/\\/g, '')
      const parsed = parseInlineMarks(cleanText)
      blocks.push({
        _type: 'block',
        _key: `block-${Date.now()}-${Math.random()}`,
        style: 'h2',
        children: parsed.children,
        markDefs: parsed.markDefs,
      })
      continue
    }
    if (trimmed.startsWith('### ')) {
      const cleanText = trimmed.replace(/^### /, '').replace(/\\/g, '')
      const parsed = parseInlineMarks(cleanText)
      blocks.push({
        _type: 'block',
        _key: `block-${Date.now()}-${Math.random()}`,
        style: 'h3',
        children: parsed.children,
        markDefs: parsed.markDefs,
      })
      continue
    }
    if (trimmed.startsWith('#### ')) {
      const cleanText = trimmed.replace(/^#### /, '').replace(/\\/g, '')
      const parsed = parseInlineMarks(cleanText)
      blocks.push({
        _type: 'block',
        _key: `block-${Date.now()}-${Math.random()}`,
        style: 'h4',
        children: parsed.children,
        markDefs: parsed.markDefs,
      })
      continue
    }

    // List items
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ') || /^\d+\\\.\s/.test(trimmed) || /^\d+\.\s/.test(trimmed)) {
      const listText = trimmed.replace(/^[-*]\s/, '').replace(/^\d+\\\.\s/, '').replace(/^\d+\.\s/, '')
      const parsed = parseInlineMarks(listText)
      blocks.push({
        _type: 'block',
        _key: `block-${Date.now()}-${Math.random()}`,
        style: 'normal',
        listItem: 'bullet',
        children: parsed.children,
        markDefs: parsed.markDefs,
        level: 1,
      })
      continue
    }

    // Regular paragraph text
    currentParagraph.push(trimmed)
  }

  // Flush remaining
  if (currentParagraph.length > 0) {
    const text = currentParagraph.join(' ')
    const parsed = parseInlineMarks(text)
    blocks.push({
      _type: 'block',
      _key: `block-${Date.now()}-${Math.random()}`,
      style: 'normal',
      children: parsed.children,
      markDefs: parsed.markDefs,
    })
  }

  return blocks
}

async function migrateBlogsToSanity() {
  console.log('🗑️  Deleting existing blogs...')
  const existingIds = await client.fetch('*[_type == "blog"]._id')
  for (const id of existingIds) {
    await client.delete(id)
  }
  console.log('✅ Deleted\n')

  console.log('📝 Migrating blog posts to Sanity with proper formatting...\n')

  const blogDir = path.join(process.cwd(), 'content', 'blog')
  
  if (!fs.existsSync(blogDir)) {
    console.error('❌ Blog directory not found:', blogDir)
    return
  }

  const folders = fs.readdirSync(blogDir)

  for (const folder of folders) {
    const folderPath = path.join(blogDir, folder)
    const mdPath = path.join(folderPath, 'index.md')

    if (!fs.existsSync(mdPath)) {
      console.log(`⚠️  Skipping ${folder} - no index.md found`)
      continue
    }

    try {
      const fileContent = fs.readFileSync(mdPath, 'utf-8')
      const { data: frontmatter, content } = matter(fileContent)

      console.log(`📄 Processing: ${frontmatter.title}`)

      const body = markdownToPortableText(content)

      // Upload cover image
      let coverImageAsset = null
      if (frontmatter.coverImage) {
        const possiblePaths = [
          path.join(folderPath, frontmatter.coverImage),
          path.join(process.cwd(), 'public', 'images', 'blog', frontmatter.coverImage),
          path.join(process.cwd(), 'public', frontmatter.coverImage),
        ]

        for (const imagePath of possiblePaths) {
          if (fs.existsSync(imagePath)) {
            console.log(`  📸 Uploading image: ${frontmatter.coverImage}`)
            const imageBuffer = fs.readFileSync(imagePath)
            coverImageAsset = await client.assets.upload('image', imageBuffer, {
              filename: path.basename(frontmatter.coverImage),
            })
            break
          }
        }

        if (!coverImageAsset) {
          console.log(`  ⚠️  Image not found: ${frontmatter.coverImage}`)
        }
      }

      const sanityDoc = {
        _type: 'blog',
        title: frontmatter.title,
        slug: {
          _type: 'slug',
          current: folder,
        },
        excerpt: frontmatter.excerpt || frontmatter.description || '',
        category: frontmatter.category || (frontmatter.categories && frontmatter.categories[0]) || 'seo',
        tags: frontmatter.tags || [],
        body: body,
        publishedAt: frontmatter.date ? new Date(frontmatter.date).toISOString() : new Date().toISOString(),
        seoTitle: frontmatter.seoTitle || frontmatter.title,
        seoDescription: frontmatter.seoDescription || frontmatter.excerpt || '',
      }

      if (coverImageAsset) {
        sanityDoc.coverImage = {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: coverImageAsset._id,
          },
        }
      }

      await client.create(sanityDoc)
      console.log(`✅ Migrated: ${frontmatter.title}\n`)

    } catch (error) {
      console.error(`❌ Error migrating ${folder}:`, error.message)
    }
  }

  console.log('🎉 Blog migration complete with bold text and clickable links!')
}

migrateBlogsToSanity()