// sanity.config.ts
// Place this at your project root (next to package.json)

// sanity.config.ts

// sanity.config.ts

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import type { StructureBuilder } from 'sanity/structure'
import blog from './sanity-schemas/blog'
import caseStudy from './sanity-schemas/caseStudy'

const projectId = "uh5qf0ng"
// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const dataset = "production"

export default defineConfig({
  name: 'default',
  title: 'Visble CMS',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S: StructureBuilder) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('📝 Blog Posts')
              .child(
                S.documentTypeList('blog').title('Blog Posts')
              ),
            S.divider(),
            S.listItem()
              .title('📊 Case Studies')
              .child(
                S.documentTypeList('caseStudy').title('Case Studies')
              ),
          ]),
    }),
  ],
  schema: {
    types: [blog, caseStudy],
  },
})