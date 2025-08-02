import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { BookOpen, Home, TrendingUp, Receipt } from 'lucide-react'

const RealLifePercentageExamples = () => {
  return (
    <>
      <Helmet>
        <title>Real-Life Percentage Examples | Australian Everyday Calculations</title>
        <meta name="description" content="Practical percentage calculations for everyday Australian life. Examples from shopping, home loans, bills, school marks, and more." />
        <meta name="keywords" content="percentage examples, real life percentages, australian percentage calculations, everyday percentage use" />
        <link rel="canonical" href="https://percentagecalculator.com.au/blog/percentage-in-real-life-examples" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            Real-Life Percentage Examples
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how percentages are used in everyday Australian life. From shopping 
            and home loans to school marks and business decisions.
          </p>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Shopping & Retail</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-800 mb-3">Boxing Day Sales</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border">
                  <p><strong>TV:</strong> Was $1,200, now $840</p>
                  <p className="text-sm text-gray-600">Calculation: ($1,200 - $840) ÷ $1,200 × 100 = 30% off</p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <p><strong>Clothing:</strong> Buy 2, get 1 free</p>
                  <p className="text-sm text-gray-600">Equivalent to: 33.3% off when buying 3 items</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-orange-800 mb-3">GST Calculations</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border">
                  <p><strong>Restaurant Bill:</strong> $55 (inc. GST)</p>
                  <p className="text-sm text-gray-600">GST amount: $55 ÷ 1.1 = $50 + $5 GST</p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <p><strong>Business Service:</strong> $200 + GST</p>
                  <p className="text-sm text-gray-600">Total: $200 × 1.1 = $220 (inc. $20 GST)</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Property & Finance</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <Home className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-bold text-blue-800">Home Loans</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border">
                  <p><strong>House Price:</strong> $800,000</p>
                  <p><strong>Deposit (20%):</strong> $160,000</p>
                  <p><strong>Loan Amount:</strong> $640,000</p>
                  <p className="text-sm text-gray-600">Calculation: $800,000 × 0.20 = $160,000 deposit</p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <p><strong>Interest Rate:</strong> 6.5% p.a.</p>
                  <p><strong>Monthly Interest:</strong> ~$3,467</p>
                  <p className="text-sm text-gray-600">Rough calculation: $640,000 × 0.065 ÷ 12</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-bold text-green-800">Investment Returns</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border">
                  <p><strong>ASX Shares:</strong> $50,000 → $54,000 (1 year)</p>
                  <p className="text-sm text-gray-600">Return: ($54,000 - $50,000) ÷ $50,000 × 100 = 8%</p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <p><strong>Term Deposit:</strong> $100,000 at 4.5% p.a.</p>
                  <p className="text-sm text-gray-600">Annual interest: $100,000 × 0.045 = $4,500</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Education & School</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple-800 mb-3">School Marks</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border">
                  <p><strong>Maths Test:</strong> 42 out of 50</p>
                  <p className="text-sm text-gray-600">Percentage: 42 ÷ 50 × 100 = 84%</p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <p><strong>Assignment:</strong> 76 out of 80</p>
                  <p className="text-sm text-gray-600">Percentage: 76 ÷ 80 × 100 = 95%</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-pink-800 mb-3">University Grades</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border">
                  <p><strong>Final Grade:</strong> 78%</p>
                  <p className="text-sm text-gray-600">Grade: Distinction (75-84%)</p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <p><strong>Course Completion:</strong> 36 out of 48 units</p>
                  <p className="text-sm text-gray-600">Progress: 36 ÷ 48 × 100 = 75% complete</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Household Bills & Expenses</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <Receipt className="h-6 w-6 text-yellow-600" />
                <h3 className="text-lg font-bold text-yellow-800">Utility Bills</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border">
                  <p><strong>Electricity:</strong> Last quarter $320, this quarter $280</p>
                  <p className="text-sm text-gray-600">Decrease: ($320 - $280) ÷ $320 × 100 = 12.5% reduction</p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <p><strong>Water Bill:</strong> $180 (inc. usage charges)</p>
                  <p className="text-sm text-gray-600">Usage: 60% of bill, Fixed: 40% of bill</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Business & Work</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-indigo-800 mb-3">Salary & Wages</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border">
                  <p><strong>Annual Review:</strong> $75,000 → $81,000</p>
                  <p className="text-sm text-gray-600">Increase: ($81,000 - $75,000) ÷ $75,000 × 100 = 8% raise</p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <p><strong>Superannuation:</strong> 11% of salary</p>
                  <p className="text-sm text-gray-600">On $75,000: $75,000 × 0.11 = $8,250 per year</p>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-teal-800 mb-3">Business Performance</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border">
                  <p><strong>Sales Growth:</strong> Q1: $120k, Q2: $138k</p>
                  <p className="text-sm text-gray-600">Growth: ($138k - $120k) ÷ $120k × 100 = 15% increase</p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <p><strong>Profit Margin:</strong> Revenue $500k, Profit $75k</p>
                  <p className="text-sm text-gray-600">Margin: $75k ÷ $500k × 100 = 15%</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Health & Fitness</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-800 mb-3">Fitness Goals</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border">
                  <p><strong>Weight Loss:</strong> 85kg → 78kg</p>
                  <p className="text-sm text-gray-600">Reduction: (85 - 78) ÷ 85 × 100 = 8.2% weight loss</p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <p><strong>Body Fat:</strong> 22% → 18%</p>
                  <p className="text-sm text-gray-600">Improvement: (22 - 18) ÷ 22 × 100 = 18% reduction</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sports & Statistics</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-800 mb-3">AFL & Cricket</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border">
                  <p><strong>AFL Accuracy:</strong> 18 goals from 24 shots</p>
                  <p className="text-sm text-gray-600">Accuracy: 18 ÷ 24 × 100 = 75%</p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <p><strong>Cricket Strike Rate:</strong> 84 runs from 60 balls</p>
                  <p className="text-sm text-gray-600">Strike rate: 84 ÷ 60 × 100 = 140</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Quick Calculations?</h2>
            <p className="text-gray-600 mb-6">
              Use our percentage calculators for any of these real-life scenarios.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Main Calculator
              </Link>
              <Link to="/percentage-increase-calculator" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Increase Calculator
              </Link>
              <Link to="/percentage-decrease-calculator" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Decrease Calculator
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/blog/percentage-tips-for-savings" className="block p-4 border rounded-lg hover:bg-gray-50">
              <h3 className="font-semibold text-green-600">Percentage Tips for Savings</h3>
              <p className="text-gray-600 text-sm">Smart strategies for calculating the best deals</p>
            </Link>
            <Link to="/blog/gst-in-australia-explained" className="block p-4 border rounded-lg hover:bg-gray-50">
              <h3 className="font-semibold text-orange-600">GST in Australia Explained</h3>
              <p className="text-gray-600 text-sm">Complete guide to Australian GST calculations</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default RealLifePercentageExamples
