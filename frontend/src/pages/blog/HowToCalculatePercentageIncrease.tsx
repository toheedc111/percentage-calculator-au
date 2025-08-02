import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { TrendingUp, Calculator } from 'lucide-react'

const HowToCalculatePercentageIncrease = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Calculate Percentage Increase",
    "description": "Learn the step-by-step method to calculate percentage increases for salary raises, house prices, and investments with Australian examples.",
    "totalTime": "PT5M",
    "supply": ["Calculator", "Original value", "New value"],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Find the difference",
        "text": "Subtract the original value from the new value to find the increase amount."
      },
      {
        "@type": "HowToStep", 
        "name": "Divide by original",
        "text": "Divide the increase by the original value to get the decimal."
      },
      {
        "@type": "HowToStep",
        "name": "Convert to percentage",
        "text": "Multiply the decimal by 100 to get the percentage increase."
      }
    ]
  }

  return (
    <>
      <Helmet>
        <title>How to Calculate Percentage Increase | Step-by-Step Guide</title>
        <meta name="description" content="Learn the step-by-step method to calculate percentage increases for salary raises, house prices, and investments with Australian examples." />
        <meta name="keywords" content="how to calculate percentage increase, percentage increase formula, salary increase percentage, house price increase" />
        <link rel="canonical" href="https://percentagecalculator.com.au/blog/how-to-calculate-percentage-increase" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <TrendingUp className="h-8 w-8 text-green-600" />
            How to Calculate Percentage Increase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the step-by-step method to calculate percentage increases for salary raises, 
            house prices, investments, and more with practical Australian examples.
          </p>
        </div>

        <div className="prose max-w-none">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-green-800 mb-2">Quick Formula</h2>
            <p className="text-green-700 text-lg">
              <strong>Percentage Increase = ((New Value - Original Value) ÷ Original Value) × 100</strong>
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Method</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-600 mb-2">Step 1</h3>
              <h4 className="text-gray-600 mb-3">Find the Increase</h4>
              <p>Subtract the original value from the new value:</p>
              <p className="font-mono bg-gray-100 p-2 rounded mt-2">
                New Value - Original Value = Increase
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-600 mb-2">Step 2</h3>
              <h4 className="text-gray-600 mb-3">Divide by Original</h4>
              <p>Divide the increase by the original value:</p>
              <p className="font-mono bg-gray-100 p-2 rounded mt-2">
                Increase ÷ Original Value = Decimal
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-600 mb-2">Step 3</h3>
              <h4 className="text-gray-600 mb-3">Convert to Percentage</h4>
              <p>Multiply by 100 to get percentage:</p>
              <p className="font-mono bg-gray-100 p-2 rounded mt-2">
                Decimal × 100 = Percentage
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Australian Examples</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Salary Increase</h3>
              <p className="text-gray-700 mb-2">Your salary increases from $65,000 to $72,000 per year.</p>
              <div className="space-y-1 text-sm">
                <p><strong>Step 1:</strong> $72,000 - $65,000 = $7,000 increase</p>
                <p><strong>Step 2:</strong> $7,000 ÷ $65,000 = 0.1077</p>
                <p><strong>Step 3:</strong> 0.1077 × 100 = <strong>10.77% increase</strong></p>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple-800 mb-2">House Price Growth</h3>
              <p className="text-gray-700 mb-2">A Sydney house value rises from $800,000 to $920,000.</p>
              <div className="space-y-1 text-sm">
                <p><strong>Step 1:</strong> $920,000 - $800,000 = $120,000 increase</p>
                <p><strong>Step 2:</strong> $120,000 ÷ $800,000 = 0.15</p>
                <p><strong>Step 3:</strong> 0.15 × 100 = <strong>15% increase</strong></p>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Investment Return</h3>
              <p className="text-gray-700 mb-2">Your ASX shares grow from $10,000 to $11,500.</p>
              <div className="space-y-1 text-sm">
                <p><strong>Step 1:</strong> $11,500 - $10,000 = $1,500 increase</p>
                <p><strong>Step 2:</strong> $1,500 ÷ $10,000 = 0.15</p>
                <p><strong>Step 3:</strong> 0.15 × 100 = <strong>15% increase</strong></p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Mistakes to Avoid</h2>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">×</span>
                <span>Using the new value as the denominator instead of the original value</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">×</span>
                <span>Forgetting to multiply by 100 to convert to percentage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">×</span>
                <span>Confusing percentage increase with percentage difference</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">×</span>
                <span>Using negative values when calculating decreases (use decrease calculator instead)</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">When to Use Percentage Increase</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-semibold mb-3 text-green-600">Business & Finance</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Salary and wage increases</li>
                <li>• Revenue growth analysis</li>
                <li>• Investment returns</li>
                <li>• Price increases</li>
                <li>• Profit margin improvements</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-green-600">Personal Finance</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Property value growth</li>
                <li>• Superannuation growth</li>
                <li>• Cost of living increases</li>
                <li>• Utility bill increases</li>
                <li>• Insurance premium rises</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Quick Calculations?</h2>
            <p className="text-gray-600 mb-6">
              Use our percentage increase calculator for instant results.
            </p>
            <Link to="/percentage-increase-calculator">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 mx-auto">
                <Calculator className="h-5 w-5" />
                Try the Calculator
              </button>
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/blog/how-to-calculate-percentage-decrease" className="block p-4 border rounded-lg hover:bg-gray-50">
              <h3 className="font-semibold text-red-600">How to Calculate Percentage Decrease</h3>
              <p className="text-gray-600 text-sm">Learn to calculate discounts and price drops</p>
            </Link>
            <Link to="/blog/what-is-percentage-difference" className="block p-4 border rounded-lg hover:bg-gray-50">
              <h3 className="font-semibold text-blue-600">What is Percentage Difference?</h3>
              <p className="text-gray-600 text-sm">Understand the difference between increase and difference</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowToCalculatePercentageIncrease
