// // scripts/migrate-to-sanity.js

// const { createClient } = require('@sanity/client')
// const fs = require('fs')
// const path = require('path')
// const matter = require('gray-matter')
// require('dotenv').config({ path: '.env.local' })

// // Sanity client with write token
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
//   apiVersion: '2024-01-01',
//   useCdn: false,
//   token: process.env.SANITY_API_TOKEN, // Must have write permissions
// })

// // ══════════════════════════════════════════════════════════════════════════════
// // MIGRATE BLOG POSTS FROM MARKDOWN FILES
// // ══════════════════════════════════════════════════════════════════════════════

// async function migrateBlogPosts() {
//   console.log('📝 Starting blog post migration...')

//   const postsDirectory = path.join(process.cwd(), 'content/blog')
  
//   if (!fs.existsSync(postsDirectory)) {
//     console.log('❌ Blog directory not found at:', postsDirectory)
//     return
//   }

//   const folderNames = fs.readdirSync(postsDirectory)
//   console.log(`Found ${folderNames.length} blog post folders`)

//   for (const folderName of folderNames) {
//     const fullPath = path.join(postsDirectory, folderName, 'index.md')
    
//     if (!fs.existsSync(fullPath)) {
//       console.log(`⚠️  Skipping ${folderName} - no index.md found`)
//       continue
//     }

//     try {
//       const fileContents = fs.readFileSync(fullPath, 'utf8')
//       const { data, content } = matter(fileContents)

//       // Upload cover image if it exists
//       let coverImageAsset = null
//       if (data.coverImage) {
//         const imagePath = path.join(process.cwd(), 'public/images/blog', data.coverImage)
//         if (fs.existsSync(imagePath)) {
//           console.log(`  📸 Uploading image: ${data.coverImage}`)
//           const imageBuffer = fs.readFileSync(imagePath)
//           coverImageAsset = await client.assets.upload('image', imageBuffer, {
//             filename: data.coverImage,
//           })
//         }
//       }

//       // Convert markdown to Portable Text
//       const portableTextBody = convertMarkdownToPortableText(content)

//       // Create Sanity document
//       const sanityDoc = {
//         _type: 'blog',
//         title: data.title || folderName,
//         slug: {
//           _type: 'slug',
//           current: folderName,
//         },
//         excerpt: data.excerpt || content.split('\n\n')[0].substring(0, 200),
//         seoTitle: data.title || folderName,
//         seoDescription: data.excerpt || content.split('\n\n')[0].substring(0, 160),
//         category: data.categories?.[0]?.toLowerCase().replace(/\s+/g, '-') || 'seo',
//         tags: data.categories || [],
//         publishedAt: data.date || new Date().toISOString(),
//         status: 'published',
//         body: portableTextBody,
//       }

//       // Add cover image if uploaded
//       if (coverImageAsset) {
//         sanityDoc.coverImage = {
//           _type: 'image',
//           asset: {
//             _type: 'reference',
//             _ref: coverImageAsset._id,
//           },
//           alt: data.title || folderName,
//         }
//       }

//       // Create document in Sanity
//       await client.create(sanityDoc)
//       console.log(`✅ Migrated: ${data.title || folderName}`)
//     } catch (error) {
//       console.error(`❌ Error migrating ${folderName}:`, error.message)
//     }
//   }

//   console.log('✅ Blog post migration complete!\n')
// }

// // ══════════════════════════════════════════════════════════════════════════════
// // MIGRATE CASE STUDIES FROM lib/case-studies.ts
// // ══════════════════════════════════════════════════════════════════════════════

// async function migrateCaseStudies() {
//   console.log('📊 Starting case study migration...')

//   // Import case studies data
//   const caseStudiesPath = path.join(process.cwd(), 'lib/case-studies.ts')
  
