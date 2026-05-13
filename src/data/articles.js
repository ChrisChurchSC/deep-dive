import snap from './_sanity.json'
import { articles as localArticles, topics as localTopics } from './articles.local'

export const articles = snap?.articles?.length ? snap.articles : localArticles
export const topics = snap?.topics?.length ? snap.topics : localTopics
