import snap from './_sanity.json'
import { articleBodies as localBodies } from './articleBodies.local'

const fromSanity = snap?.articleBodies ?? {}
const hasSanityBodies = Object.keys(fromSanity).length > 0

export const articleBodies = hasSanityBodies ? fromSanity : localBodies
