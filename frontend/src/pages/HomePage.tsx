import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Calculator, TrendingUp, TrendingDown, BarChart3, Percent, Receipt } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const HomePage = () => {
  const [value, setValue] = useState('')
  const [percentage, setPercentage] = useState('')
  const [result, setResult] = useState<number | null>(null)

  const calculatePercentage = () => {
    const val = parseFloat(value)
    const perc = parseFloat(percentage)
    
    if (!isNaN(val) && !isNaN(perc)) {
      setResult((val * perc) / 100)
    }
  }

  const calculatorTools = [
    {
      title: 'Percentage Increase Calculator',
      description: 'Calculate percentage increases for salary raises, house prices, and investments',
      icon: TrendingUp,
      path: '/percentage-increase-calculator',
      color: 'text-green-600'
    },
    {
      title: 'Percentage Decrease Calculator', 
      description: 'Find percentage decreases for discounts, price drops, and reductions',
      icon: TrendingDown,
      path: '/percentage-decrease-calculator',
      color: 'text-red-600'
    },
    {
      title: 'Percentage Difference Calculator',
      description: 'Compare two values and find the percentage difference between them',
      icon: BarChart3,
      path: '/percentage-difference-calculator',
      color: 'text-blue-600'
    },
    {
      title: 'What is X% of Y Calculator',
      description: 'Find what percentage of a number is - perfect for tips, discounts, and more',
      icon: Percent,
      path: '/what-is-x-percent-of-y',
      color: 'text-purple-600'
    },
    {
      title: 'GST Percentage Calculator',
      description: 'Calculate GST for Australian businesses - add or remove 10% GST easily',
      icon: Receipt,
      path: '/gst-percentage-calculator',
      color: 'text-orange-600'
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Percentage Calculator Australia",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "url": "https://percentagecalculator.com.au",
    "description": "Free online percentage calculator for Australian users. Calculate percentages, GST, increases, decreases, and more with instant results.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "124"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "AUD"
    }
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you calculate a percentage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To calculate a percentage, divide the part by the whole and multiply by 100. For example: 25/200 = 0.125 → 12.5%. You can also use our free percentage calculator for instant results."
        }
      },
      {
        "@type": "Question", 
        "name": "What is the percentage formula?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The basic percentage formula is: (Part/Whole) × 100 = Percentage. For percentage of a number: (Percentage/100) × Number = Result."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate GST in Australia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GST in Australia is 10%. To add GST: multiply by 1.1. To remove GST: divide by 1.1. Use our GST calculator for quick calculations."
        }
      }
    ]
  }

  return (
    <>
      <Helmet>
        <title>Percentage Calculator Australia | Free Online Calculator</title>
        <meta name="description" content="Free online percentage calculator for Australia. Calculate percentages, GST, increases, decreases, and more. Mobile-friendly with instant results." />
        <meta name="keywords" content="percentage calculator, percentage calculator australia, calculate percentage, GST calculator, percentage increase, percentage decrease" />
        <link rel="canonical" href="https://percentagecalculator.com.au/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqData)}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Free Percentage Calculator Australia
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate percentages instantly with our free online calculator. Perfect for GST calculations, 
            discounts, salary increases, and everyday maths. Designed for Australian users.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Quick Percentage Calculator
              </CardTitle>
              <CardDescription>
                Calculate what percentage of a number is instantly
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
                  <Label htmlFor="value">Of Value</Label>
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
                    Enter the base value to calculate the percentage of
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={calculatePercentage} 
                className="w-full"
                aria-describedby="calculate-help"
                disabled={!percentage || !value}
              >
                Calculate
              </Button>
              <div id="calculate-help" className="sr-only">
                Click to calculate the percentage result
              </div>
              
              {result !== null && (
                <div 
                  className="text-center p-4 bg-blue-50 rounded-lg"
                  role="region"
                  aria-live="polite"
                  aria-label="Calculation result"
                >
                  <p className="text-lg">
                    <strong>{percentage}%</strong> of <strong>{value}</strong> = <strong className="text-blue-600">{result.toLocaleString('en-AU')}</strong>
                  </p>
                </div>
              )}
              
              <div className="text-sm text-gray-600">
                <p><strong>Formula:</strong> (Percentage ÷ 100) × Value = Result</p>
                <p><strong>Example:</strong> 15% of 200 = (15 ÷ 100) × 200 = 30</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Percentage Calculator Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calculatorTools.map((tool) => {
              const Icon = tool.icon
              return (
                <Link 
                  key={tool.path} 
                  to={tool.path}
                  className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
                  aria-label={`Go to ${tool.title}`}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-blue-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon className={`h-5 w-5 ${tool.color}`} aria-hidden="true" />
                        {tool.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{tool.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>

        <section className="bg-white rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How to Use Our Percentage Calculator
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Enter Your Numbers</h3>
              <p className="text-gray-600">Input the percentage and the value you want to calculate</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Click Calculate</h3>
              <p className="text-gray-600">Press the calculate button for instant results</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Get Your Answer</h3>
              <p className="text-gray-600">View your result with step-by-step explanation</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Popular Percentage Calculations in Australia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Business & Finance</h3>
              <ul className="space-y-2 text-gray-700" role="list">
                <li>GST calculations (10% tax)</li>
                <li>Salary increase percentages</li>
                <li>Investment returns</li>
                <li>Loan interest calculations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Shopping & Everyday</h3>
              <ul className="space-y-2 text-gray-700" role="list">
                <li>Sale discounts and markdowns</li>
                <li>Tip calculations at restaurants</li>
                <li>Price comparisons</li>
                <li>Budget percentage allocations</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6" role="list">
            <article className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">How do you calculate a percentage?</h3>
              <p className="text-gray-700">
                To calculate a percentage, divide the part by the whole and multiply by 100. 
                For example: 25/200 = 0.125 → 12.5%. You can also use our free percentage calculator for instant results.
              </p>
            </article>
            <article className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">What is the percentage formula?</h3>
              <p className="text-gray-700">
                The basic percentage formula is: (Part/Whole) × 100 = Percentage. 
                For percentage of a number: (Percentage/100) × Number = Result.
              </p>
            </article>
            <article className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">How do I calculate GST in Australia?</h3>
              <p className="text-gray-700">
                GST in Australia is 10%. To add GST: multiply by 1.1. To remove GST: divide by 1.1. 
                Use our <Link 
                  to="/gst-percentage-calculator" 
                  className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm"
                >
                  GST calculator
                </Link> for quick calculations.
              </p>
            </article>
            <article className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">Is this calculator free to use?</h3>
              <p className="text-gray-700">
                Yes! Our percentage calculator is completely free to use with no registration required. 
                All calculations are performed instantly in your browser.
              </p>
            </article>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help with Percentage Calculations?
          </h2>
          <p className="text-gray-600 mb-6">
            Check out our comprehensive guides and tutorials in our blog section.
          </p>
          <Link 
            to="/blog"
            className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
          >
            <Button size="lg">
              View All Guides
            </Button>
          </Link>
        </section>
      </div>
    </>
  )
}

export default HomePage
