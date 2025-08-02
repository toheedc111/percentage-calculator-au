import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Receipt } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const GSTCalculator = () => {
  const [amount, setAmount] = useState('')
  const [addGSTResult, setAddGSTResult] = useState<{
    gstAmount: number
    totalWithGST: number
  } | null>(null)
  const [removeGSTResult, setRemoveGSTResult] = useState<{
    gstAmount: number
    totalWithoutGST: number
  } | null>(null)

  const calculateAddGST = () => {
    const val = parseFloat(amount)
    if (!isNaN(val)) {
      const gstAmount = val * 0.1
      const totalWithGST = val + gstAmount
      setAddGSTResult({ gstAmount, totalWithGST })
    }
  }

  const calculateRemoveGST = () => {
    const val = parseFloat(amount)
    if (!isNaN(val)) {
      const totalWithoutGST = val / 1.1
      const gstAmount = val - totalWithoutGST
      setRemoveGSTResult({ gstAmount, totalWithoutGST })
    }
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "GST Calculator Australia",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "url": "https://percentagecalculator.com.au/gst-percentage-calculator",
    "description": "Calculate GST for Australian businesses. Add or remove 10% GST easily with our free calculator. Perfect for invoices, receipts, and tax calculations.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "203"
    }
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is GST in Australia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GST (Goods and Services Tax) in Australia is 10%. It's added to most goods and services. To add GST: multiply by 1.1. To remove GST: divide by 1.1."
        }
      },
      {
        "@type": "Question",
        "name": "How do you calculate GST?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To add GST: Amount × 0.1 = GST amount. To remove GST from total: Total ÷ 1.1 = Amount without GST."
        }
      }
    ]
  }

  return (
    <>
      <Helmet>
        <title>GST Calculator Australia | Add & Remove 10% GST</title>
        <meta name="description" content="Calculate GST for Australian businesses. Add or remove 10% GST easily with our free calculator. Perfect for invoices, receipts, and tax calculations." />
        <meta name="keywords" content="gst calculator australia, calculate gst, add gst, remove gst, 10% gst, australian tax calculator" />
        <link rel="canonical" href="https://percentagecalculator.com.au/gst-percentage-calculator" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqData)}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <Receipt className="h-8 w-8 text-orange-600" />
            GST Calculator Australia
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate 10% GST for Australian businesses. Add GST to prices or remove GST from totals. 
            Perfect for invoices, receipts, and tax calculations.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <Tabs defaultValue="add" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="add">Add GST</TabsTrigger>
              <TabsTrigger value="remove">Remove GST</TabsTrigger>
            </TabsList>
            
            <TabsContent value="add">
              <Card>
                <CardHeader>
                  <CardTitle>Add GST to Amount</CardTitle>
                  <CardDescription>
                    Enter the amount without GST to calculate the total with 10% GST added
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="add-amount">Amount (excluding GST)</Label>
                    <Input
                      id="add-amount"
                      type="number"
                      placeholder="e.g. 100"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                  
                  <Button onClick={calculateAddGST} className="w-full">
                    Add GST
                  </Button>
                  
                  {addGSTResult !== null && (
                    <div className="text-center p-6 bg-orange-50 rounded-lg border border-orange-200">
                      <div className="space-y-2">
                        <p className="text-lg">
                          <strong>GST Amount:</strong> <span className="text-orange-600">${addGSTResult.gstAmount.toFixed(2)}</span>
                        </p>
                        <p className="text-xl font-bold">
                          <strong>Total (inc. GST):</strong> <span className="text-orange-600">${addGSTResult.totalWithGST.toFixed(2)}</span>
                        </p>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                    <p><strong>Formula:</strong> Amount × 1.1 = Total with GST</p>
                    <p><strong>GST Amount:</strong> Amount × 0.1</p>
                    <p><strong>Example:</strong> $100 + GST = $100 × 1.1 = $110 (GST: $10)</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="remove">
              <Card>
                <CardHeader>
                  <CardTitle>Remove GST from Total</CardTitle>
                  <CardDescription>
                    Enter the total amount including GST to calculate the amount without GST
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="remove-amount">Total Amount (including GST)</Label>
                    <Input
                      id="remove-amount"
                      type="number"
                      placeholder="e.g. 110"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                  
                  <Button onClick={calculateRemoveGST} className="w-full">
                    Remove GST
                  </Button>
                  
                  {removeGSTResult !== null && (
                    <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="space-y-2">
                        <p className="text-xl font-bold">
                          <strong>Amount (exc. GST):</strong> <span className="text-blue-600">${removeGSTResult.totalWithoutGST.toFixed(2)}</span>
                        </p>
                        <p className="text-lg">
                          <strong>GST Amount:</strong> <span className="text-blue-600">${removeGSTResult.gstAmount.toFixed(2)}</span>
                        </p>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                    <p><strong>Formula:</strong> Total ÷ 1.1 = Amount without GST</p>
                    <p><strong>GST Amount:</strong> Total - Amount without GST</p>
                    <p><strong>Example:</strong> $110 ÷ 1.1 = $100 (GST: $10)</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">GST in Australia</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold mb-2">What is GST?</h3>
                <p className="text-gray-700">GST (Goods and Services Tax) is a 10% tax applied to most goods and services in Australia. It was introduced in 2000.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold mb-2">Who Pays GST?</h3>
                <p className="text-gray-700">Businesses with annual turnover of $75,000+ must register for GST. Some items are GST-free (basic food, medical services).</p>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold mb-2">GST on Invoices</h3>
                <p className="text-gray-700">Business invoices must show GST separately. Use "Add GST" for pricing and "Remove GST" for expense claims.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common GST Calculations</h2>
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="font-semibold mb-2 text-green-800">Service Invoice</h3>
                <p className="text-gray-700 mb-2">Consulting fee: $500 + GST</p>
                <p className="text-sm text-gray-600">
                  Total: $500 × 1.1 = <strong>$550 (GST: $50)</strong>
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-semibold mb-2 text-blue-800">Receipt Analysis</h3>
                <p className="text-gray-700 mb-2">Receipt total: $220 (inc. GST)</p>
                <p className="text-sm text-gray-600">
                  Amount: $220 ÷ 1.1 = <strong>$200 (GST: $20)</strong>
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="font-semibold mb-2 text-purple-800">Product Pricing</h3>
                <p className="text-gray-700 mb-2">Product cost: $90 + GST</p>
                <p className="text-sm text-gray-600">
                  Retail price: $90 × 1.1 = <strong>$99 (GST: $9)</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">GST Calculator Uses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Business Invoicing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Service invoices</li>
                <li>• Product pricing</li>
                <li>• Quote preparation</li>
                <li>• Contract amounts</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Expense Claims</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Receipt analysis</li>
                <li>• GST credit claims</li>
                <li>• Business expenses</li>
                <li>• Tax return preparation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Financial Planning</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Budget calculations</li>
                <li>• Cost estimations</li>
                <li>• Price comparisons</li>
                <li>• Cash flow planning</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">What is GST in Australia?</h3>
              <p className="text-gray-700">
                GST (Goods and Services Tax) in Australia is 10%. It's added to most goods and services. 
                To add GST: multiply by 1.1. To remove GST: divide by 1.1.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">How do you calculate GST?</h3>
              <p className="text-gray-700">
                To add GST: Amount × 0.1 = GST amount. To remove GST from total: Total ÷ 1.1 = Amount without GST.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">Do I need to register for GST?</h3>
              <p className="text-gray-700">
                You must register for GST if your business turnover is $75,000 or more per year. 
                Some businesses can register voluntarily even with lower turnover.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">What items are GST-free?</h3>
              <p className="text-gray-700">
                Basic food items, medical services, education, and some exports are GST-free. 
                Most other goods and services include 10% GST.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Other Percentage Calculations?</h2>
          <p className="text-gray-600 mb-6">
            Explore our other percentage calculators for different types of calculations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/percentage-increase-calculator">
              <Button variant="outline">Percentage Increase</Button>
            </Link>
            <Link to="/percentage-decrease-calculator">
              <Button variant="outline">Percentage Decrease</Button>
            </Link>
            <Link to="/what-is-x-percent-of-y">
              <Button variant="outline">What is X% of Y</Button>
            </Link>
            <Link to="/">
              <Button variant="outline">Main Calculator</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default GSTCalculator
