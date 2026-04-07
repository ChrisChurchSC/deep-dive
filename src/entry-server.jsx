import { renderToString } from 'react-dom/server'
import { StaticRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

// Static imports — no lazy() for SSR
import SiteNav    from './components/global/SiteNav'
import SiteFooter from './components/global/SiteFooter'
import HomePage          from './pages/HomePage'
import WorkPage          from './pages/WorkPage'
import CaseStudyPage     from './pages/CaseStudyPage'
import ServicesPage      from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import ProcessPage       from './pages/ProcessPage'
import AboutPage         from './pages/AboutPage'
import ContactPage       from './pages/ContactPage'
import JournalPage       from './pages/JournalPage'
import ArticlePage       from './pages/ArticlePage'
import PrivacyPage       from './pages/PrivacyPage'

function Layout({ children }) {
  return (
    <>
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
    </>
  )
}

export function render(url) {
  const helmetContext = {}

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <Routes>
          <Route path="/"                   element={<Layout><HomePage /></Layout>} />
          <Route path="/work"               element={<Layout><WorkPage /></Layout>} />
          <Route path="/work/:slug"         element={<Layout><CaseStudyPage /></Layout>} />
          <Route path="/services"           element={<Layout><ServicesPage /></Layout>} />
          <Route path="/services/:category" element={<Layout><ServiceDetailPage /></Layout>} />
          <Route path="/process"            element={<Layout><ProcessPage /></Layout>} />
          <Route path="/about"              element={<Layout><AboutPage /></Layout>} />
          <Route path="/contact"            element={<Layout><ContactPage /></Layout>} />
          <Route path="/journal"            element={<Layout><JournalPage /></Layout>} />
          <Route path="/journal/:slug"      element={<Layout><ArticlePage /></Layout>} />
          <Route path="/privacy"            element={<Layout><PrivacyPage /></Layout>} />
        </Routes>
      </StaticRouter>
    </HelmetProvider>
  )

  const { helmet } = helmetContext
  return { html, helmet }
}
