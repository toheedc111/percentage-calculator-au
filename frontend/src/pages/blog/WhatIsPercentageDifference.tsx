import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { BarChart3, Calculator } from 'lucide-react'

const WhatIsPercentageDifference = () => {
  return (
    <>
      <Helmet>
        <title>What is Percentage Difference? | Complete Guide</title>
        <meta name="description" content="Understand percentage difference vs percentage change. Learn when to use each method with Australian examples and practical applications." />
        <meta name="keywords" content="percentage difference, percent difference, percentage change, compare values, percentage comparison" />
        <link rel="canonical" href="https://percentagecalculator.com.au/blog/what-is-percentage-difference" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <BarChart3 className="h-8 w-8 text-blue-600" />
            What is Percentage Difference?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn the difference between percentage difference and percentage change, 
            when to use each method, and how to apply them in Australian contexts.
          </p>
        </div>

        <div className="prose max-w-none">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-800 mb-2">Key Definition</h2>
            <p className="text-blue-700">
              <strong>Percentage difference</strong> compares two values by measuring how much they differ 
              relative to their average, without considering which value is the "reference point."
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Formula</h2>
          
          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <p className="text-lg font-mono text-center">
              Percentage Difference = |Value1 - Value2| ÷ ((Value1 + Value2) ÷ 2) × 100
            </p>
            <p className="text-center text-gray-600 mt-2">
              Where |Value1 - Value2| means the absolute difference (always positive)
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Percentage Difference vs Percentage Change</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-800 mb-3">Percentage Difference</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Uses average of both values as base</li>
                <li>• Always positive (uses absolute difference)</li>
                <li>• Order of values doesn't matter</li>
                <li>• Best for comparing similar values</li>
                <li>• Example: Comparing two salaries</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-800 mb-3">Percentage Change</h3>
              <ul className="space-y-2 text-green-700">
                <li>• Uses original value as base</li>
                <li>• Can be positive or negative</li>
                <li>• Order matters (original vs new)</li>
                <li>• Best for tracking changes over time</li>
                <li>• Example: Salary increase/decrease</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Australian Examples</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Comparing House Prices</h3>
              <p className="text-gray-700 mb-2">
                House A: $750,000 | House B: $850,000
              </p>
              <div className="space-y-1 text-sm">
                <p><strong>Difference:</strong> |$750,000 - $850,000| = $100,000</p>
                <p><strong>Average:</strong> ($750,000 + $850,000) ÷ 2 = $800,000</p>
                <p><strong>Percentage Difference:</strong> $100,000 ÷ $800,000 × 100 = <strong>12.5%</strong></p>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Comparing Salaries</h3>
              <p className="text-gray-700 mb-2">
                Job Offer A: $75,000 | Job Offer B: $85,000
              </p>
              <div className="space-y-1 text-sm">
                <p><strong>Difference:</strong> |$75,000 - $85,000| = $10,000</p>
                <p><strong>Average:</strong> ($75,000 + $85,000) ÷ 2 = $80,000</p>
                <p><strong>Percentage Difference:</strong> $10,000 ÷ $80,000 × 100 = <strong>12.5%</strong></p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-800 mb-2">Comparing Test Scores</h3>
              <p className="text-gray-700 mb-2">
                Student A: 85% | Student B: 92%
              </p>
              <div className="space-y-1 text-sm">
                <p><strong>Difference:</strong> |85 - 92| = 7</p>
                <p><strong>Average:</strong> (85 + 92) ÷ 2 = 88.5</p>
                <p><strong>Percentage Difference:</strong> 7 ÷ 88.5 × 100 = <strong>7.9%</strong></p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">When to Use Percentage Difference</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-semibold mb-3 text-blue-600">Perfect For:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Comparing two similar options</li>
                <li>• Scientific measurements</li>
                <li>• Quality control testing</li>
                <li>• Market research comparisons</li>
                <li>• Performance benchmarking</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-red-600">Not Ideal For:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Tracking changes over time</li>
                <li>• Before/after comparisons</li>
                <li>• Growth rate calculations</li>
                <li>• Discount calculations</li>
                <li>• Investment returns</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-World Applications</h2>

          <div className="space-y-4 mb-8">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-blue-800">Property Comparison</h3>
              <p className="text-gray-700 text-sm">
                Compare similar properties in different suburbs to understand price variations
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-green-800">Job Market Analysis</h3>
              <p className="text-gray-700 text-sm">
                Compare salary offers for similar positions across different companies
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-purple-800">Product Comparison</h3>
              <p className="text-gray-700 text-sm">
                Compare prices of similar products from different retailers
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-orange-800">Performance Metrics</h3>
              <p className="text-gray-700 text-sm">
                Compare business performance metrics between different periods or competitors
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-yellow-800 mb-4">Important Notes</h2>
            <ul className="space-y-2 text-yellow-700">
              <li>• Percentage difference is always positive (never negative)</li>
              <li>• The order of values doesn't affect the result</li>
              <li>• It's most meaningful when comparing values of similar magnitude</li>
              <li>• For very different values, percentage change might be more appropriate</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Mistakes</h2>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">×</span>
                <span>Using percentage difference when you need percentage change</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">×</span>
                <span>Forgetting to use absolute difference (making it negative)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">×</span>
                <span>Using one value as the base instead of the average</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">×</span>
                <span>Comparing vastly different values (e.g., $100 vs $10,000)</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Quick Calculations?</h2>
            <p className="text-gray-600 mb-6">
              Use our percentage difference calculator for instant comparisons.
            </p>
            <Link to="/percentage-difference-calculator">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto">
                <Calculator className="h-5 w-5" />
                Try the Calculator
              </button>
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/blog/how-to-calculate-percentage-increase" className="block p-4 border rounded-lg hover:bg-gray-50">
              <h3 className="font-semibold text-green-600">How to Calculate Percentage Increase</h3>
              <p className="text-gray-600 text-sm">Learn percentage change calculations</p>
            </Link>
            <Link to="/blog/percentage-calculator-vs-manual" className="block p-4 border rounded-lg hover:bg-gray-50">
              <h3 className="font-semibold text-gray-600">Calculator vs Manual Methods</h3>
              <p className="text-gray-600 text-sm">When to use calculators vs manual calculations</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatIsPercentageDifference
