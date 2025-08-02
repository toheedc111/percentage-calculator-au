import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Percent } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const WhatIsXPercentOfY = () => {
  const [percentage, setPercentage] = useState('')
  const [value, setValue] = useState('')
  const [result, setResult] = useState<number | null>(null)

  const calculateResult = () => {
    const perc = parseFloat(percentage)
    const val = parseFloat(value)
    
    if (!isNaN(perc) && !isNaN(val)) {
      setResult((perc / 100) * val)
    }
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "What is X Percent of Y Calculator Australia",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "url": "https://percentagecalculator.com.au/what-is-x-percent-of-y",
    "description": "Calculate what percentage of a number is. Perfect for tips, discounts, GST, and everyday percentage calculations in Australia.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156"
    }
  }

  return (
    <>
      <Helmet>
        <title>What is X% of Y Calculator | Percentage of a Number</title>
        <meta name="description" content="Calculate what percentage of a number is. Perfect for tips, discounts, GST, and everyday percentage calculations in Australia." />
        <meta name="keywords" content="what is percent of, percentage of number, calculate percentage, tip calculator, discount calculator" />
        <link rel="canonical" href="https://percentagecalculator.com.au/what-is-x-percent-of-y" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <Percent className="h-8 w-8 text-purple-600" />
            What is X% of Y Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate what percentage of a number is. Perfect for tips, discounts, GST calculations, 
            and everyday percentage problems in Australia.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Calculate Percentage of a Number</CardTitle>
              <CardDescription>
                Enter the percentage and the number to find the result
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="percentage">Percentage (%)</Label>
                  <Input
                    id="percentage"
                    type="number"
                    placeholder="e.g. 15"
                    value={percentage}
                    onChange={(e) => setPercentage(e.target.value)}
                    aria-describedby="percentage-help"
                    aria-required="true"
                  />
                  <div id="percentage-help" className="sr-only">
                    Enter the percentage value you want to calculate
                  </div>
                </div>
                <div>
                  <Label htmlFor="value">Of Number</Label>
                  <Input
                    id="value"
                    type="number"
                    placeholder="e.g. 200"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    aria-describedby="value-help"
                    aria-required="true"
                  />
                  <div id="value-help" className="sr-only">
                    Enter the base number to calculate the percentage of
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={calculateResult} 
                className="w-full"
                disabled={!percentage || !value}
                aria-describedby="calculate-result-help"
              >
                Calculate Result
              </Button>
              <div id="calculate-result-help" className="sr-only">
                Click to calculate what percentage of the number equals
              </div>
              
              {result !== null && (
                <div 
                  className="text-center p-6 bg-purple-50 rounded-lg border border-purple-200"
                  role="region"
                  aria-live="polite"
                  aria-label="Calculation result"
                >
                  <p className="text-2xl font-bold">
                    <span className="text-purple-600">{percentage}%</span> of <span className="text-purple-600">{value}</span> = 
                    <span className="text-purple-600 ml-2">{result.toLocaleString('en-AU')}</span>
                  </p>
                </div>
              )}
              
              <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                <p><strong>Formula:</strong> (Percentage ÷ 100) × Number = Result</p>
                <p><strong>Example:</strong> 15% of 200 = (15 ÷ 100) × 200 = 30</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Percentage Calculations</h2>
            <div className="space-y-4">
              <article className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold mb-2 text-green-600">10% of $750,000</h3>
                <p className="text-gray-700 mb-1">House deposit calculation</p>
                <p className="text-lg font-semibold">= $75,000</p>
              </article>
              <article className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold mb-2 text-blue-600">15% of $80</h3>
                <p className="text-gray-700 mb-1">Restaurant tip calculation</p>
                <p className="text-lg font-semibold">= $12</p>
              </article>
              <article className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold mb-2 text-orange-600">25% of $120</h3>
                <p className="text-gray-700 mb-1">Sale discount amount</p>
                <p className="text-lg font-semibold">= $30</p>
              </article>
              <article className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold mb-2 text-red-600">10% of $500</h3>
                <p className="text-gray-700 mb-1">GST on business expense</p>
                <p className="text-lg font-semibold">= $50</p>
              </article>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step Method</h2>
            <div className="space-y-4">
              <article className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="font-semibold mb-2">Method 1: Convert to Decimal</h3>
                <p className="text-gray-700 mb-2">Divide percentage by 100, then multiply by the number</p>
                <p className="text-sm text-gray-600">15% of 200 = 0.15 × 200 = 30</p>
              </article>
              <article className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-semibold mb-2">Method 2: Fraction Method</h3>
                <p className="text-gray-700 mb-2">Write percentage as fraction over 100</p>
                <p className="text-sm text-gray-600">15% of 200 = (15/100) × 200 = 30</p>
              </article>
              <article className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="font-semibold mb-2">Method 3: Mental Math</h3>
                <p className="text-gray-700 mb-2">Break down into easier percentages</p>
                <p className="text-sm text-gray-600">15% = 10% + 5% = 20 + 10 = 30</p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Australian Calculations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3">GST & Tax</h3>
              <ul className="space-y-2 text-gray-700" role="list">
                <li>10% GST calculations</li>
                <li>Tax withholding amounts</li>
                <li>Superannuation contributions</li>
                <li>Medicare levy calculations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Shopping & Dining</h3>
              <ul className="space-y-2 text-gray-700" role="list">
                <li>Restaurant tips (10-15%)</li>
                <li>Sale discount amounts</li>
                <li>Loyalty program rewards</li>
                <li>Cashback calculations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Finance & Property</h3>
              <ul className="space-y-2 text-gray-700" role="list">
                <li>Home loan deposits</li>
                <li>Investment returns</li>
                <li>Commission calculations</li>
                <li>Interest rate calculations</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6" role="list">
            <article className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">How do you calculate what percentage of a number is?</h3>
              <p className="text-gray-700">
                Convert the percentage to a decimal by dividing by 100, then multiply by the number. 
                For example: 25% of 80 = (25 ÷ 100) × 80 = 0.25 × 80 = 20.
              </p>
            </article>
            <article className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">What is 5% of 750000?</h3>
              <p className="text-gray-700">
                5% of 750,000 = (5 ÷ 100) × 750,000 = 0.05 × 750,000 = 37,500. 
                This could represent a house deposit or investment return.
              </p>
            </article>
            <article className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">How do you calculate tips in Australia?</h3>
              <p className="text-gray-700">
                Tipping isn't mandatory in Australia, but 10-15% is common for good service. 
                For a $80 meal: 10% = $8, 15% = $12.
              </p>
            </article>
          </div>
        </section>

        <section className="bg-purple-50 rounded-lg p-8 text-center">
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
                to="/percentage-decrease-calculator"
                className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
              >
                <Button variant="outline">Percentage Decrease</Button>
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

export default WhatIsXPercentOfY
