import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import HomePage from './pages/HomePage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import { usePath, scrollToHash } from './router.jsx'

const routes = {
  '/': { component: HomePage, title: 'Baheka Technology | Digital Transformation & Software Engineering' },
  '/products': { component: ProductsPage, title: 'Products | ConstructOS, KraalOS & Novia | Baheka Technology' },
}

export default function App() {
  const path = usePath()
  const route = routes[path.replace(/\/+$/, '') || '/'] ?? routes['/']
  const Page = route.component

  // On page change: update the title, then jump to the #section (if any) or the top
  useEffect(() => {
    document.title = route.title
    const id = setTimeout(() => {
      if (!scrollToHash(window.location.hash, 'auto')) window.scrollTo({ top: 0, behavior: 'auto' })
    }, 0)
    return () => clearTimeout(id)
  }, [path, route.title])

  return (
    <div className="relative overflow-x-clip">
      <ScrollProgress />
      <Navbar path={path} />
      <main>
        <Page />
      </main>
      <Footer />
    </div>
  )
}
