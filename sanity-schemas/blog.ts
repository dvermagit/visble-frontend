// import { defineType, defineField } from 'sanity'

// export default defineType({
//   name: 'blog',
//   title: 'Blog Post',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'title',
//       title: 'Title',
//       type: 'string',
//       validation: (Rule) => Rule.required().min(5).max(120),
//     }),
//     defineField({
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: { source: 'title', maxLength: 96 },
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: 'publishedAt',
//       title: 'Published Date',
//       type: 'datetime',
//       initialValue: () => new Date().toISOString(),
//     }),
//     defineField({
//       name: 'coverImage',
//       title: 'Cover Image',
//       type: 'image',
//       options: { hotspots: true },
//       fields: [
//         { name: 'alt', title: 'Alt Text', type: 'string' },
//       ],
//     }),
//     defineField({
//       name: 'category',
//       title: 'Category',
//       type: 'string',
//       options: {
//         list: [
//           { title: 'SEO',           value: 'seo' },
//           { title: 'GEO',           value: 'geo' },
//           { title: 'Tips',          value: 'tips' },
//           { title: 'Strategy',      value: 'strategy' },
//           { title: 'Industry News', value: 'industry-news' },
//           { title: 'Product',       value: 'product' },
//         ],
//         layout: 'buttons',
//       },
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: 'tags',
//       title: 'Tags',
//       type: 'array',
//       of: [{ type: 'string' }],
//       options: { layout: 'tags' },
//     }),
//     defineField({
//       name: 'excerpt',
//       title: 'Short Excerpt',
//       description: 'Shows up on the blog listing card. If empty, we pull from the first paragraph.',
//       type: 'text',
//       rows: 3,
//     }),
//     defineField({
//       name: 'body',
//       title: 'Body',
//       type: 'array',
//       of: [
//         {
//           types: ['block'],
//           marks: {
//             decorators: [
//               { title: 'Bold',   name: 'strong' },
//               { title: 'Italic', name: 'em' },
//               { title: 'Code',   name: 'code' },
//             ],
//           },
//         },
//         { types: ['image'], options: { hotspots: true } },
//       ],
//       validation: (Rule) => Rule.required(),
//     }),
//     // ── SEO group ────────────────────────────────────────────
//     defineField({
//       name: 'seoTitle',
//       title: 'SEO Title',
//       description: 'Max 60 characters. Falls back to the main title.',
//       type: 'string',
//       group: 'seo',
//     }),
//     defineField({
//       name: 'seoDescription',
//       title: 'SEO Description',
//       description: 'Max 160 characters.',
//       type: 'string',
//       group: 'seo',
//     }),
//   ],
//   groups: [
//     { name: 'seo', title: 'SEO' },
//   ],
// })

// sanity-schemas/blog.ts

import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog Post',
  type: 'document',

  groups: [{ name: 'seo', title: 'SEO' }],

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required().min(5).max(120),
    } as any),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    } as any),

    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),

    // ── Cover Image ─────────────────────────
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
    } as any),

    // ── Category ───────────────────────────
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'SEO', value: 'seo' },
          { title: 'GEO', value: 'geo' },
          { title: 'Tips', value: 'tips' },
          { title: 'Strategy', value: 'strategy' },
          { title: 'Industry News', value: 'industry-news' },
          { title: 'Product', value: 'product' },
        ],
        layout: 'radio',
      },
      validation: (Rule: any) => Rule.required(),
    } as any),

    // ── Tags ───────────────────────────────
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    } as any),

    // ── Excerpt ────────────────────────────
    defineField({
      name: 'excerpt',
      title: 'Short Excerpt',
      type: 'text',
      rows: 3,
    } as any),

    // ── Body ───────────────────────────────
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      validation: (Rule: any) => Rule.required(),
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    } as any),

    // ── SEO ────────────────────────────────
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seo',
    }),

    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'string',
      group: 'seo',
    }),
  ],
})




// import { defineType, defineField } from 'sanity'

// export default defineType({
//   name: 'blog',
//   title: 'Blog Post',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'title',
//       title: 'Title',
//       type: 'string',
//       validation: (Rule) => Rule.required().min(5).max(120),
//     }),
//     defineField({
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: { source: 'title', maxLength: 96 },
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: 'publishedAt',
//       title: 'Published Date',
//       type: 'datetime',
//       initialValue: () => new Date().toISOString(),
//     }),
//     defineField({
//       name: 'coverImage',
//       title: 'Cover Image',
//       type: 'image',
//       options: { hotspots: true },
//       fields: [
//         { name: 'alt', title: 'Alt Text', type: 'string' },
//       ],
//     }),
//     defineField({
//       name: 'category',
//       title: 'Category',
//       type: 'string',
//       options: {
//         list: [
//           { title: 'SEO',           value: 'seo' },
//           { title: 'GEO',           value: 'geo' },
//           { title: 'Tips',          value: 'tips' },
//           { title: 'Strategy',      value: 'strategy' },
//           { title: 'Industry News', value: 'industry-news' },
//           { title: 'Product',       value: 'product' },
//         ],
//         layout: 'buttons',
//       },
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: 'tags',
//       title: 'Tags',
//       type: 'array',
//       of: [{ type: 'string' }],
//       options: { layout: 'tags' },
//     }),
//     defineField({
//       name: 'excerpt',
//       title: 'Short Excerpt',
//       description: 'Shows up on the blog listing card. If empty, we pull from the first paragraph.',
//       type: 'text',
//       rows: 3,
//     }),
//     defineField({
//       name: 'body',
//       title: 'Body',
//       type: 'array',
//       of: [
//         {
//           types: ['block'],
//           marks: {
//             decorators: [
//               { title: 'Bold',   name: 'strong' },
//               { title: 'Italic', name: 'em' },
//               { title: 'Code',   name: 'code' },
//             ],
//           },
//         },
//         { types: ['image'], options: { hotspots: true } },
//       ],
//       validation: (Rule) => Rule.required(),
//     }),
//     // ── SEO group ────────────────────────────────────────────
//     defineField({
//       name: 'seoTitle',
//       title: 'SEO Title',
//       description: 'Max 60 characters. Falls back to the main title.',
//       type: 'string',
//       group: 'seo',
//     }),
//     defineField({
//       name: 'seoDescription',
//       title: 'SEO Description',
//       description: 'Max 160 characters.',
//       type: 'string',
//       group: 'seo',
//     }),
//   ],
//   groups: [
//     { name: 'seo', title: 'SEO' },
//   ],
// })
