import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { BarChart3 } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const PercentageDifferenceCalculator = () => {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [result, setResult] = useState<{
    difference: number
    percentage: number
  } | null>(null)

  const calculateDifference = () => {
    const val1 = parseFloat(value1)
    const val2 = parseFloat(value2)
    
    if (!isNaN(val1) && !isNaN(val2)) {
      const difference = Math.abs(val2 - val1)
      const average = (val1 + val2) / 2
      const percentage = average !== 0 ? (difference / average) * 100 : 0
      setResult({ difference, percentage })
    }
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Percentage Difference Calculator Australia",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "url": "https://percentagecalculator.com.au/percentage-difference-calculator",
    "description": "Calculate percentage difference between two values. Compare salaries, prices, scores and more with our free Australian calculator.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "63"
    }
  }

  return (
    <>
      <Helmet>
        <title>Percentage Difference Calculator | Compare Two Values</title>
        <meta name="description" content="Calculate percentage difference between two values. Compare salaries, prices, scores and more with our free Australian calculator." />
        <meta name="keywords" content="percentage difference calculator, compare values, percent difference, percentage comparison" />
        <link rel="canonical" href="https://percentagecalculator.com.au/percentage-difference-calculator" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <BarChart3 className="h-8 w-8 text-blue-600" />
            Percentage Difference Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate the percentage difference between two values. Perfect for comparing salaries, 
            prices, scores, and measurements with Australian examples.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Calculate Percentage Difference</CardTitle>
              <CardDescription>
                Enter two values to find the percentage difference between them
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="value1">First Value</Label>
                  <Input
                    id="value1"
                    type="number"
                    placeholder="e.g. 80000"
                    value={value1}
                    onChange={(e) => setValue1(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="value2">Second Value</Label>
                  <Input
                    id="value2"
                    type="number"
                    placeholder="e.g. 90000"
                    value={value2}
                    onChange={(e) => setValue2(e.target.value)}
                  />
                </div>
              </div>
              
              <Button onClick={calculateDifference} className="w-full">
                Calculate Percentage Difference
              </Button>
              
              {result !== null && (
                <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="space-y-2">
                    <p className="text-lg">
                      <strong>Absolute Difference:</strong> <span className="text-blue-600">{result.difference.toLocaleString('en-AU')}</span>
                    </p>
                    <p className="text-xl font-bold">
                      <strong>Percentage Difference:</strong> <span className="text-blue-600">{result.percentage.toFixed(2)}%</span>
                    </p>
                  </div>
                </div>
              )}
              
              <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                <p><strong>Formula:</strong> |Value1 - Value2| ÷ ((Value1 + Value2) ÷ 2) × 100</p>
                <p><strong>Example:</strong> Difference between 80,000 and 90,000 = |80,000 - 90,000| ÷ 85,000 × 100 = 11.76%</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Calculate Percentage Difference</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold mb-2">Step 1: Find Absolute Difference</h3>
                <p className="text-gray-700">Subtract the smaller value from the larger value.</p>
                <p className="text-sm text-gray-600 mt-1">|Value1 - Value2| = Absolute Difference</p>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold mb-2">Step 2: Calculate Average</h3>
                <p className="text-gray-700">Add both values and divide by 2 to get the average.</p>
                <p className="text-sm text-gray-600 mt-1">(Value1 + Value2) ÷ 2 = Average</p>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold mb-2">Step 3: Calculate Percentage</h3>
                <p className="text-gray-700">Divide the difference by the average and multiply by 100.</p>
                <p className="text-sm text-gray-600 mt-1">(Difference ÷ Average) × 100 = Percentage</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Australian Examples</h2>
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="font-semibold mb-2 text-green-800">Salary Comparison</h3>
                <p className="text-gray-700 mb-2">Comparing salaries of $75,000 and $85,000</p>
                <p className="text-sm text-gray-600">
                  Calculation: |75,000 - 85,000| ÷ 80,000 × 100 = <strong>12.5% difference</strong>
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="font-semibold mb-2 text-purple-800">House Prices</h3>
                <p className="text-gray-700 mb-2">Comparing houses at $650,000 and $750,000</p>
                <p className="text-sm text-gray-600">
                  Calculation: |650,000 - 750,000| ÷ 700,000 × 100 = <strong>14.3% difference</strong>
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h3 className="font-semibold mb-2 text-orange-800">Test Scores</h3>
                <p className="text-gray-700 mb-2">Comparing test scores of 85 and 92</p>
                <p className="text-sm text-gray-600">
                  Calculation: |85 - 92| ÷ 88.5 × 100 = <strong>7.9% difference</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">When to Use Percentage Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Comparisons</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Comparing two similar values</li>
                <li>• Salary negotiations</li>
                <li>• Product price comparisons</li>
                <li>• Performance metrics</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Analysis</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Market research data</li>
                <li>• Scientific measurements</li>
                <li>• Quality control testing</li>
                <li>• Statistical analysis</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">What is percentage difference?</h3>
              <p className="text-gray-700">
                Percentage difference shows how much two values differ relative to their average. 
                It's useful when comparing two similar values without considering which is the reference point.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">How is percentage difference different from percentage change?</h3>
              <p className="text-gray-700">
                Percentage difference compares two values using their average as the base, while percentage change 
                uses one specific value as the reference point (usually the original value).
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">Can percentage difference be negative?</h3>
              <p className="text-gray-700">
                No, percentage difference is always positive because it uses the absolute difference between values. 
                The order of the values doesn't matter in the calculation.
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
            <Link to="/percentage-increase-calculator">
              <Button variant="outline">Percentage Increase</Button>
            </Link>
            <Link to="/percentage-decrease-calculator">
              <Button variant="outline">Percentage Decrease</Button>
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

export default PercentageDifferenceCalculator
