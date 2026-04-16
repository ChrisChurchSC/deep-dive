import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import SiteNav from './components/global/SiteNav'
import SiteFooter from './components/global/SiteFooter'
import LoadingScreen from './components/global/LoadingScreen'

// Route-level code splitting — each page is a separate chunk
const HomePage          = lazy(() => import('./pages/HomePage'))
const WorkPage          = lazy(() => import('./pages/WorkPage'))
const CaseStudyPage     = lazy(() => import('./pages/CaseStudyPage'))
const ServicesPage      = lazy(() => import('./pages/ServicesPage'))
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'))
const ProcessPage       = lazy(() => import('./pages/ProcessPage'))
const AboutPage         = lazy(() => import('./pages/AboutPage'))
const ContactPage       = lazy(() => import('./pages/ContactPage'))
const JournalPage       = lazy(() => import('./pages/JournalPage'))
const ArticlePage       = lazy(() => import('./pages/ArticlePage'))
const PrivacyPage       = lazy(() => import('./pages/PrivacyPage'))
const NotFoundPage      = lazy(() => import('./pages/NotFoundPage'))

// Fire a GA4 page_view on every route change
function Analytics() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', { page_path: pathname })
    }
  }, [pathname])
  return null
}

// Scroll to top on navigation
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

// Fade in page content on route change
function PageFade({ children }) {
  const { pathname } = useLocation()
  const [fading, setFading] = useState(false)
  const mounted = useRef(false)

  useEffect(() => {
    if (!mounted.current) { mounted.current = true; return }
    setFading(true)
    const t = setTimeout(() => setFading(false), 250)
    return () => clearTimeout(t)
  }, [pathname])

  return (
    <div style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.25s ease' }}>
      {children}
    </div>
  )
}

function Layout({ children }) {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: 'linear-gradient(to right, #00bbff 0%, #000cff 50%, #080808 100%)',
          zIndex: 101,
        }}
      />
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
    </>
  )
}

// Minimal fallback — keeps layout stable while chunk loads
function PageLoader() {
  return <div style={{ minHeight: 'calc(100vh - 56px)' }} />
}

export default function App() {
  return (
    <BrowserRouter>
      <LoadingScreen />
      <Analytics />
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <PageFade>
        <Routes>
          {/* Primary nav */}
          <Route path="/"                    element={<Layout><HomePage /></Layout>} />
          <Route path="/work"                element={<Layout><WorkPage /></Layout>} />
          <Route path="/work/:slug"          element={<Layout><CaseStudyPage /></Layout>} />
          <Route path="/services"            element={<Layout><ServicesPage /></Layout>} />
          <Route path="/services/:category"  element={<Layout><ServiceDetailPage /></Layout>} />
          <Route path="/process"             element={<Layout><ProcessPage /></Layout>} />
          <Route path="/about"               element={<Layout><AboutPage /></Layout>} />
          <Route path="/contact"             element={<Layout><ContactPage /></Layout>} />

          {/* Journal */}
          <Route path="/journal"             element={<Layout><JournalPage /></Layout>} />
          <Route path="/journal/:slug"       element={<Layout><ArticlePage /></Layout>} />

          {/* Utility */}
          <Route path="/privacy"             element={<Layout><PrivacyPage /></Layout>} />
          <Route path="*"                    element={<NotFoundPage />} />
        </Routes>
        </PageFade>
      </Suspense>
    </BrowserRouter>
  )
}
