import snap from './_sanity.json'
import { projects as localProjects } from './projects.local'

export const projects = snap?.projects?.length ? snap.projects : localProjects
