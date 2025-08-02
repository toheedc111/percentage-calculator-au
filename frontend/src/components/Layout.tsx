import { Link } from 'react-router-dom'
import { Calculator, Menu, X } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null)

  const calculatorTools = [
    { name: 'Percentage Calculator', path: '/' },
    { name: 'Percentage Increase', path: '/percentage-increase-calculator' },
    { name: 'Percentage Decrease', path: '/percentage-decrease-calculator' },
    { name: 'Percentage Difference', path: '/percentage-difference-calculator' },
    { name: 'What is X% of Y', path: '/what-is-x-percent-of-y' },
    { name: 'GST Calculator', path: '/gst-percentage-calculator' },
  ]

  const blogArticles = [
    { name: 'How to Calculate Percentage Increase', path: '/blog/how-to-calculate-percentage-increase' },
    { name: 'How to Calculate Percentage Decrease', path: '/blog/how-to-calculate-percentage-decrease' },
    { name: 'What is Percentage Difference?', path: '/blog/what-is-percentage-difference' },
    { name: 'What is 5% of 750000?', path: '/blog/what-is-5-percent-of-750000' },
    { name: 'GST in Australia Explained', path: '/blog/gst-in-australia-explained' },
    { name: 'Percentage Tips for Savings', path: '/blog/percentage-tips-for-savings' },
    { name: 'Real-Life Percentage Examples', path: '/blog/percentage-in-real-life-examples' },
    { name: 'Calculator vs Manual', path: '/blog/percentage-calculator-vs-manual' },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false)
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const handleDropdownKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setDropdownOpen(!dropdownOpen)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50">
        Skip to main content
      </a>
      
      <header className="bg-white shadow-sm border-b sticky top-0 z-50" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link 
              to="/" 
              className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
              aria-label="Percentage Calculator Australia - Home"
            >
              <Calculator className="h-8 w-8 text-blue-600" aria-hidden="true" />
              <span className="text-xl font-bold text-gray-900">Percentage Calculator Australia</span>
            </Link>

            <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
              <div className="relative" ref={dropdownRef}>
                <button 
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  aria-label="Calculator tools menu"
                  onClick={handleDropdownToggle}
                  onKeyDown={handleDropdownKeyDown}
                >
                  Calculators
                </button>
                <div 
                  className={`absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg transition-all duration-200 z-50 ${
                    dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                  role="menu"
                  aria-labelledby="calculators-menu"
                >
                  <div className="py-2">
                    {calculatorTools.map((tool) => (
                      <Link
                        key={tool.path}
                        to={tool.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:bg-blue-50 focus:text-blue-600"
                        role="menuitem"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {tool.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
              >
                Blog
              </Link>
            </nav>

            <button
              ref={mobileMenuButtonRef}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={handleMobileMenuToggle}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t" role="navigation" aria-label="Mobile navigation">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="px-3 py-2 text-sm font-medium text-gray-900" role="heading" aria-level={3}>Calculators</div>
              {calculatorTools.map((tool) => (
                <Link
                  key={tool.path}
                  to={tool.path}
                  className="block px-6 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:bg-blue-50 focus:text-blue-600 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {tool.name}
                </Link>
              ))}
              <Link
                to="/blog"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:bg-blue-50 focus:text-blue-600 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </div>
          </div>
        )}
      </header>

      <main id="main-content" className="flex-1" role="main">
        {children}
      </main>

      <footer className="bg-gray-900 text-white" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Calculator className="h-6 w-6 text-blue-400" aria-hidden="true" />
                <span className="text-lg font-semibold">Percentage Calculator Australia</span>
              </div>
              <p className="text-gray-400 text-sm">
                Free online percentage calculators for Australian users. Calculate percentages, GST, increases, decreases, and more with instant results.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Calculator Tools</h3>
              <nav aria-label="Footer calculator tools">
                <ul className="space-y-2">
                  {calculatorTools.slice(0, 4).map((tool) => (
                    <li key={tool.path}>
                      <Link 
                        to={tool.path} 
                        className="text-gray-400 hover:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm"
                      >
                        {tool.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Popular Articles</h3>
              <nav aria-label="Footer popular articles">
                <ul className="space-y-2">
                  {blogArticles.slice(0, 4).map((article) => (
                    <li key={article.path}>
                      <Link 
                        to={article.path} 
                        className="text-gray-400 hover:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm"
                      >
                        {article.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Percentage Calculator Australia. All rights reserved. | 
              <Link 
                to="/privacy" 
                className="hover:text-white ml-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm"
              >
                Privacy Policy
              </Link> | 
              <Link 
                to="/disclaimer" 
                className="hover:text-white ml-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm"
              >
                Disclaimer
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
