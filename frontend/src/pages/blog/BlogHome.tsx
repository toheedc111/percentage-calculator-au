import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { BookOpen, Calculator, TrendingUp, TrendingDown, BarChart3, Receipt } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const BlogHome = () => {
  const blogArticles = [
    {
      title: 'How to Calculate Percentage Increase',
      description: 'Learn the step-by-step method to calculate percentage increases for salary raises, house prices, and investments.',
      path: '/blog/how-to-calculate-percentage-increase',
      icon: TrendingUp,
      color: 'text-green-600',
      category: 'Tutorial'
    },
    {
      title: 'How to Calculate Percentage Decrease',
      description: 'Master percentage decrease calculations for discounts, price drops, and reductions with Australian examples.',
      path: '/blog/how-to-calculate-percentage-decrease',
      icon: TrendingDown,
      color: 'text-red-600',
      category: 'Tutorial'
    },
    {
      title: 'What is Percentage Difference?',
      description: 'Understand the difference between percentage change and percentage difference with practical examples.',
      path: '/blog/what-is-percentage-difference',
      icon: BarChart3,
      color: 'text-blue-600',
      category: 'Guide'
    },
    {
      title: 'What is 5% of 750000? Explained',
      description: 'Common percentage calculation explained with real-world applications in Australian property and finance.',
      path: '/blog/what-is-5-percent-of-750000',
      icon: Calculator,
      color: 'text-purple-600',
      category: 'Example'
    },
    {
      title: 'GST in Australia Explained',
      description: 'Complete guide to GST calculations, rates, and requirements for Australian businesses.',
      path: '/blog/gst-in-australia-explained',
      icon: Receipt,
      color: 'text-orange-600',
      category: 'Guide'
    },
    {
      title: 'Percentage Tips for Savings & Discounts',
      description: 'Smart strategies for calculating discounts, savings, and getting the best deals in Australia.',
      path: '/blog/percentage-tips-for-savings',
      icon: TrendingDown,
      color: 'text-green-600',
      category: 'Tips'
    },
    {
      title: 'Real-Life Percentage Examples',
      description: 'Practical percentage calculations for shopping, home loans, bills, and everyday Australian life.',
      path: '/blog/percentage-in-real-life-examples',
      icon: BookOpen,
      color: 'text-blue-600',
      category: 'Examples'
    },
    {
      title: 'Calculator vs Manual Calculation',
      description: 'When to use percentage calculators vs manual methods, plus accuracy and convenience comparisons.',
      path: '/blog/percentage-calculator-vs-manual',
      icon: Calculator,
      color: 'text-gray-600',
      category: 'Comparison'
    }
  ]

  const categories = ['All', 'Tutorial', 'Guide', 'Examples', 'Tips', 'Comparison']

  return (
    <>
      <Helmet>
        <title>Percentage Calculator Blog | Australian Guides & Tips</title>
        <meta name="description" content="Learn percentage calculations with our comprehensive guides. Australian examples, tips, and tutorials for everyday percentage problems." />
        <meta name="keywords" content="percentage calculator blog, percentage guides, australian percentage examples, percentage tips, how to calculate percentage" />
        <link rel="canonical" href="https://percentagecalculator.com.au/blog" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            Percentage Calculator Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master percentage calculations with our comprehensive guides, tips, and tutorials. 
            All examples tailored for Australian users with practical applications.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogArticles.map((article) => {
            const Icon = article.icon
            return (
              <Link key={article.path} to={article.path}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className={`h-5 w-5 ${article.color}`} />
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        {article.category}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {article.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Popular Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">Percentage Increases</h3>
              <p className="text-gray-600 text-sm">Salary raises, property values, investment returns</p>
            </div>
            <div className="text-center">
              <Receipt className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">GST Calculations</h3>
              <p className="text-gray-600 text-sm">Australian tax calculations for businesses</p>
            </div>
            <div className="text-center">
              <TrendingDown className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">Discounts & Savings</h3>
              <p className="text-gray-600 text-sm">Sale prices, markdowns, shopping tips</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Quick Calculations?
          </h2>
          <p className="text-gray-600 mb-6">
            Use our free percentage calculators for instant results while you learn.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Main Calculator
            </Link>
            <Link to="/gst-percentage-calculator" className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
              GST Calculator
            </Link>
            <Link to="/percentage-increase-calculator" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Increase Calculator
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogHome
