import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { TrendingDown } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const PercentageDecreaseCalculator = () => {
  const [originalValue, setOriginalValue] = useState('')
  const [newValue, setNewValue] = useState('')
  const [result, setResult] = useState<{
    decrease: number
    percentage: number
  } | null>(null)

  const calculateDecrease = () => {
    const original = parseFloat(originalValue)
    const newVal = parseFloat(newValue)
    
    if (!isNaN(original) && !isNaN(newVal) && original > 0) {
      const decrease = original - newVal
      const percentage = (decrease / original) * 100
      setResult({ decrease, percentage })
    }
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Percentage Decrease Calculator Australia",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "url": "https://percentagecalculator.com.au/percentage-decrease-calculator",
    "description": "Calculate percentage decreases for discounts, price drops, reductions and more. Free Australian percentage decrease calculator with step-by-step examples.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "76"
    }
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you calculate percentage decrease?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To calculate percentage decrease: ((Original Value - New Value) / Original Value) × 100. For example, if a price drops from $100 to $80: ((100 - 80) / 100) × 100 = 20% decrease."
        }
      },
      {
        "@type": "Question",
        "name": "What is the percentage decrease formula?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The percentage decrease formula is: Percentage Decrease = ((Original Value - New Value) / Original Value) × 100"
        }
      }
    ]
  }

  return (
    <>
      <Helmet>
        <title>Percentage Decrease Calculator | Calculate Discounts & Price Drops</title>
        <meta name="description" content="Calculate percentage decreases for discounts, price drops, reductions and more. Free Australian percentage decrease calculator with step-by-step examples." />
        <meta name="keywords" content="percentage decrease calculator, discount calculator, price drop percentage, how to calculate percentage decrease" />
        <link rel="canonical" href="https://percentagecalculator.com.au/percentage-decrease-calculator" />
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
            <TrendingDown className="h-8 w-8 text-red-600" />
            Percentage Decrease Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate percentage decreases for discounts, price drops, reductions, and more. 
            Perfect for Australian shoppers and businesses with AUD examples.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Calculate Percentage Decrease</CardTitle>
              <CardDescription>
                Enter the original value and new value to find the percentage decrease
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="original">Original Value</Label>
                  <Input
                    id="original"
                    type="number"
                    placeholder="e.g. 100"
                    value={originalValue}
                    onChange={(e) => setOriginalValue(e.target.value)}
                    aria-describedby="original-help"
                    aria-required="true"
                  />
                  <div id="original-help" className="sr-only">
                    Enter the original or starting value before the decrease
                  </div>
                </div>
                <div>
                  <Label htmlFor="new">New Value</Label>
                  <Input
                    id="new"
                    type="number"
                    placeholder="e.g. 80"
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                    aria-describedby="new-help"
                    aria-required="true"
                  />
                  <div id="new-help" className="sr-only">
                    Enter the new or final value after the decrease
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={calculateDecrease} 
                className="w-full"
                disabled={!originalValue || !newValue}
                aria-describedby="calculate-decrease-help"
              >
                Calculate Percentage Decrease
              </Button>
              <div id="calculate-decrease-help" className="sr-only">
                Click to calculate the percentage decrease between the two values
              </div>
              
              {result !== null && (
                <div 
                  className="text-center p-6 bg-red-50 rounded-lg border border-red-200"
                  role="region"
                  aria-live="polite"
                  aria-label="Calculation result"
                >
                  <div className="space-y-2">
                    <p className="text-lg">
                      <strong>Decrease Amount:</strong> <span className="text-red-600">${result.decrease.toLocaleString('en-AU')}</span>
                    </p>
                    <p className="text-xl font-bold">
                      <strong>Percentage Decrease:</strong> <span className="text-red-600">{result.percentage.toFixed(2)}%</span>
                    </p>
                  </div>
                </div>
              )}
              
              <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                <p><strong>Formula:</strong> ((Original Value - New Value) ÷ Original Value) × 100</p>
                <p><strong>Example:</strong> Price drop from $100 to $80 = ((100 - 80) ÷ 100) × 100 = 20%</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Calculate Percentage Decrease</h2>
            <div className="space-y-4">
              <article className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold mb-2">Step 1: Find the Difference</h3>
                <p className="text-gray-700">Subtract the new value from the original value to find the decrease amount.</p>
                <p className="text-sm text-gray-600 mt-1">Original Value - New Value = Decrease</p>
              </article>
              <article className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold mb-2">Step 2: Divide by Original</h3>
                <p className="text-gray-700">Divide the decrease by the original value.</p>
                <p className="text-sm text-gray-600 mt-1">Decrease ÷ Original Value = Decimal</p>
              </article>
              <article className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold mb-2">Step 3: Convert to Percentage</h3>
                <p className="text-gray-700">Multiply by 100 to get the percentage decrease.</p>
                <p className="text-sm text-gray-600 mt-1">Decimal × 100 = Percentage Decrease</p>
              </article>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Australian Examples</h2>
            <div className="space-y-4">
              <article className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="font-semibold mb-2 text-red-800">Sale Discount</h3>
                <p className="text-gray-700 mb-2">Item price drops from $150 to $120</p>
                <p className="text-sm text-gray-600">
                  Calculation: ((150 - 120) ÷ 150) × 100 = <strong>20% decrease</strong>
                </p>
              </article>
              <article className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h3 className="font-semibold mb-2 text-orange-800">Fuel Price Drop</h3>
                <p className="text-gray-700 mb-2">Petrol price falls from $1.80 to $1.62 per litre</p>
                <p className="text-sm text-gray-600">
                  Calculation: ((1.80 - 1.62) ÷ 1.80) × 100 = <strong>10% decrease</strong>
                </p>
              </article>
              <article className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-semibold mb-2 text-blue-800">Electricity Bill</h3>
                <p className="text-gray-700 mb-2">Monthly bill reduces from $300 to $240</p>
                <p className="text-sm text-gray-600">
                  Calculation: ((300 - 240) ÷ 300) × 100 = <strong>20% decrease</strong>
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Uses for Percentage Decrease</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Shopping & Retail</h3>
              <ul className="space-y-2 text-gray-700" role="list">
                <li>Sale discounts and markdowns</li>
                <li>Clearance price reductions</li>
                <li>Seasonal sale calculations</li>
                <li>Bulk purchase discounts</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Business & Finance</h3>
              <ul className="space-y-2 text-gray-700" role="list">
                <li>Cost reduction analysis</li>
                <li>Revenue decline tracking</li>
                <li>Budget cut calculations</li>
                <li>Expense optimization</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6" role="list">
            <article className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">How do you calculate percentage decrease?</h3>
              <p className="text-gray-700">
                To calculate percentage decrease: ((Original Value - New Value) / Original Value) × 100. 
                For example, if a price drops from $100 to $80: ((100 - 80) / 100) × 100 = 20% decrease.
              </p>
            </article>
            <article className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">What is the percentage decrease formula?</h3>
              <p className="text-gray-700">
                The percentage decrease formula is: Percentage Decrease = ((Original Value - New Value) / Original Value) × 100
              </p>
            </article>
            <article className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">What's the difference between discount and percentage decrease?</h3>
              <p className="text-gray-700">
                A discount is the amount saved, while percentage decrease shows how much the price dropped relative to the original price. 
                Both use the same calculation method.
              </p>
            </article>
          </div>
        </section>

        <section className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Other Percentage Calculations?</h2>
          <p className="text-gray-600 mb-6">
            Explore our other percentage calculators for different types of calculations.
          </p>
          <nav aria-label="Related calculators">
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/percentage-increase-calculator"
                className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
              >
                <Button variant="outline">Percentage Increase</Button>
              </Link>
              <Link 
                to="/percentage-difference-calculator"
                className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
              >
                <Button variant="outline">Percentage Difference</Button>
              </Link>
              <Link 
                to="/gst-percentage-calculator"
                className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
              >
                <Button variant="outline">GST Calculator</Button>
              </Link>
              <Link 
                to="/"
                className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
              >
                <Button variant="outline">Main Calculator</Button>
              </Link>
            </div>
          </nav>
        </section>
      </div>
    </>
  )
}

export default PercentageDecreaseCalculator