//   // Hardcoded data (since we can't easily import TS in Node.js)
//   const caseStudiesData = [
//     {
//       slug: 'acredge-case-study',
//       company: 'Acredge',
//       location: 'Gurugram, India',
//       avatar: '/output-onlinepngtools.png',
//       title: 'How Acredge Went From 0 to 100+ Source Mentions within 60 Days',
//       shortDescription: "Learn how a DA 8 website, with no keywords ranking on the first page, gained AI source mentions using topical authority, GEO strategy, and semantic SEO, backed by real data and Visble AI insights.",
//       industry: 'EdTech',
//       companySize: '50-100 employees',
//       timeline: '60 days',
//       tags: ['GEO', 'AI Search', 'EdTech', 'Brand Visibility'],
//       graphData: [
//         { week: 'Start', value: 0 },
//         { week: 'Week 2', value: 8 },
//         { week: 'Week 4', value: 35 },
//         { week: 'Week 6', value: 68 },
//         { week: 'Week 8', value: 100 }
//       ],
//       challenge: {
//         title: 'The Challenge',
//         description: "Acredge wasn't just racing for SERP positions; we were taking over AI Search by increasing Source Mention and visibility on AI Answers. We needed an immediate Topical Authority to drive organic traffic while simultaneously structuring data to capture brand citations in a highly competitive market.",
//         painPoints: [
//           'Zero existing SEO foundation or domain authority',
//           'No ranking keywords in their niche',
//           'Needed rapid market penetration without traditional SEO timeline',
//           'Competing against industry giants with deep-rooted Topical Clusters',
//         ]
//       },
//       solution: {
//         title: 'The Visble Approach',
//         description: "A GEO strategy that drives results has to start with the fundamentals of SEO. We had to set the SEO core strong before moving to aggressive GEO strategies.\n\nFor that, we divided our strategy into two phases—Basic SEO Optimisation for every blog and in the next phase, we went an extra mile to make the AI Search Engines trust and obsess over our content.",
//         strategies: [
//           {
//             name: 'Semantic Cluster Strategy',
//             description: 'Developed interconnected topical clusters using high-intent entities to bridge knowledge gaps with data-driven niche content.'
//           },
//           {
//             name: 'Query Fan-Out Optimization',
//             description: 'Mapped and targeted expanded query patterns used by LLMs and AI Overviews to discover authoritative sources.'
//           },
//           {
//             name: 'Citation-Worthy Content',
//             description: "Published Acredge's unique expert insights in structured formats to enhance semantic crawlability and earn primary source citations."
//           },
//           {
//             name: 'Real-Time Monitoring',
//             description: "Used Visble's platform to track source mentions across ChatGPT, Perplexity, and Google AI Overview daily."
//           }
//         ]
//       },
//       results: {
//         title: 'The Results',
//         description: 'Within 60 days, Acredge transformed from invisible to one of the most cited sources in its industry.',
//         metrics: [
//           {
//             label: 'Source Mentions',
//             value: '100+',
//             change: 'From 0 in 60 days'
//           },
//           {
//             label: 'AI Search Visibility',
//             value: '850%',
//             change: 'Increase in 2 months'
//           },
//           {
//             label: 'Competitive Position',
//             value: 'Top 5',
//             change: 'Against 10-year-old competitors'
//           },
//           {
//             label: 'Organic Traffic',
//             value: '320%',
//             change: 'Growth from AI referrals'
//           }
//         ],
//         testimonial: {
//           quote: "Visble helped us leapfrog competitors who've been in the market for years. By focusing on AI search optimization, we achieved in 60 days what would have taken 2+ years with traditional SEO.",
//           author: 'Agam',
//           role: 'Founder, Acredge'
//         }
//       },
//     },
//     {
//       slug: 'flyhomes-case-study',
//       company: 'Flyhomes',
//       location: 'Washington, USA',
//       avatar: '/iddHundDDQ_1767881827127.png',
//       title: 'How Flyhomes Gained 512% Growth in Source Mentions Within 40 days',
//       shortDescription: "Flyhomes achieved AI source mentions and a top-3 ranking for citations with Visble. See how our SEO and GEO strategies rebuilt ChatGPT's trust in just 40 days.",
//       industry: 'Real Estate',
//       companySize: '200-500 employees',
//       timeline: '40 days',
//       tags: ['Real Estate', 'Citation Optimization', 'ChatGPT', 'Brand Mentions'],
//       graphData: [
//         { week: 'Start', value: 15 },
//         { week: 'Week 1', value: 25 },
//         { week: 'Week 2', value: 45 },
//         { week: 'Week 3', value: 70 },
//         { week: 'Week 4', value: 92 }
//       ],
//       challenge: {
//         title: 'The Challenge',
//         description: 'Flyhomes was getting cited by AI models, but far less frequently than competitors, despite having quality content.',
//         painPoints: [
//           'Ranked 17th in source mentions among real estate companies',
//           'Inconsistent citation patterns across different AI models',
//           'ChatGPT prioritised external sources over Flyhomes.',
//           'The goal was to increase brand mentions without increasing ad spend.',
//         ]
//       },
//       solution: {
//         title: 'The Visble Approach',
//         description: 'We moved beyond standard SEO to perform Generative Engine Optimisation (GEO). By understanding how ChatGPT evaluates credibility, we bridged the gap between "having information" and "being the source."',
//         strategies: [
//           {
//             name: 'Context Mapping',
//             description: 'Identified the exact topics and question types where ChatGPT was most likely to cite real estate sources.'
//           },
//           {
//             name: 'Content Gap Analysis',
//             description: 'Found topics where Flyhomes had expertise but lacked AI-optimised content coverage.'
//           },
//           {
//             name: 'Authority Signals',
//             description: 'Revamped content with the specific technical markers and data structures that LLMs prioritise.'
//           },
//           {
//             name: 'Topical Clustering',
//             description: "Created interconnected hubs that proved Flyhomes' depth of knowledge across all real estate queries."
//           }
//         ]
//       },
//       results: {
//         title: 'The Results',
//         description: 'We stopped treating content as static pages and started treating it as training-ready data. By feeding the AI exactly what it needed to see: authority signals, schema-rich indicators, and semantic depth, we turned Flyhomes from a "result" into a "source.',
//         metrics: [
//           {
//             label: 'Source Mentions',
//             value: '512%',
//             change: 'Growth in 40 days'
//           },
//           {
//             label: 'Ranking Position',
//             value: '3rd',
//             change: 'From 17th position'
//           },
//           {
//             label: 'Citation Consistency',
//             value: '89%',
//             change: 'Across AI models'
//           },
//           {
//             label: 'Brand Queries',
//             value: '245%',
//             change: 'Increase in brand searches'
//           }
//         ],
//         testimonial: {
//           quote: "We were creating great content but ChatGPT wasn't citing us. Visble showed us exactly what context and topics to focus on. The results were immediate and dramatic.",
//           author: 'Vaibhav',
//           role: 'Marketing Director, Flyhomes'
//         }
//       },
//     },
//     {
//       slug: 'dgft-guru-case-study',
//       company: 'DGFT Guru',
//       location: 'India',
//       avatar: '/dgft.png',
//       title: 'DGFT Guru Gained Visibility from 20% to 80% by Revamping Content for AI',
//       shortDescription: "Here's how Visble used SEO and GEO strategies to achieve a 400% citation recovery and a 290% surge in AI-driven traffic by optimising pre-existing content.",
//       industry: 'Government Compliance',
//       companySize: '10-50 employees',
//       timeline: '45 days',
//       tags: ['Content Freshness', 'Government', 'AI Overview', 'Recovery'],
//       graphData: [
//         { week: 'Month 1', value: 65 },
//         { week: 'Month 2', value: 35 },
//         { week: 'Month 3', value: 20 },
//         { week: 'Refresh', value: 45 },
//         { week: 'Month 6', value: 80 }
//       ],
//       challenge: {
//         title: 'The Challenge',
//         description: 'Despite a strong performance previously, DGFT Guru saw a declining visibility in AI search results.',
//         painPoints: [
//           'Despite a strong performance previously, DGFT Guru saw a declining visibility in AI search results.',
//           'Outdated and unstructured content was being ignored by AI crawlers.',
//           'New players with updated (though less authoritative) info were stealing mention share.',
//           "Recent changes in government export-import policies weren't reflected in real-time.",
//         ]
//       },
//       solution: {
//         title: 'The Visble Approach',
//         description: "Our strategy moved beyond keywords to semantic relevance and freshness. We didn't just update the existing content; we restructured it to make it skimmable by AI models. The right combo of SEO and GEO resulted in regaining traffic and solidifying authority in AI search.",
//         strategies: [
//           {
//             name: 'Freshness Audit',
//             description: 'Scanned existing content for outdated information that AI models were flagging as unreliable.'
//           },
//           {
//             name: 'Query Fan-Out Analysis',
//             description: 'Mapped new query patterns related to recent government policy changes for high-intent queries.'
//           },
//           {
//             name: 'Content Refresh Protocol',
//             description: 'Systematically updated content with current data, adding publication and update dates for crawlability'
//           },
//           {
//             name: 'Timeline Signals',
//             description: 'Integrated schema-rich freshness indicators prioritised by AI models for authority and source reliability.'
//           }
//         ]
//       },
//       results: {
//         title: 'The Results',
//         description: "By prioritising content freshness and semantic relevance, DGFT Guru didn't just recover; they redefined their market presence. Moving beyond simple rankings, the Gurus are now the primary cited source for almost every significant industry query across AI search platforms.",
//         metrics: [
//           {
//             label: 'Brand Visibility',
//             value: '80%',
//             change: 'From 20% baseline'
//           },
//           {
//             label: 'Content Freshness Score',
//             value: '95%',
//             change: 'Up from 45%'
//           },
//           {
//             label: 'Citation Recovery',
//             value: '400%',
//             change: 'Increase in mentions'
//           },
//           {
//             label: 'Traffic from AI',
//             value: '290%',
//             change: 'Growth in referrals'
//           }
//         ],
//         testimonial: {
//           quote: "Visble's monitoring showed us exactly when and why our visibility was dropping. The content refresh strategy brought us back stronger than ever.",
//           author: 'Mehul',
//           role: 'Founder, DGFT Guru'
//         }
//       },
//     }
//   ]

//   console.log(`Found ${caseStudiesData.length} case studies to migrate`)

//   for (const study of caseStudiesData) {
//     try {
//       // Upload avatar/logo if it exists
//       let avatarAsset = null
//       if (study.avatar) {
//         const avatarPath = path.join(process.cwd(), 'public', study.avatar)
//         if (fs.existsSync(avatarPath)) {
//           console.log(`  📸 Uploading logo: ${study.avatar}`)
//           const imageBuffer = fs.readFileSync(avatarPath)
//           avatarAsset = await client.assets.upload('image', imageBuffer, {
//             filename: path.basename(study.avatar),
//           })
//         }
//       }

//       // Create Sanity document
//       const sanityDoc = {
//         _type: 'caseStudy',
//         company: study.company,
//         slug: {
//           _type: 'slug',
//           current: study.slug,
//         },
//         title: study.title,
//         shortDescription: study.shortDescription,
//         location: study.location,
//         industry: study.industry,
//         companySize: study.companySize,
//         timeline: study.timeline,
//         tags: study.tags || [],

//         // Challenge
//         challengeTitle: study.challenge?.title || 'The Challenge',
//         challengeDescription: study.challenge?.description || '',
//         painPoints: study.challenge?.painPoints || [],

//         // Solution
//         solutionTitle: study.solution?.title || 'The Visble Approach',
//         solutionDescription: study.solution?.description || '',
//         strategies: study.solution?.strategies || [],

//         // Results
//         resultsTitle: study.results?.title || 'The Results',
//         resultsDescription: study.results?.description || '',
//         metrics: study.results?.metrics || [],

//         // Testimonial
//         testimonialQuote: study.results?.testimonial?.quote || '',
//         testimonialAuthor: study.results?.testimonial?.author || '',
//         testimonialRole: study.results?.testimonial?.role || '',

//         // Graph Data
//         graphData: study.graphData || [],
//       }

//       // Add avatar if uploaded
//       if (avatarAsset) {
//         sanityDoc.avatar = {
//           _type: 'image',
//           asset: {
//             _type: 'reference',
//             _ref: avatarAsset._id,
//           },
//           alt: `${study.company} logo`,
//         }
//       }

//       // Create document in Sanity
//       await client.create(sanityDoc)
//       console.log(`✅ Migrated: ${study.company} - ${study.title}`)
//     } catch (error) {
//       console.error(`❌ Error migrating ${study.company}:`, error.message)
//     }
//   }

//   console.log('✅ Case study migration complete!\n')
// }

// // ══════════════════════════════════════════════════════════════════════════════
// // HELPER: Convert Markdown to Portable Text
// // ══════════════════════════════════════════════════════════════════════════════

// function convertMarkdownToPortableText(markdown) {
//   if (!markdown) return []

//   const blocks = []
//   const lines = markdown.split('\n')
//   let currentParagraph = []

//   for (const line of lines) {
//     // Headings
//     if (line.startsWith('### ')) {
//       if (currentParagraph.length > 0) {
//         blocks.push(createBlock('normal', currentParagraph.join(' ')))
//         currentParagraph = []
//       }
//       blocks.push(createBlock('h3', line.replace('### ', '')))
//     } else if (line.startsWith('## ')) {
//       if (currentParagraph.length > 0) {
//         blocks.push(createBlock('normal', currentParagraph.join(' ')))
//         currentParagraph = []
//       }
//       blocks.push(createBlock('h2', line.replace('## ', '')))
//     } else if (line.startsWith('# ')) {
//       if (currentParagraph.length > 0) {
//         blocks.push(createBlock('normal', currentParagraph.join(' ')))
//         currentParagraph = []
//       }
//       blocks.push(createBlock('h2', line.replace('# ', '')))
//     }
//     // Empty line - end paragraph
//     else if (line.trim() === '') {
//       if (currentParagraph.length > 0) {
//         blocks.push(createBlock('normal', currentParagraph.join(' ')))
//         currentParagraph = []
//       }
//     }
//     // Regular text
//     else {
//       currentParagraph.push(line)
//     }
//   }

//   // Add final paragraph
//   if (currentParagraph.length > 0) {
//     blocks.push(createBlock('normal', currentParagraph.join(' ')))
//   }

//   return blocks
// }

// function createBlock(style, text) {
//   return {
//     _type: 'block',
//     style: style,
//     children: [
//       {
//         _type: 'span',
//         text: text,
//         marks: [],
//       },
//     ],
//   }
// }

// // ══════════════════════════════════════════════════════════════════════════════
// // RUN MIGRATION
// // ══════════════════════════════════════════════════════════════════════════════

// async function runMigration() {
//   console.log('🚀 Starting migration to Sanity...\n')

//   try {
//     await migrateCaseStudies() // Start with case studies (smaller dataset)
//     await migrateBlogPosts()   // Then blog posts

//     console.log('🎉 Migration complete!')
//     console.log('\n📍 Next steps:')
//     console.log('1. Refresh your website: http://localhost:3000/blogs')
//     console.log('2. Check Sanity Studio: http://localhost:3333')
//     console.log('3. Review your migrated content')
//   } catch (error) {
//     console.error('❌ Migration failed:', error)
//     process.exit(1)
//   }
// }

// runMigration()
















// const { createClient } = require('@sanity/client')
// const fs = require('fs')
// const path = require('path')
// require('dotenv').config({ path: '.env.local' })

// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
//   apiVersion: '2024-01-01',
//   useCdn: false,
//   token: process.env.SANITY_API_TOKEN,
// })

// async function deleteAndMigrate() {
//   // Delete existing
//   console.log('🗑️  Deleting existing case studies...')
//   const existing = await client.fetch('*[_type == "caseStudy"]')
//   for (const study of existing) {
//     await client.delete(study._id)
//   }
//   console.log('✅ Deleted\n')

//   // Migrate with FULL graph data
//   console.log('📊 Migrating case studies with full graph data...\n')

//   const caseStudiesData = [
//     {
//       slug: 'acredge-case-study',
//       company: 'Acredge',
//       location: 'Gurugram, India',
//       avatar: '/output-onlinepngtools.png',
//       title: 'How Acredge Went From 0 to 100+ Source Mentions within 60 Days',
//       shortDescription: "Learn how a DA 8 website, with no keywords ranking on the first page, gained AI source mentions using topical authority, GEO strategy, and semantic SEO.",
//       industry: 'EdTech',
//       companySize: '50-100 employees',
//       timeline: '60 days',
//       tags: ['GEO', 'AI Search', 'EdTech', 'Brand Visibility'],
//       graphData: [
//         { week: 'Start', sourceMentions: 0, rankingPosition: 100, citationConsistency: 0, brandQueries: 5 },
//         { week: 'Week 2', sourceMentions: 8, rankingPosition: 85, citationConsistency: 15, brandQueries: 12 },
//         { week: 'Week 4', sourceMentions: 35, rankingPosition: 60, citationConsistency: 45, brandQueries: 35 },
//         { week: 'Week 6', sourceMentions: 68, rankingPosition: 35, citationConsistency: 70, brandQueries: 65 },
//         { week: 'Week 8', sourceMentions: 100, rankingPosition: 15, citationConsistency: 89, brandQueries: 95 }
//       ],
//       challenge: {
//         title: 'The Challenge',
//         description: "Acredge wasn't just racing for SERP positions; we were taking over AI Search by increasing Source Mention and visibility on AI Answers.",
//         painPoints: [
//           'Zero existing SEO foundation or domain authority',
//           'No ranking keywords in their niche',
//           'Needed rapid market penetration without traditional SEO timeline',
//           'Competing against industry giants with deep-rooted Topical Clusters',
//         ]
//       },
//       solution: {
//         title: 'The Visble Approach',
//         description: "A GEO strategy that drives results has to start with the fundamentals of SEO.",
//         strategies: [
//           { name: 'Semantic Cluster Strategy', description: 'Developed interconnected topical clusters using high-intent entities.' },
//           { name: 'Query Fan-Out Optimization', description: 'Mapped and targeted expanded query patterns used by LLMs.' },
//           { name: 'Citation-Worthy Content', description: "Published Acredge's unique expert insights in structured formats." },
//           { name: 'Real-Time Monitoring', description: "Used Visble's platform to track source mentions daily." }
//         ]
//       },
//       results: {
//         title: 'The Results',
//         description: 'Within 60 days, Acredge transformed from invisible to one of the most cited sources.',
//         metrics: [
//           { label: 'Source Mentions', value: '100+', change: 'From 0 in 60 days' },
//           { label: 'AI Search Visibility', value: '850%', change: 'Increase in 2 months' },
//           { label: 'Competitive Position', value: 'Top 5', change: 'Against 10-year-old competitors' },
//           { label: 'Organic Traffic', value: '320%', change: 'Growth from AI referrals' }
//         ],
//         testimonial: {
//           quote: "Visble helped us leapfrog competitors who've been in the market for years.",
//           author: 'Agam',
//           role: 'Founder, Acredge'
//         }
//       },
//     },
//     {
//       slug: 'flyhomes-case-study',
//       company: 'Flyhomes',
//       location: 'Washington, USA',
//       avatar: '/iddHundDDQ_1767881827127.png',
//       title: 'How Flyhomes Gained 512% Growth in Source Mentions Within 40 days',
//       shortDescription: "Flyhomes achieved AI source mentions and a top-3 ranking for citations with Visble.",
//       industry: 'Real Estate',
//       companySize: '200-500 employees',
//       timeline: '40 days',
//       tags: ['Real Estate', 'Citation Optimization', 'ChatGPT', 'Brand Mentions'],
//       graphData: [
//         { week: 'Start', sourceMentions: 15, rankingPosition: 85, citationConsistency: 30, brandQueries: 20 },
//         { week: 'Week 1', sourceMentions: 25, rankingPosition: 75, citationConsistency: 45, brandQueries: 35 },
//         { week: 'Week 2', sourceMentions: 45, rankingPosition: 55, citationConsistency: 65, brandQueries: 55 },
//         { week: 'Week 3', sourceMentions: 70, rankingPosition: 30, citationConsistency: 80, brandQueries: 75 },
//         { week: 'Week 4', sourceMentions: 92, rankingPosition: 8, citationConsistency: 89, brandQueries: 90 }
//       ],
//       challenge: {
//         title: 'The Challenge',
//         description: 'Flyhomes was getting cited by AI models, but far less frequently than competitors.',
//         painPoints: [
//           'Ranked 17th in source mentions among real estate companies',
//           'Inconsistent citation patterns across different AI models',
//           'ChatGPT prioritised external sources over Flyhomes',
//           'Goal was to increase brand mentions without increasing ad spend',
//         ]
//       },
//       solution: {
//         title: 'The Visble Approach',
//         description: 'We moved beyond standard SEO to perform Generative Engine Optimisation (GEO).',
//         strategies: [
//           { name: 'Context Mapping', description: 'Identified exact topics where ChatGPT cites real estate sources.' },
//           { name: 'Content Gap Analysis', description: 'Found topics where Flyhomes had expertise but lacked AI-optimised content.' },
//           { name: 'Authority Signals', description: 'Revamped content with technical markers that LLMs prioritise.' },
//           { name: 'Topical Clustering', description: 'Created interconnected hubs proving depth of knowledge.' }
//         ]
//       },
//       results: {
//         title: 'The Results',
//         description: 'We turned Flyhomes from a "result" into a "source".',
//         metrics: [
//           { label: 'Source Mentions', value: '512%', change: 'Growth in 40 days' },
//           { label: 'Ranking Position', value: '3rd', change: 'From 17th position' },
//           { label: 'Citation Consistency', value: '89%', change: 'Across AI models' },
//           { label: 'Brand Queries', value: '245%', change: 'Increase in brand searches' }
//         ],
//         testimonial: {
//           quote: "Visble showed us exactly what context and topics to focus on. The results were immediate.",
//           author: 'Vaibhav',
//           role: 'Marketing Director, Flyhomes'
//         }
//       },
//     },
//     {
//       slug: 'dgft-guru-case-study',
//       company: 'DGFT Guru',
//       location: 'India',
//       avatar: '/dgft.png',
//       title: 'DGFT Guru Gained Visibility from 20% to 80% by Revamping Content for AI',
//       shortDescription: "Visble achieved 400% citation recovery and 290% surge in AI-driven traffic.",
//       industry: 'Government Compliance',
//       companySize: '10-50 employees',
//       timeline: '45 days',
//       tags: ['Content Freshness', 'Government', 'AI Overview', 'Recovery'],
//       graphData: [
//         { week: 'Month 1', sourceMentions: 65, rankingPosition: 35, citationConsistency: 70, brandQueries: 60 },
//         { week: 'Month 2', sourceMentions: 35, rankingPosition: 65, citationConsistency: 40, brandQueries: 35 },
//         { week: 'Month 3', sourceMentions: 20, rankingPosition: 80, citationConsistency: 25, brandQueries: 22 },
//         { week: 'Refresh', sourceMentions: 45, rankingPosition: 55, citationConsistency: 50, brandQueries: 48 },
//         { week: 'Month 6', sourceMentions: 80, rankingPosition: 20, citationConsistency: 85, brandQueries: 82 }
//       ],
//       challenge: {
//         title: 'The Challenge',
//         description: 'DGFT Guru saw declining visibility in AI search results.',
//         painPoints: [
//           'Declining visibility in AI search results',
//           'Outdated and unstructured content being ignored by AI crawlers',
//           'New players stealing mention share',
//           "Recent policy changes weren't reflected in real-time",
//         ]
//       },
//       solution: {
//         title: 'The Visble Approach',
//         description: "Our strategy moved beyond keywords to semantic relevance and freshness.",
//         strategies: [
//           { name: 'Freshness Audit', description: 'Scanned content for outdated information AI models flagged.' },
//           { name: 'Query Fan-Out Analysis', description: 'Mapped new query patterns related to policy changes.' },
//           { name: 'Content Refresh Protocol', description: 'Updated content with current data and dates.' },
//           { name: 'Timeline Signals', description: 'Integrated schema-rich freshness indicators.' }
//         ]
//       },
//       results: {
//         title: 'The Results',
//         description: "DGFT Guru redefined their market presence as the primary cited source.",
//         metrics: [
//           { label: 'Brand Visibility', value: '80%', change: 'From 20% baseline' },
//           { label: 'Content Freshness Score', value: '95%', change: 'Up from 45%' },
//           { label: 'Citation Recovery', value: '400%', change: 'Increase in mentions' },
//           { label: 'Traffic from AI', value: '290%', change: 'Growth in referrals' }
//         ],
//         testimonial: {
//           quote: "Visble's monitoring showed us exactly when and why our visibility was dropping.",
//           author: 'Mehul',
//           role: 'Founder, DGFT Guru'
//         }
//       },
//     }
//   ]

//   for (const study of caseStudiesData) {
//     let avatarAsset = null
//     if (study.avatar) {
//       const avatarPath = path.join(process.cwd(), 'public', study.avatar)
//       if (fs.existsSync(avatarPath)) {
//         console.log(`  📸 Uploading: ${study.avatar}`)
//         const imageBuffer = fs.readFileSync(avatarPath)
//         avatarAsset = await client.assets.upload('image', imageBuffer, {
//           filename: path.basename(study.avatar),
//         })
//       }
//     }

//     const sanityDoc = {
//       _type: 'caseStudy',
//       company: study.company,
//       slug: { _type: 'slug', current: study.slug },
//       title: study.title,
//       shortDescription: study.shortDescription,
//       location: study.location,
//       industry: study.industry,
//       companySize: study.companySize,
//       timeline: study.timeline,
//       tags: study.tags,
//       challengeTitle: study.challenge.title,
//       challengeDescription: study.challenge.description,
//       painPoints: study.challenge.painPoints,
//       solutionTitle: study.solution.title,
//       solutionDescription: study.solution.description,
//       strategies: study.solution.strategies,
//       resultsTitle: study.results.title,
//       resultsDescription: study.results.description,
//       metrics: study.results.metrics,
//       testimonialQuote: study.results.testimonial.quote,
//       testimonialAuthor: study.results.testimonial.author,
//       testimonialRole: study.results.testimonial.role,
//       graphData: study.graphData, // FULL data with all 4 metrics
//     }

//     if (avatarAsset) {
//       sanityDoc.avatar = {
//         _type: 'image',
//         asset: { _type: 'reference', _ref: avatarAsset._id },
//         alt: `${study.company} logo`,
//       }
//     }

//     await client.create(sanityDoc)
//     console.log(`✅ Migrated: ${study.company}`)
//   }

//   console.log('\n🎉 Complete! Refresh your site.')
// }

// deleteAndMigrate()


const { createClient } = require('@sanity/client')
const fs = require('fs')
const path = require('path')
require('dotenv').config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

async function deleteAndMigrate() {
  console.log('🗑️  Deleting existing case studies...')
  const existing = await client.fetch('*[_type == "caseStudy"]')
  for (const study of existing) {
    await client.delete(study._id)
  }
  console.log('✅ Deleted\n')

  console.log('📊 Migrating case studies with COMPLETE data...\n')

  const caseStudiesData = [
    {
      slug: 'acredge-case-study',
      company: 'Acredge',
      location: 'Gurugram, India',
      avatar: '/output-onlinepngtools.png',
      title: 'How Acredge Went From 0 to 100+ Source Mentions within 60 Days',
      shortDescription: "Learn how a DA 8 website, with no keywords ranking on the first page, gained AI source mentions using topical authority, GEO strategy, and semantic SEO.",
      industry: 'EdTech',
      companySize: '50-100 employees',
      timeline: '60 days',
      tags: ['GEO', 'AI Search', 'EdTech', 'Brand Visibility'],
      graphData: [
        { week: 'Start',  sourceMentions: 0,   rankingPosition: 100, citationConsistency: 0,  brandQueries: 5  },
        { week: 'Week 2', sourceMentions: 8,   rankingPosition: 85,  citationConsistency: 15, brandQueries: 12 },
        { week: 'Week 4', sourceMentions: 35,  rankingPosition: 60,  citationConsistency: 45, brandQueries: 35 },
        { week: 'Week 6', sourceMentions: 68,  rankingPosition: 35,  citationConsistency: 70, brandQueries: 65 },
        { week: 'Week 8', sourceMentions: 100, rankingPosition: 15,  citationConsistency: 89, brandQueries: 95 },
      ],
      challenge: {
        title: 'The Challenge',
        description: "Acredge wasn't just racing for SERP positions; we were taking over AI Search by increasing Source Mention and visibility on AI Answers.",
        painPoints: [
          'Zero existing SEO foundation or domain authority',
          'No ranking keywords in their niche',
          'Needed rapid market penetration without traditional SEO timeline',
          'Competing against industry giants with deep-rooted Topical Clusters',
        ],
      },
      workflow: {
        title: 'The Workflow: BTS',
        subtitle: 'A 60-day journey transforming AI search visibility through strategic implementation',
        steps: [
          { id: 1, days: 'Day 1-10',  title: 'Restructuring Website & URLs', description: 'Reorganised 100,000+ scattered pages into clean topical hierarchies, optimising URL structures for seamless Google and LLM index coverage.', icon: 'Globe',      color: 'purple', metrics: '100,000+ pages restructured' },
          { id: 2, days: 'Day 11-17', title: 'Gaining Domain Expertise',      description: "Interviewed Acredge's professionals to extract unique on-ground insights, identifying critical knowledge gaps that search engines and AI lacked.", icon: 'Users',      color: 'blue',   metrics: 'Deep industry insights' },
          { id: 3, days: 'Day 18-30', title: 'Crafting Semantic Content',      description: 'Developed skimmable, structured content using tables and FAQs, specifically designed for high readability by both users and LLM crawlers.', icon: 'FileText',   color: 'indigo', metrics: 'Optimized for LLM crawlers' },
          { id: 4, days: 'Day 31-40', title: 'Optimising for AI',              description: 'Implemented LLM.txt protocols to direct AI agents toward high-value data, ensuring our most authoritative content was prioritised for citations.', icon: 'Bot',        color: 'cyan',   metrics: 'LLM.txt implemented' },
          { id: 5, days: 'Day 41-50', title: 'Building Authority for SERPs',   description: 'Published 30 deep-research assets, combining niche expertise with strategic backlinking to force entry into the top 5 SERP positions.', icon: 'TrendingUp', color: 'green',  metrics: '30 research assets published' },
          { id: 6, days: 'Day 60',    title: 'Celebrating Excellence',          description: "And that's how Acredge got 100+ Source Mentions, 850% AI Search Visibility, top 5 Competitive Position, and 320% Organic Traffic!", icon: 'Award',      color: 'amber',  metrics: 'Mission accomplished!' },
        ],
        observation: {
          title: 'Our Observation',
          description: 'Traditional SEO rankings and quality backlinks remain the primary trust signals that trigger AI models to grant source mentions. So, SEO is still in the game. In fact, it builds a strong base for GEO strategies to perform well.',
        },
      },
      solution: {
        title: 'The Visble Approach',
        description: "A GEO strategy that drives results has to start with the fundamentals of SEO. We had to set the SEO core strong before moving to aggressive GEO strategies.\n\nFor that, we divided our strategy into two phases—Basic SEO Optimisation for every blog and in the next phase, we went an extra mile to make the AI Search Engines trust and obsess over our content.",
        strategies: [
          { name: 'Semantic Cluster Strategy', description: 'Developed interconnected topical clusters using high-intent entities to bridge knowledge gaps with data-driven niche content.' },
          { name: 'Query Fan-Out Optimization', description: 'Mapped and targeted expanded query patterns used by LLMs and AI Overviews to discover authoritative sources.' },
          { name: 'Citation-Worthy Content',   description: "Published Acredge's unique expert insights in structured formats to enhance semantic crawlability and earn primary source citations." },
          { name: 'Real-Time Monitoring',      description: "Used Visble's platform to track source mentions across ChatGPT, Perplexity, and Google AI Overview daily." },
        ],
      },
      results: {
        title: 'The Results',
        description: 'Within 60 days, Acredge transformed from invisible to one of the most cited sources in its industry.',
        metrics: [
          { label: 'Source Mentions',      value: '100+',  change: 'From 0 in 60 days' },
          { label: 'AI Search Visibility', value: '850%',  change: 'Increase in 2 months' },
          { label: 'Competitive Position', value: 'Top 5', change: 'Against 10-year-old competitors' },
          { label: 'Organic Traffic',      value: '320%',  change: 'Growth from AI referrals' },
        ],
        testimonial: {
          quote: "Visble helped us leapfrog competitors who've been in the market for years. By focusing on AI search optimization, we achieved in 60 days what would have taken 2+ years with traditional SEO.",
          author: 'Agam',
          role: 'Founder, Acredge',
        },
      },
    },
    {
      slug: 'flyhomes-case-study',
      company: 'Flyhomes',
      location: 'Washington, USA',
      avatar: '/iddHundDDQ_1767881827127.png',
      title: 'How Flyhomes Gained 512% Growth in Source Mentions Within 40 days',
      shortDescription: "Flyhomes achieved AI source mentions and a top-3 ranking for citations with Visble. See how our SEO and GEO strategies rebuilt ChatGPT's trust in just 40 days.",
      industry: 'Real Estate',
      companySize: '200-500 employees',
      timeline: '40 days',
      tags: ['Real Estate', 'Citation Optimization', 'ChatGPT', 'Brand Mentions'],
      graphData: [
        { week: 'Start',  sourceMentions: 15, rankingPosition: 85, citationConsistency: 30, brandQueries: 20 },
        { week: 'Week 1', sourceMentions: 25, rankingPosition: 75, citationConsistency: 45, brandQueries: 35 },
        { week: 'Week 2', sourceMentions: 45, rankingPosition: 55, citationConsistency: 65, brandQueries: 55 },
        { week: 'Week 3', sourceMentions: 70, rankingPosition: 30, citationConsistency: 80, brandQueries: 75 },
        { week: 'Week 4', sourceMentions: 92, rankingPosition: 8,  citationConsistency: 89, brandQueries: 90 },
      ],
      challenge: {
        title: 'The Challenge',
        description: 'Flyhomes was getting cited by AI models, but far less frequently than competitors, despite having quality content.',
        painPoints: [
          'Ranked 17th in source mentions among real estate companies',
          'Inconsistent citation patterns across different AI models',
          'ChatGPT prioritised external sources over Flyhomes.',
          'The goal was to increase brand mentions without increasing ad spend.',
        ],
      },
      workflow: {
        title: 'The Workflow: BTS',
        subtitle: 'A 40-day sprint to dominate AI search citations in real estate',
        steps: [
          { id: 1, days: 'Day 1-5',   title: 'Assessing Keyword and Intent',    description: 'Analysed high-volume informative keywords to identify gaps where AI models lacked credible source citations.', icon: 'Search',  color: 'purple', metrics: '500+ queries analyzed' },
          { id: 2, days: 'Day 6-12',  title: 'Running Informative Campaigns',    description: 'Used large number of prompts to target keywords and cover all possible queries with Visible Analytics tool.', icon: 'Map',     color: 'blue',   metrics: '20+ content gaps identified' },
          { id: 3, days: 'Day 13-22', title: 'Building Topical Authority',        description: 'Developed content for fifteen specialised GEO-focused topics to establish dominance in the real estate niche.', icon: 'Shield',  color: 'indigo', metrics: '50+ pages optimized' },
          { id: 4, days: 'Day 23-32', title: 'Tracking Performance',              description: 'Monitored citation growth across major LLMs while measuring significant increases in organic brand search queries.', icon: 'Network', color: 'cyan',   metrics: '8 topical clusters created' },
          { id: 5, days: 'Day 33-40', title: 'Witnessed Strategic Excellence',    description: 'Achieved top 3 positioning, 512% more mentions, 89% citation consistency, and a 245% brand query surge.', icon: 'Zap',     color: 'green',  metrics: '15+ quick wins implemented' },
          { id: 6, days: 'Day 40',    title: 'Achievement Unlocked',              description: 'Flyhomes rocketed from 17th to 3rd position with 512% growth in source mentions and 89% citation consistency!', icon: 'Trophy',  color: 'amber',  metrics: '3rd position achieved!' },
        ],
        observation: {
          title: 'Our Observation',
          description: 'AI models heavily favor sources that demonstrate clear topical expertise within specific contexts. Context-specific optimization beats broad content strategies.',
        },
      },
      solution: {
        title: 'The Visble Approach',
        description: 'We moved beyond standard SEO to perform Generative Engine Optimisation (GEO). By understanding how ChatGPT evaluates credibility, we bridged the gap between "having information" and "being the source."',
        strategies: [
          { name: 'Context Mapping',      description: 'Identified the exact topics and question types where ChatGPT was most likely to cite real estate sources.' },
          { name: 'Content Gap Analysis', description: 'Found topics where Flyhomes had expertise but lacked AI-optimised content coverage.' },
          { name: 'Authority Signals',    description: 'Revamped content with the specific technical markers and data structures that LLMs prioritise.' },
          { name: 'Topical Clustering',   description: "Created interconnected hubs that proved Flyhomes' depth of knowledge across all real estate queries." },
        ],
      },
      results: {
        title: 'The Results',
        description: 'We turned Flyhomes from a "result" into a "source".',
        metrics: [
          { label: 'Source Mentions',      value: '512%', change: 'Growth in 40 days' },
          { label: 'Ranking Position',     value: '3rd',  change: 'From 17th position' },
          { label: 'Citation Consistency', value: '89%',  change: 'Across AI models' },
          { label: 'Brand Queries',        value: '245%', change: 'Increase in brand searches' },
        ],
        testimonial: {
          quote: "We were creating great content but ChatGPT wasn't citing us. Visble showed us exactly what context and topics to focus on. The results were immediate and dramatic.",
          author: 'Vaibhav',
          role: 'Marketing Director, Flyhomes',
        },
      },
    },
    {
      slug: 'dgft-guru-case-study',
      company: 'DGFT Guru',
      location: 'India',
      avatar: '/dgft.png',
      title: 'DGFT Guru Gained Visibility from 20% to 80% by Revamping Content for AI',
      shortDescription: "Here's how Visble used SEO and GEO strategies to achieve a 400% citation recovery and a 290% surge in AI-driven traffic by optimising pre-existing content.",
      industry: 'Government Compliance',
      companySize: '10-50 employees',
      timeline: '45 days',
      tags: ['Content Freshness', 'Government', 'AI Overview', 'Recovery'],
      graphData: [
        { week: 'Month 1', sourceMentions: 65, rankingPosition: 35, citationConsistency: 70, brandQueries: 60 },
        { week: 'Month 2', sourceMentions: 35, rankingPosition: 65, citationConsistency: 40, brandQueries: 35 },
        { week: 'Month 3', sourceMentions: 20, rankingPosition: 80, citationConsistency: 25, brandQueries: 22 },
        { week: 'Refresh', sourceMentions: 45, rankingPosition: 55, citationConsistency: 50, brandQueries: 48 },
        { week: 'Month 6', sourceMentions: 80, rankingPosition: 20, citationConsistency: 85, brandQueries: 82 },
      ],
      challenge: {
        title: 'The Challenge',
        description: 'Despite a strong performance previously, DGFT Guru saw a declining visibility in AI search results.',
        painPoints: [
          'Despite a strong performance previously, DGFT Guru saw a declining visibility in AI search results.',
          'Outdated and unstructured content was being ignored by AI crawlers.',
          'New players with updated (though less authoritative) info were stealing mention share.',
          "Recent changes in government export-import policies weren't reflected in real-time.",
        ],
      },
      workflow: {
        title: 'The Workflow: BTS',
        subtitle: 'A 45-day recovery journey from 20% to 80% brand visibility',
        steps: [
          { id: 1, days: 'Day 1-7',   title: 'Auditing Existing Content',      description: 'Identified unreliable data flagging systemic trust issues to restore core domain authority and crawler confidence.', icon: 'AlertCircle', color: 'purple', metrics: 'Root cause identified' },
          { id: 2, days: 'Day 8-15',  title: 'Restructuring Core Pages',        description: 'Systematically reviewed all content to flag outdated information, expired data, and government policy changes not reflected on site.', icon: 'Calendar',   color: 'blue',   metrics: '150+ pages flagged as stale' },
          { id: 3, days: 'Day 16-25', title: 'Revamping Blog Content',           description: 'Recreated top-performing blogs by adding unique expert insights and high-volume keywords for maximum search reach.', icon: 'RefreshCw',  color: 'indigo', metrics: '150+ pages refreshed' },
          { id: 4, days: 'Day 26-35', title: 'Getting GEO Strategies at Work',  description: 'Restructured technical expertise into precise, scannable formats prioritised by AI search engines and generative models.', icon: 'Clock',      color: 'cyan',   metrics: 'Freshness protocol implemented' },
          { id: 5, days: 'Day 36-42', title: 'Realising Strategic Success',      description: 'Our SEO+GEO implementation delivered 80% visibility, 400% citation recovery, and massive AI-driven traffic surges.', icon: 'FileText',   color: 'green',  metrics: '25 new guides published' },
          { id: 6, days: 'Day 45',    title: 'Full Recovery Achieved',           description: 'DGFT Guru recovered to 80% visibility with 400% citation increase, exceeding previous peak performance!', icon: 'CheckCircle',color: 'amber',  metrics: '80% visibility achieved!' },
        ],
        observation: {
          title: 'Our Observation',
          description: 'Content freshness is a critical ranking factor for AI models, especially in rapidly changing domains like government compliance. Regular content updates with clear date signals are essential for maintaining AI visibility.',
        },
      },
      solution: {
        title: 'The Visble Approach',
        description: "Our strategy moved beyond keywords to semantic relevance and freshness. We didn't just update the existing content; we restructured it to make it skimmable by AI models.",
        strategies: [
          { name: 'Freshness Audit',         description: 'Scanned existing content for outdated information that AI models were flagging as unreliable.' },
          { name: 'Query Fan-Out Analysis',   description: 'Mapped new query patterns related to recent government policy changes for high-intent queries.' },
          { name: 'Content Refresh Protocol', description: 'Systematically updated content with current data, adding publication and update dates for crawlability.' },
          { name: 'Timeline Signals',         description: 'Integrated schema-rich freshness indicators prioritised by AI models for authority and source reliability.' },
        ],
      },
      results: {
        title: 'The Results',
        description: "By prioritising content freshness and semantic relevance, DGFT Guru didn't just recover; they redefined their market presence as the primary cited source.",
        metrics: [
          { label: 'Brand Visibility',        value: '80%',  change: 'From 20% baseline' },
          { label: 'Content Freshness Score', value: '95%',  change: 'Up from 45%' },
          { label: 'Citation Recovery',       value: '400%', change: 'Increase in mentions' },
          { label: 'Traffic from AI',         value: '290%', change: 'Growth in referrals' },
        ],
        testimonial: {
          quote: "Visble's monitoring showed us exactly when and why our visibility was dropping. The content refresh strategy brought us back stronger than ever.",
          author: 'Mehul',
          role: 'Founder, DGFT Guru',
        },
      },
    },
  ]

  for (const study of caseStudiesData) {
    try {
      let avatarAsset = null
      if (study.avatar) {
        const avatarPath = path.join(process.cwd(), 'public', study.avatar)
        if (fs.existsSync(avatarPath)) {
          console.log(`  📸 Uploading: ${study.avatar}`)
          const imageBuffer = fs.readFileSync(avatarPath)
          avatarAsset = await client.assets.upload('image', imageBuffer, {
            filename: path.basename(study.avatar),
          })
        }
      }

      const sanityDoc = {
        _type: 'caseStudy',
        company:          study.company,
        slug:             { _type: 'slug', current: study.slug },
        title:            study.title,
        shortDescription: study.shortDescription,
        location:         study.location,
        industry:         study.industry,
        companySize:      study.companySize,
        timeline:         study.timeline,
        tags:             study.tags,
        // Graph ✅
        graphData:            study.graphData,
        // Challenge
        challengeTitle:       study.challenge.title,
        challengeDescription: study.challenge.description,
        painPoints:           study.challenge.painPoints,
        // Workflow ✅
        workflow:             study.workflow,
        // Solution
        solutionTitle:        study.solution.title,
        solutionDescription:  study.solution.description,
        strategies:           study.solution.strategies,
        // Results
        resultsTitle:         study.results.title,
        resultsDescription:   study.results.description,
        metrics:              study.results.metrics,
        // Testimonial
        testimonialQuote:     study.results.testimonial.quote,
        testimonialAuthor:    study.results.testimonial.author,
        testimonialRole:      study.results.testimonial.role,
      }

      if (avatarAsset) {
        sanityDoc.avatar = {
          _type: 'image',
          asset: { _type: 'reference', _ref: avatarAsset._id },
          alt: `${study.company} logo`,
        }
      }

      await client.create(sanityDoc)
      console.log(`✅ Migrated: ${study.company}`)
    } catch (error) {
      console.error(`❌ Error migrating ${study.company}:`, error.message)
    }
  }

  console.log('\n🎉 Complete! All case studies migrated with workflow + graph data.')
}

deleteAndMigrate()