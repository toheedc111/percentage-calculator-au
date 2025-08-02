import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { TrendingDown, Calculator } from 'lucide-react'

const HowToCalculatePercentageDecrease = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Calculate Percentage Decrease",
    "description": "Learn the step-by-step method to calculate percentage decreases for discounts, price drops, and reductions with Australian examples.",
    "totalTime": "PT5M",
    "supply": ["Calculator", "Original value", "New value"],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Find the decrease",
        "text": "Subtract the new value from the original value to find the decrease amount."
      },
      {
        "@type": "HowToStep", 
        "name": "Divide by original",
        "text": "Divide the decrease by the original value to get the decimal."
      },
      {
        "@type": "HowToStep",
        "name": "Convert to percentage",
        "text": "Multiply the decimal by 100 to get the percentage decrease."
      }
    ]
  }

  return (
    <>
      <Helmet>
        <title>How to Calculate Percentage Decrease | Discount Guide</title>
        <meta name="description" content="Learn the step-by-step method to calculate percentage decreases for discounts, price drops, and reductions with Australian examples." />
        <meta name="keywords" content="how to calculate percentage decrease, percentage decrease formula, discount calculation, price drop percentage" />
        <link rel="canonical" href="https://percentagecalculator.com.au/blog/how-to-calculate-percentage-decrease" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <TrendingDown className="h-8 w-8 text-red-600" />
            How to Calculate Percentage Decrease
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the step-by-step method to calculate percentage decreases for discounts, 
            price drops, reductions, and savings with practical Australian examples.
          </p>
        </div>

        <div className="prose max-w-none">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-red-800 mb-2">Quick Formula</h2>
            <p className="text-red-700 text-lg">
              <strong>Percentage Decrease = ((Original Value - New Value) ÷ Original Value) × 100</strong>
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Method</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-600 mb-2">Step 1</h3>
              <h4 className="text-gray-600 mb-3">Find the Decrease</h4>
              <p>Subtract the new value from the original value:</p>
              <p className="font-mono bg-gray-100 p-2 rounded mt-2">
                Original Value - New Value = Decrease
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-600 mb-2">Step 2</h3>
              <h4 className="text-gray-600 mb-3">Divide by Original</h4>
              <p>Divide the decrease by the original value:</p>
              <p className="font-mono bg-gray-100 p-2 rounded mt-2">
                Decrease ÷ Original Value = Decimal
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-600 mb-2">Step 3</h3>
              <h4 className="text-gray-600 mb-3">Convert to Percentage</h4>
              <p>Multiply by 100 to get percentage:</p>
              <p className="font-mono bg-gray-100 p-2 rounded mt-2">
                Decimal × 100 = Percentage
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Australian Examples</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Sale Discount</h3>
              <p className="text-gray-700 mb-2">A jacket's price drops from $200 to $150 during a sale.</p>
              <div className="space-y-1 text-sm">
                <p><strong>Step 1:</strong> $200 - $150 = $50 decrease</p>
                <p><strong>Step 2:</strong> $50 ÷ $200 = 0.25</p>
                <p><strong>Step 3:</strong> 0.25 × 100 = <strong>25% decrease</strong></p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Fuel Price Drop</h3>
              <p className="text-gray-700 mb-2">Petrol price falls from $1.80 to $1.62 per litre.</p>
              <div className="space-y-1 text-sm">
                <p><strong>Step 1:</strong> $1.80 - $1.62 = $0.18 decrease</p>
                <p><strong>Step 2:</strong> $0.18 ÷ $1.80 = 0.10</p>
                <p><strong>Step 3:</strong> 0.10 × 100 = <strong>10% decrease</strong></p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-800 mb-2">Electricity Bill Reduction</h3>
              <p className="text-gray-700 mb-2">Monthly electricity bill reduces from $300 to $240.</p>
              <div className="space-y-1 text-sm">
                <p><strong>Step 1:</strong> $300 - $240 = $60 decrease</p>
                <p><strong>Step 2:</strong> $60 ÷ $300 = 0.20</p>
                <p><strong>Step 3:</strong> 0.20 × 100 = <strong>20% decrease</strong></p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Shopping Scenarios</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-bold text-purple-800 mb-2">End of Financial Year Sale</h3>
              <p className="text-sm text-gray-700 mb-2">Laptop: $1,500 → $1,200</p>
              <p className="text-sm">Decrease: $300 ÷ $1,500 × 100 = <strong>20% off</strong></p>
            </div>
            <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
              <h3 className="font-bold text-pink-800 mb-2">Clearance Sale</h3>
              <p className="text-sm text-gray-700 mb-2">Shoes: $120 → $84</p>
              <p className="text-sm">Decrease: $36 ÷ $120 × 100 = <strong>30% off</strong></p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Applications</h2>

          <div className="space-y-4 mb-8">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-blue-800">Cost Reduction</h3>
              <p className="text-gray-700 text-sm">Track how much you've reduced business expenses</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-green-800">Inventory Clearance</h3>
              <p className="text-gray-700 text-sm">Calculate markdown percentages for stock clearance</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-orange-800">Budget Analysis</h3>
              <p className="text-gray-700 text-sm">Measure budget cuts and spending reductions</p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-yellow-800 mb-4">Pro Tips for Australian Shoppers</h2>
            <ul className="space-y-2 text-yellow-700">
              <li>• Compare percentage decreases across different stores during sales</li>
              <li>• End of financial year (June 30) often has the biggest discounts</li>
              <li>• Boxing Day sales typically offer 20-50% decreases on many items</li>
              <li>• Use percentage decrease to evaluate if a "sale" is actually good value</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Quick Calculations?</h2>
            <p className="text-gray-600 mb-6">
              Use our percentage decrease calculator for instant discount calculations.
            </p>
            <Link to="/percentage-decrease-calculator">
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2 mx-auto">
                <Calculator className="h-5 w-5" />
                Try the Calculator
              </button>
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/blog/how-to-calculate-percentage-increase" className="block p-4 border rounded-lg hover:bg-gray-50">
              <h3 className="font-semibold text-green-600">How to Calculate Percentage Increase</h3>
              <p className="text-gray-600 text-sm">Learn to calculate salary raises and price increases</p>
            </Link>
            <Link to="/blog/percentage-tips-for-savings" className="block p-4 border rounded-lg hover:bg-gray-50">
              <h3 className="font-semibold text-purple-600">Percentage Tips for Savings</h3>
              <p className="text-gray-600 text-sm">Smart strategies for calculating the best deals</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowToCalculatePercentageDecrease
