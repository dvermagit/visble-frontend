// // schemas/caseStudy.ts

// import { Rule } from 'sanity'

// export default {
//   name: 'caseStudy',
//   title: 'Case Study',
//   type: 'document',
//   fields: [
//     // ─── BASIC INFO ─────────────────────────────────────────
//     {
//       name: 'company',
//       title: 'Company Name',
//       type: 'string',
//       validation: (Rule: Rule) => Rule.required(),
//     },
//     {
//       name: 'slug',
//       title: 'URL Slug',
//       type: 'slug',
//       options: {
//         source: (doc: any) => `${doc.company}-case-study`,
//         maxLength: 96,
//       },
//       validation: (Rule: Rule) => Rule.required(),
//     },
//     {
//       name: 'title',
//       title: 'Headline',
//       type: 'string',
//       validation: (Rule: Rule) => Rule.required(),
//     },
//     {
//       name: 'shortDescription',
//       title: 'Short Description',
//       type: 'text',
//       rows: 3,
//       validation: (Rule: Rule) => Rule.required().max(200),
//     },
//     {
//       name: 'avatar',
//       title: 'Company Logo',
//       type: 'image',
//       options: { hotspot: true },
//     },
//     {
//       name: 'location',
//       title: 'Location',
//       type: 'string',
//     },
//     {
//       name: 'industry',
//       title: 'Industry',
//       type: 'string',
//       options: {
//         list: [
//           { title: 'EdTech', value: 'EdTech' },
//           { title: 'Real Estate', value: 'Real Estate' },
//           { title: 'Government Compliance', value: 'Government Compliance' },
//           { title: 'SaaS', value: 'SaaS' },
//           { title: 'E-Commerce', value: 'E-Commerce' },
//           { title: 'Healthcare', value: 'Healthcare' },
//           { title: 'Finance', value: 'Finance' },
//         ],
//         layout: 'radio',
//       },
//       validation: (Rule: Rule) => Rule.required(),
//     },
//     {
//       name: 'companySize',
//       title: 'Company Size',
//       type: 'string',
//       options: {
//         list: [
//           { title: '1-10 employees', value: '1-10 employees' },
//           { title: '10-50 employees', value: '10-50 employees' },
//           { title: '50-100 employees', value: '50-100 employees' },
//           { title: '200-500 employees', value: '200-500 employees' },
//           { title: '500+ employees', value: '500+ employees' },
//         ],
//         layout: 'radio',
//       },
//     },
//     {
//       name: 'timeline',
//       title: 'Timeline',
//       type: 'string',
//       placeholder: 'e.g. 60 days',
//       validation: (Rule: Rule) => Rule.required(),
//     },
//     {
//       name: 'tags',
//       title: 'Tags',
//       type: 'array',
//       of: [{ type: 'string' }],
//       options: { layout: 'tags' },
//     },
//     // ─── CHALLENGE ──────────────────────────────────────────
//     {
//       name: 'challengeTitle',
//       title: 'Challenge — Section Title',
//       type: 'string',
//       initialValue: 'The Challenge',
//       group: 'challenge',
//     },
//     {
//       name: 'challengeDescription',
//       title: 'Challenge — Description',
//       type: 'text',
//       rows: 4,
//       group: 'challenge',
//       validation: (Rule: Rule) => Rule.required(),
//     },
//     {
//       name: 'painPoints',
//       title: 'Pain Points',
//       type: 'array',
//       of: [{ type: 'string' }],
//       group: 'challenge',
//       validation: (Rule: Rule) => Rule.required().min(2),
//     },
//     // ─── SOLUTION ───────────────────────────────────────────
//     {
//       name: 'solutionTitle',
//       title: 'Solution — Section Title',
//       type: 'string',
//       initialValue: 'The Visble Approach',
//       group: 'solution',
//     },
//     {
//       name: 'solutionDescription',
//       title: 'Solution — Description',
//       type: 'text',
//       rows: 4,
//       group: 'solution',
//       validation: (Rule: Rule) => Rule.required(),
//     },
//     {
//       name: 'strategies',
//       title: 'Strategies',
//       type: 'array',
//       of: [
//         {
//           type: 'object',
//           fields: [
//             { name: 'name', title: 'Strategy Name', type: 'string', validation: (Rule: Rule) => Rule.required() },
//             { name: 'description', title: 'Description', type: 'text', rows: 2 },
//           ],
//         },
//       ],
//       group: 'solution',
//       validation: (Rule: Rule) => Rule.required().min(2),
//     },
//     // ─── RESULTS ────────────────────────────────────────────
//     {
//       name: 'resultsTitle',
//       title: 'Results — Section Title',
//       type: 'string',
//       initialValue: 'The Results',
//       group: 'results',
//     },
//     {
//       name: 'resultsDescription',
//       title: 'Results — Description',
//       type: 'text',
//       rows: 4,
//       group: 'results',
//       validation: (Rule: Rule) => Rule.required(),
//     },
//     {
//       name: 'metrics',
//       title: 'Key Metrics',
//       type: 'array',
//       of: [
//         {
//           type: 'object',
//           fields: [
//             { name: 'label', title: 'Label', type: 'string', validation: (Rule: Rule) => Rule.required() },
//             { name: 'value', title: 'Value', type: 'string', validation: (Rule: Rule) => Rule.required() },
//             { name: 'change', title: 'Change Label', type: 'string' },
//           ],
//         },
//       ],
//       group: 'results',
//       validation: (Rule: Rule) => Rule.required().min(2).max(4),
//     },
//     // ─── TESTIMONIAL ────────────────────────────────────────
//     {
//       name: 'testimonialQuote',
//       title: 'Testimonial — Quote',
//       type: 'text',
//       rows: 3,
//       group: 'testimonial',
//     },
//     {
//       name: 'testimonialAuthor',
//       title: 'Testimonial — Author Name',
//       type: 'string',
//       group: 'testimonial',
//     },
//     {
//       name: 'testimonialRole',
//       title: 'Testimonial — Role',
//       type: 'string',
//       group: 'testimonial',
//     },
//     // ─── GRAPH DATA ─────────────────────────────────────────
//     {
//       name: 'graphData',
//       title: 'Graph Data Points',
//       type: 'array',
//       of: [
//         {
//           type: 'object',
//           fields: [
//             { name: 'week', title: 'Label (e.g. Week 1)', type: 'string', validation: (Rule: Rule) => Rule.required() },
//             { name: 'value', title: 'Value (0–100)', type: 'number', validation: (Rule: Rule) => Rule.required().min(0).max(100) },
//             { name: 'label', title: 'Display Label', type: 'string' },
//           ],
//         },
//       ],
//       group: 'graph',
//       validation: (Rule: Rule) => Rule.required().min(3),
//     },
//   ],
//   groups: [
//     { name: 'challenge', title: '📌 Challenge' },
//     { name: 'solution', title: '⚙️ Solution' },
//     { name: 'results', title: '📈 Results' },
//     { name: 'testimonial', title: '💬 Testimonial' },
//     { name: 'graph', title: '📊 Graph' },
//   ],

  
// }


