import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityConfig = {
  projectId: 'n3plha5r',
  dataset: 'production',
  apiVersion: '2024-10-01',
  useCdn: true,
}

export const sanityClient = createClient(sanityConfig)

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source) {
  return builder.image(source)
}
