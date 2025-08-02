import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { TrendingDown, ShoppingCart } from 'lucide-react'

const PercentageTipsForSavings = () => {
  return (
    <>
      <Helmet>
        <title>Percentage Tips for Savings & Discounts | Australian Shopping Guide</title>
        <meta name="description" content="Smart strategies for calculating discounts, savings, and getting the best deals in Australia. Master percentage calculations for shopping and budgeting." />
        <meta name="keywords" content="percentage savings tips, discount calculator, shopping discounts australia, percentage off calculator" />
        <link rel="canonical" href="https://percentagecalculator.com.au/blog/percentage-tips-for-savings" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <TrendingDown className="h-8 w-8 text-green-600" />
            Percentage Tips for Savings & Discounts
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the art of calculating discounts and savings. Learn smart strategies 
            for getting the best deals in Australia with percentage calculations.
          </p>
        </div>

        <div className="prose max-w-none">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-green-800 mb-2">Quick Discount Formula</h2>
            <p className="text-green-700 text-lg">
              <strong>Sale Price = Original Price × (1 - Discount%/100)</strong>
            </p>
            <p className="text-green-600 text-sm mt-2">
              Example: $100 item with 25% off = $100 × (1 - 25/100) = $100 × 0.75 = $75
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Australian Shopping Calendar</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-800 mb-3">Boxing Day Sales (Dec 26)</h3>
              <ul className="space-y-2 text-red-700">
                <li>• Electronics: 20-50% off</li>
                <li>• Clothing: 30-70% off</li>
                <li>• Home goods: 25-60% off</li>
                <li>• Best deals of the year</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-800 mb-3">End of Financial Year (June)</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Cars: 10-25% off</li>
                <li>• Furniture: 20-40% off</li>
                <li>• Appliances: 15-35% off</li>
                <li>• Business equipment: 20-50% off</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Smart Shopping Strategies</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingCart className="h-6 w-6 text-purple-600" />
                <h3 className="text-lg font-bold text-purple-800">Compare Real Discounts</h3>
              </div>
              <p className="text-gray-700 mb-3">Don't just look at percentage off - calculate the actual savings:</p>
              <div className="bg-white p-4 rounded border">
                <p><strong>Store A:</strong> $200 item, 30% off = $140 (Save $60)</p>
                <p><strong>Store B:</strong> $180 item, 20% off = $144 (Save $36)</p>
                <p className="font-bold text-purple-600">Store A is better despite lower percentage!</p>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-orange-800 mb-3">Stacking Discounts</h3>
              <p className="text-gray-700 mb-3">When multiple discounts apply, calculate step by step:</p>
              <div className="bg-white p-4 rounded border space-y-1">
                <p>Original price: $100</p>
                <p>Member discount (10%): $100 × 0.9 = $90</p>
                <p>Sale discount (20% off sale price): $90 × 0.8 = $72</p>
                <p className="font-bold text-orange-600">Total savings: $28 (28% off original)</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Mental Math Tricks</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-3">10% Discount</h3>
              <p className="text-gray-700 mb-2">Move decimal point left one place</p>
              <p className="text-sm">$250 → 10% off = $25 → Sale price: $225</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-3">25% Discount</h3>
              <p className="text-gray-700 mb-2">Divide by 4</p>
              <p className="text-sm">$200 → 25% off = $50 → Sale price: $150</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-3">50% Discount</h3>
              <p className="text-gray-700 mb-2">Divide by 2</p>
              <p className="text-sm">$180 → 50% off = $90 → Sale price: $90</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-3">33% Discount</h3>
              <p className="text-gray-700 mb-2">Divide by 3</p>
              <p className="text-sm">$150 → 33% off = $50 → Sale price: $100</p>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-8 text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Calculate Savings?</h2>
            <p className="text-gray-600 mb-6">
              Use our percentage decrease calculator to find out how much you're saving.
            </p>
            <Link to="/percentage-decrease-calculator">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Calculate Your Savings
              </button>
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/blog/how-to-calculate-percentage-decrease" className="block p-4 border rounded-lg hover:bg-gray-50">
              <h3 className="font-semibold text-red-600">How to Calculate Percentage Decrease</h3>
              <p className="text-gray-600 text-sm">Master discount and reduction calculations</p>
            </Link>
            <Link to="/blog/percentage-in-real-life-examples" className="block p-4 border rounded-lg hover:bg-gray-50">
              <h3 className="font-semibold text-blue-600">Real-Life Percentage Examples</h3>
              <p className="text-gray-600 text-sm">Practical percentage calculations for everyday life</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default PercentageTipsForSavings
