// // lib/queries.ts
// // All GROQ queries in one place.
// // GROQ is Sanity's query language — reads almost like English.

// // ════════════════════════════════════════════════════════════════════════════════
// // BLOGS
// // ════════════════════════════════════════════════════════════════════════════════

// // Listing page — everything the card needs
// export const allBlogsQuery = `
//   *[_type == "blog" && defined(slug)]
//   | order(publishedAt desc)
//   {
//     _id,
//     title,
//     "slug": slug.current,
//     coverImage,
//     category,
//     tags,
//     excerpt,
//     publishedAt,
//     seoDescription
//   }
// `

// // Single blog detail page
// export const blogBySlugQuery = `
//   *[_type == "blog" && slug.current == $slug][0]
//   {
//     _id,
//     title,
//     "slug": slug.current,
//     coverImage,
//     category,
//     tags,
//     body,
//     publishedAt,
//     seoTitle,
//     seoDescription
//   }
// `

// // Next.js generateStaticParams — just slugs
// export const allBlogSlugsQuery = `
//   *[_type == "blog" && defined(slug.current)]
//   { "slug": slug.current }
// `

// // ════════════════════════════════════════════════════════════════════════════════
// // CASE STUDIES
// // ════════════════════════════════════════════════════════════════════════════════

// // Listing page — card data + first 2 metrics for preview
// export const allCaseStudiesQuery = `
//   *[_type == "caseStudy" && defined(slug)]
//   | order(_createdAt desc)
//   {
//     _id,
//     company,
//     title,
//     "slug": slug.current,
//     shortDescription,
//     avatar,
//     location,
//     industry,
//     timeline,
//     tags,
//     "metrics": metrics[0..1]
//   }
// `

// // Detail page — everything, shaped to match the page component
// export const caseStudyBySlugQuery = `
//   *[_type == "caseStudy" && slug.current == $slug][0]
//   {
//     _id,
//     company,
//     title,
//     "slug": slug.current,
//     shortDescription,
//     avatar,
//     location,
//     industry,
//     companySize,
//     timeline,
//     tags,

//     "challenge": {
//       "title":       challengeTitle,
//       "description": challengeDescription,
//       "painPoints":  painPoints
//     },

//     "solution": {
//       "title":       solutionTitle,
//       "description": solutionDescription,
//       "strategies":  strategies[]{ name, description }
//     },

//     "results": {
//       "title":       resultsTitle,
//       "description": resultsDescription,
//       "metrics":     metrics[]{ label, value, change },
//       "testimonial": select(
//         testimonialQuote != null => {
//           "quote":  testimonialQuote,
//           "author": testimonialAuthor,
//           "role":   testimonialRole
//         }
//       )
//     },

//     "graphData": graphData[]{ week, value, label }
//   }
// `

// // Next.js generateStaticParams — just slugs
// export const allCaseStudySlugsQuery = `
//   *[_type == "caseStudy" && defined(slug.current)]
//   { "slug": slug.current }
// `

// lib/queries.ts
// All GROQ queries in one place.
// GROQ is Sanity's query language — reads almost like English.

// ════════════════════════════════════════════════════════════════════════════════
// BLOGS
// ════════════════════════════════════════════════════════════════════════════════

// Listing page — everything the card needs
export const allBlogsQuery = `
  *[_type == "blog" && defined(slug)]
  | order(publishedAt desc)
  {
    _id,
    title,
    "slug": slug.current,
    coverImage,
    category,
    tags,
    excerpt,
    publishedAt,
    seoDescription
  }
`

// Single blog detail page
export const blogBySlugQuery = `
  *[_type == "blog" && slug.current == $slug][0]
  {
    _id,
    title,
    "slug": slug.current,
    coverImage,
    category,
    tags,
    body,
    publishedAt,
    seoTitle,
    seoDescription
  }
`

// Next.js generateStaticParams — just slugs
export const allBlogSlugsQuery = `
  *[_type == "blog" && defined(slug.current)]
  { "slug": slug.current }
`

// ════════════════════════════════════════════════════════════════════════════════
// CASE STUDIES
// ════════════════════════════════════════════════════════════════════════════════

// Listing page — card data + first 2 metrics for preview
export const allCaseStudiesQuery = `
  *[_type == "caseStudy" && defined(slug)]
  | order(_createdAt desc)
  {
    _id,
    company,
    title,
    "slug": slug.current,
    shortDescription,
    avatar,
    location,
    industry,
    timeline,
    tags,
    "metrics": metrics[0..1]
  }
`

// Detail page — everything, shaped to match the page component
export const caseStudyBySlugQuery = `
  *[_type == "caseStudy" && slug.current == $slug][0]
  {
    _id,
    company,
    title,
    "slug": slug.current,
    shortDescription,
    avatar,
    location,
    industry,
    companySize,
    timeline,
    tags,

    "challenge": {
      "title":       challengeTitle,
      "description": challengeDescription,
      "painPoints":  painPoints
    },

    "solution": {
      "title":       solutionTitle,
      "description": solutionDescription,
      "strategies":  strategies[]{ name, description }
    },

    "results": {
      "title":       resultsTitle,
      "description": resultsDescription,
      "metrics":     metrics[]{ label, value, change },
      "testimonial": select(
        testimonialQuote != null => {
          "quote":  testimonialQuote,
          "author": testimonialAuthor,
          "role":   testimonialRole
        }
      )
    },

    // ✅ FIXED: correct field names matching your migrated data
    "graphData": graphData[]{
      week,
      sourceMentions,
      rankingPosition,
      citationConsistency,
      brandQueries
    },

    // ✅ ADDED: workflow section
    "workflow": workflow {
      title,
      subtitle,
      "steps": steps[]{
        id,
        days,
        title,
        description,
        icon,
        color,
        metrics
      },
      "observation": observation {
        title,
        description
      }
    }
  }
`

// Next.js generateStaticParams — just slugs
export const allCaseStudySlugsQuery = `
  *[_type == "caseStudy" && defined(slug.current)]
  { "slug": slug.current }
`