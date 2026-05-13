import snap from './_sanity.json'
import { serviceDetails as localServiceDetails } from './serviceDetails.local'
import { projects } from './projects'

// The local file pre-computes relatedProjects via filter. The Sanity snapshot
// only stores the service category metadata, so we recompute relatedProjects
// here using the live projects collection — matching the original behavior.
function hydrate(raw) {
  return Object.fromEntries(
    Object.entries(raw).map(([slug, svc]) => [
      slug,
      {
        ...svc,
        relatedProjects: projects.filter(
          (p) => p.category === svc.category && p.videoUrl,
        ),
      },
    ]),
  )
}

const fromSanity = snap?.serviceDetails ?? {}
const hasSanity = Object.keys(fromSanity).length > 0

export const serviceDetails = hasSanity ? hydrate(fromSanity) : localServiceDetails
