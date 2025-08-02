import { Link } from 'react-router-dom'
import { Calculator, Menu, X } from 'lucide-react'
import { useState } from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Calculator className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Percentage Calculator Australia</span>
            </Link>

            <nav className="hidden md:flex space-x-8">
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Calculators
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {calculatorTools.map((tool) => (
                      <Link
                        key={tool.path}
                        to={tool.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {tool.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Blog
              </Link>
            </nav>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="px-3 py-2 text-sm font-medium text-gray-900">Calculators</div>
              {calculatorTools.map((tool) => (
                <Link
                  key={tool.path}
                  to={tool.path}
                  className="block px-6 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {tool.name}
                </Link>
              ))}
              <Link
                to="/blog"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Calculator className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-semibold">Percentage Calculator Australia</span>
              </div>
              <p className="text-gray-400 text-sm">
                Free online percentage calculators for Australian users. Calculate percentages, GST, increases, decreases, and more with instant results.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Calculator Tools</h3>
              <ul className="space-y-2">
                {calculatorTools.slice(0, 4).map((tool) => (
                  <li key={tool.path}>
                    <Link to={tool.path} className="text-gray-400 hover:text-white text-sm">
                      {tool.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Popular Articles</h3>
              <ul className="space-y-2">
                {blogArticles.slice(0, 4).map((article) => (
                  <li key={article.path}>
                    <Link to={article.path} className="text-gray-400 hover:text-white text-sm">
                      {article.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Percentage Calculator Australia. All rights reserved. | 
              <Link to="/privacy" className="hover:text-white ml-1">Privacy Policy</Link> | 
              <Link to="/disclaimer" className="hover:text-white ml-1">Disclaimer</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
