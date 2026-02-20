import { createClient } from '@sanity/client'
import { SanityImageSource } from '@sanity/image-url'
import { createImageUrlBuilder } from '@sanity/image-url'

// import type { SanityImageSource } from '@sanity/image-url/lib/node/types'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-15',
  useCdn: true, // true = faster cached reads. Set false only if you need brand-new writes instantly.
})

// ── Image URL helper ─────────────────────────────────────────────────────────
// Usage:  urlFor(document.coverImage).width(800).url()
const builder = createImageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}