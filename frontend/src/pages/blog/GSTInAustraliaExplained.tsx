import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Receipt, Calculator } from 'lucide-react'

const GSTInAustraliaExplained = () => {
  return (
    <>
      <Helmet>
        <title>GST in Australia Explained | Complete Guide to 10% GST</title>
        <meta name="description" content="Complete guide to GST in Australia. Learn GST rates, registration requirements, calculations, and exemptions for Australian businesses." />
        <meta name="keywords" content="gst australia, goods and services tax, gst rate australia, gst registration, gst calculator" />
        <link rel="canonical" href="https://percentagecalculator.com.au/blog/gst-in-australia-explained" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <Receipt className="h-8 w-8 text-orange-600" />
            GST in Australia Explained
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete guide to Australia's Goods and Services Tax (GST). Learn about rates, 
            registration requirements, calculations, and exemptions for businesses.
          </p>
        </div>

        <div className="prose max-w-none">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-orange-800 mb-2">Quick Facts</h2>
            <ul className="text-orange-700 space-y-1">
              <li>• GST rate in Australia: <strong>10%</strong></li>
              <li>• Registration threshold: <strong>$75,000</strong> annual turnover</li>
              <li>• Introduced: <strong>1 July 2000</strong></li>
              <li>• Applies to most goods and services</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">What is GST?</h2>
          
          <p className="text-gray-700 mb-6">
            GST (Goods and Services Tax) is a broad-based tax of 10% on most goods, services, 
            and other items sold or consumed in Australia. It's a value-added tax that's 
            collected by businesses and remitted to the Australian Taxation Office (ATO).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">GST Registration Requirements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-800 mb-3">Must Register</h3>
              <ul className="space-y-2 text-red-700">
                <li>• Annual turnover $75,000+ ($150,000+ for non-profit)</li>
                <li>• Taxi or ride-share services (any turnover)</li>
                <li>• Selling goods/services as a business</li>
                <li>• Importing goods into Australia</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-800 mb-3">Can Choose to Register</h3>
              <ul className="space-y-2 text-green-700">
                <li>• Annual turnover under $75,000</li>
                <li>• Want to claim GST credits</li>
                <li>• Selling to GST-registered businesses</li>
                <li>• Starting a new business</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">How GST Works</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Adding GST to Prices</h3>
              <p className="text-gray-700 mb-2">When you sell goods or services, add 10% GST:</p>
              <div className="bg-white p-4 rounded border">
                <p className="font-mono">Service fee: $100</p>
                <p className="font-mono">GST (10%): $10</p>
                <p className="font-mono font-bold">Total: $110</p>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Claiming GST Credits</h3>
              <p className="text-gray-700 mb-2">You can claim GST credits on business purchases:</p>
              <div className="bg-white p-4 rounded border">
                <p className="font-mono">Office supplies: $110 (inc. GST)</p>
                <p className="font-mono">GST credit: $10</p>
                <p className="font-mono font-bold">Net cost: $100</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">GST-Free Items</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-semibold mb-3 text-green-600">Food & Health</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Basic food items (bread, milk, meat)</li>
                <li>• Medical services</li>
                <li>• Prescription medicines</li>
                <li>• Hospital treatment</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-blue-600">Education & Finance</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• School education</li>
                <li>• University courses</li>
                <li>• Financial services</li>
                <li>• Insurance</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">GST Calculation Examples</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Example 1: Adding GST</h3>
              <p className="text-gray-700 mb-2">Consulting service: $500 + GST</p>
              <div className="space-y-1 text-sm">
                <p>GST amount: $500 × 0.10 = $50</p>
                <p>Total price: $500 + $50 = <strong>$550</strong></p>
                <p>Or simply: $500 × 1.10 = <strong>$550</strong></p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Example 2: Removing GST</h3>
              <p className="text-gray-700 mb-2">Receipt total: $330 (inc. GST)</p>
              <div className="space-y-1 text-sm">
                <p>Amount ex-GST: $330 ÷ 1.10 = $300</p>
                <p>GST amount: $330 - $300 = <strong>$30</strong></p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">GST Reporting & Payment</h2>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-yellow-800 mb-3">BAS (Business Activity Statement)</h3>
            <ul className="space-y-2 text-yellow-700">
              <li>• Lodge quarterly (most businesses) or monthly (large businesses)</li>
              <li>• Report GST collected and GST credits claimed</li>
              <li>• Pay net GST owing or receive refund</li>
              <li>• Due 28 days after quarter end</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common GST Mistakes</h2>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">×</span>
                <span>Not registering when turnover exceeds $75,000</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">×</span>
                <span>Claiming GST credits on personal expenses</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">×</span>
                <span>Not keeping proper tax invoices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">×</span>
                <span>Charging GST on GST-free items</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tax Invoice Requirements</h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Must Include:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-blue-700">
                <li>• "Tax Invoice" clearly stated</li>
                <li>• Your ABN</li>
                <li>• Invoice date</li>
                <li>• Description of goods/services</li>
              </ul>
              <ul className="space-y-2 text-blue-700">
                <li>• GST amount (or "includes GST")</li>
                <li>• Total amount</li>
                <li>• Buyer's identity</li>
                <li>• Your business name/address</li>
              </ul>
            </div>
          </div>

          <div className="bg-orange-50 rounded-lg p-8 text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need GST Calculations?</h2>
            <p className="text-gray-600 mb-6">
              Use our GST calculator to quickly add or remove GST from any amount.
            </p>
            <Link to="/gst-percentage-calculator">
              <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors flex items-center gap-2 mx-auto">
                <Calculator className="h-5 w-5" />
                GST Calculator
              </button>
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/blog/percentage-calculator-vs-manual" className="block p-4 border rounded-lg hover:bg-gray-50">
              <h3 className="font-semibold text-gray-600">Calculator vs Manual Methods</h3>
              <p className="text-gray-600 text-sm">When to use calculators for GST calculations</p>
            </Link>
            <Link to="/blog/percentage-in-real-life-examples" className="block p-4 border rounded-lg hover:bg-gray-50">
              <h3 className="font-semibold text-blue-600">Real-Life Percentage Examples</h3>
              <p className="text-gray-600 text-sm">Practical applications including GST scenarios</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default GSTInAustraliaExplained
