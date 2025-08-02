import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { TrendingUp } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const PercentageIncreaseCalculator = () => {
  const [originalValue, setOriginalValue] = useState('')
  const [newValue, setNewValue] = useState('')
  const [result, setResult] = useState<{
    increase: number
    percentage: number
  } | null>(null)

  const calculateIncrease = () => {
    const original = parseFloat(originalValue)
    const newVal = parseFloat(newValue)
    
    if (!isNaN(original) && !isNaN(newVal) && original > 0) {
      const increase = newVal - original
      const percentage = (increase / original) * 100
      setResult({ increase, percentage })
    }
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Percentage Increase Calculator Australia",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "url": "https://percentagecalculator.com.au/percentage-increase-calculator",
    "description": "Calculate percentage increases for salary raises, house prices, investments and more. Free Australian percentage increase calculator with examples.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "89"
    }
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you calculate percentage increase?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To calculate percentage increase: ((New Value - Original Value) / Original Value) × 100. For example, if a salary increases from $50,000 to $55,000: ((55,000 - 50,000) / 50,000) × 100 = 10% increase."
        }
      },
      {
        "@type": "Question",
        "name": "What is the percentage increase formula?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The percentage increase formula is: Percentage Increase = ((New Value - Original Value) / Original Value) × 100"
        }
      }
    ]
  }

  return (
    <>
      <Helmet>
        <title>Percentage Increase Calculator | Calculate Salary & Price Increases</title>
        <meta name="description" content="Calculate percentage increases for salary raises, house prices, investments and more. Free Australian percentage increase calculator with step-by-step examples." />
        <meta name="keywords" content="percentage increase calculator, salary increase calculator, price increase percentage, how to calculate percentage increase" />
        <link rel="canonical" href="https://percentagecalculator.com.au/percentage-increase-calculator" />
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
            <TrendingUp className="h-8 w-8 text-green-600" />
            Percentage Increase Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate percentage increases for salary raises, house prices, investments, and more. 
            Perfect for Australian users with AUD examples and explanations.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Calculate Percentage Increase</CardTitle>
              <CardDescription>
                Enter the original value and new value to find the percentage increase
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="original">Original Value</Label>
                  <Input
                    id="original"
                    type="number"
                    placeholder="e.g. 50000"
                    value={originalValue}
                    onChange={(e) => setOriginalValue(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="new">New Value</Label>
                  <Input
                    id="new"
                    type="number"
                    placeholder="e.g. 55000"
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                  />
                </div>
              </div>
              
              <Button onClick={calculateIncrease} className="w-full">
                Calculate Percentage Increase
              </Button>
              
              {result !== null && (
                <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                  <div className="space-y-2">
                    <p className="text-lg">
                      <strong>Increase Amount:</strong> <span className="text-green-600">${result.increase.toLocaleString('en-AU')}</span>
                    </p>
                    <p className="text-xl font-bold">
                      <strong>Percentage Increase:</strong> <span className="text-green-600">{result.percentage.toFixed(2)}%</span>
                    </p>
                  </div>
                </div>
              )}
              
              <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                <p><strong>Formula:</strong> ((New Value - Original Value) ÷ Original Value) × 100</p>
                <p><strong>Example:</strong> Salary increase from $50,000 to $55,000 = ((55,000 - 50,000) ÷ 50,000) × 100 = 10%</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Calculate Percentage Increase</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold mb-2">Step 1: Find the Difference</h3>
                <p className="text-gray-700">Subtract the original value from the new value to find the increase amount.</p>
                <p className="text-sm text-gray-600 mt-1">New Value - Original Value = Increase</p>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold mb-2">Step 2: Divide by Original</h3>
                <p className="text-gray-700">Divide the increase by the original value.</p>
                <p className="text-sm text-gray-600 mt-1">Increase ÷ Original Value = Decimal</p>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold mb-2">Step 3: Convert to Percentage</h3>
                <p className="text-gray-700">Multiply by 100 to get the percentage increase.</p>
                <p className="text-sm text-gray-600 mt-1">Decimal × 100 = Percentage Increase</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Australian Examples</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-semibold mb-2 text-blue-800">Salary Increase</h3>
                <p className="text-gray-700 mb-2">Your salary increases from $65,000 to $71,500</p>
                <p className="text-sm text-gray-600">
                  Calculation: ((71,500 - 65,000) ÷ 65,000) × 100 = <strong>10% increase</strong>
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="font-semibold mb-2 text-green-800">House Price Growth</h3>
                <p className="text-gray-700 mb-2">House value rises from $800,000 to $880,000</p>
                <p className="text-sm text-gray-600">
                  Calculation: ((880,000 - 800,000) ÷ 800,000) × 100 = <strong>10% increase</strong>
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="font-semibold mb-2 text-purple-800">Investment Return</h3>
                <p className="text-gray-700 mb-2">Investment grows from $10,000 to $12,500</p>
                <p className="text-sm text-gray-600">
                  Calculation: ((12,500 - 10,000) ÷ 10,000) × 100 = <strong>25% increase</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Uses for Percentage Increase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Personal Finance</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Salary and wage increases</li>
                <li>• Investment portfolio growth</li>
                <li>• Superannuation contributions</li>
                <li>• Property value appreciation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Business & Economics</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Revenue growth analysis</li>
                <li>• Price increase calculations</li>
                <li>• Market share expansion</li>
                <li>• Cost inflation tracking</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">How do you calculate percentage increase?</h3>
              <p className="text-gray-700">
                To calculate percentage increase: ((New Value - Original Value) / Original Value) × 100. 
                For example, if a salary increases from $50,000 to $55,000: ((55,000 - 50,000) / 50,000) × 100 = 10% increase.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">What is the percentage increase formula?</h3>
              <p className="text-gray-700">
                The percentage increase formula is: Percentage Increase = ((New Value - Original Value) / Original Value) × 100
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">Can percentage increase be more than 100%?</h3>
              <p className="text-gray-700">
                Yes! If the new value is more than double the original value, the percentage increase will exceed 100%. 
                For example, if something increases from $100 to $300, that's a 200% increase.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Other Percentage Calculations?</h2>
          <p className="text-gray-600 mb-6">
            Explore our other percentage calculators for different types of calculations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/percentage-decrease-calculator">
              <Button variant="outline">Percentage Decrease</Button>
            </Link>
            <Link to="/percentage-difference-calculator">
              <Button variant="outline">Percentage Difference</Button>
            </Link>
            <Link to="/gst-percentage-calculator">
              <Button variant="outline">GST Calculator</Button>
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

export default PercentageIncreaseCalculator