// schemas/caseStudy.ts

import { Rule } from 'sanity'

export default {
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  groups: [
    { name: 'challenge',   title: '📌 Challenge' },
    { name: 'workflow',    title: '🔄 Workflow' },
    { name: 'solution',    title: '⚙️ Solution' },
    { name: 'results',     title: '📈 Results' },
    { name: 'testimonial', title: '💬 Testimonial' },
    { name: 'graph',       title: '📊 Graph' },
  ],
  fields: [
    // ─── BASIC INFO ─────────────────────────────────────────
    {
      name: 'company',
      title: 'Company Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: (doc: any) => `${doc.company}-case-study`,
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Headline',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule: Rule) => Rule.required().max(200),
    },
    {
      name: 'avatar',
      title: 'Company Logo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'industry',
      title: 'Industry',
      type: 'string',
      options: {
        list: [
          { title: 'EdTech',                value: 'EdTech' },
          { title: 'Real Estate',           value: 'Real Estate' },
          { title: 'Government Compliance', value: 'Government Compliance' },
          { title: 'SaaS',                  value: 'SaaS' },
          { title: 'E-Commerce',            value: 'E-Commerce' },
          { title: 'Healthcare',            value: 'Healthcare' },
          { title: 'Finance',               value: 'Finance' },
        ],
        layout: 'radio',
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'companySize',
      title: 'Company Size',
      type: 'string',
      options: {
        list: [
          { title: '1-10 employees',    value: '1-10 employees' },
          { title: '10-50 employees',   value: '10-50 employees' },
          { title: '50-100 employees',  value: '50-100 employees' },
          { title: '200-500 employees', value: '200-500 employees' },
          { title: '500+ employees',    value: '500+ employees' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'timeline',
      title: 'Timeline',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },

    // ─── GRAPH DATA ─────────────────────────────────────────
    // ✅ FIXED: correct 4-metric fields
    {
      name: 'graphData',
      title: 'Graph Data Points',
      type: 'array',
      group: 'graph',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'week',                title: 'Label (e.g. Week 1)',          type: 'string', validation: (Rule: Rule) => Rule.required() },
            { name: 'sourceMentions',      title: 'Source Mentions (0–100)',       type: 'number', validation: (Rule: Rule) => Rule.min(0).max(100) },
            { name: 'rankingPosition',     title: 'Ranking Position (0–100)',      type: 'number', validation: (Rule: Rule) => Rule.min(0).max(100) },
            { name: 'citationConsistency', title: 'Citation Consistency (0–100)', type: 'number', validation: (Rule: Rule) => Rule.min(0).max(100) },
            { name: 'brandQueries',        title: 'Brand Queries (0–100)',         type: 'number', validation: (Rule: Rule) => Rule.min(0).max(100) },
          ],
        },
      ],
    },

    // ─── CHALLENGE ──────────────────────────────────────────
    {
      name: 'challengeTitle',
      title: 'Challenge — Section Title',
      type: 'string',
      initialValue: 'The Challenge',
      group: 'challenge',
    },
    {
      name: 'challengeDescription',
      title: 'Challenge — Description',
      type: 'text',
      rows: 4,
      group: 'challenge',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'painPoints',
      title: 'Pain Points',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'challenge',
      validation: (Rule: Rule) => Rule.required().min(2),
    },

    // ─── WORKFLOW ────────────────────────────────────────────
    // ✅ ADDED: complete workflow field
    {
      name: 'workflow',
      title: 'Workflow Timeline',
      type: 'object',
      group: 'workflow',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'The Workflow: BTS',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        },
        {
          name: 'steps',
          title: 'Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'id',          title: 'Step Number',  type: 'number' },
                { name: 'days',        title: 'Days Range',   type: 'string' },
                { name: 'title',       title: 'Step Title',   type: 'string' },
                { name: 'description', title: 'Description',  type: 'text', rows: 3 },
                { name: 'icon',        title: 'Icon Name',    type: 'string' },
                { name: 'color',       title: 'Color',        type: 'string' },
                { name: 'metrics',     title: 'Metrics Text', type: 'string' },
              ],
            },
          ],
        },
        {
          name: 'observation',
          title: 'Observation',
          type: 'object',
          fields: [
            { name: 'title',       title: 'Title',       type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
          ],
        },
      ],
    },

    // ─── SOLUTION ───────────────────────────────────────────
    {
      name: 'solutionTitle',
      title: 'Solution — Section Title',
      type: 'string',
      initialValue: 'The Visble Approach',
      group: 'solution',
    },
    {
      name: 'solutionDescription',
      title: 'Solution — Description',
      type: 'text',
      rows: 4,
      group: 'solution',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'strategies',
      title: 'Strategies',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name',        title: 'Strategy Name', type: 'string', validation: (Rule: Rule) => Rule.required() },
            { name: 'description', title: 'Description',   type: 'text',   rows: 2 },
          ],
        },
      ],
      group: 'solution',
      validation: (Rule: Rule) => Rule.required().min(2),
    },

    // ─── RESULTS ────────────────────────────────────────────
    {
      name: 'resultsTitle',
      title: 'Results — Section Title',
      type: 'string',
      initialValue: 'The Results',
      group: 'results',
    },
    {
      name: 'resultsDescription',
      title: 'Results — Description',
      type: 'text',
      rows: 4,
      group: 'results',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'metrics',
      title: 'Key Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label',  title: 'Label',       type: 'string', validation: (Rule: Rule) => Rule.required() },
            { name: 'value',  title: 'Value',        type: 'string', validation: (Rule: Rule) => Rule.required() },
            { name: 'change', title: 'Change Label', type: 'string' },
          ],
        },
      ],
      group: 'results',
      validation: (Rule: Rule) => Rule.required().min(2).max(4),
    },

    // ─── TESTIMONIAL ────────────────────────────────────────
    {
      name: 'testimonialQuote',
      title: 'Testimonial — Quote',
      type: 'text',
      rows: 3,
      group: 'testimonial',
    },
    {
      name: 'testimonialAuthor',
      title: 'Testimonial — Author Name',
      type: 'string',
      group: 'testimonial',
    },
    {
      name: 'testimonialRole',
      title: 'Testimonial — Role',
      type: 'string',
      group: 'testimonial',
    },
  ],
}