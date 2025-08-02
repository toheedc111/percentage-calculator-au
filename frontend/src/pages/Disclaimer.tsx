import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer | Percentage Calculator Australia</title>
        <meta name="description" content="Disclaimer for Percentage Calculator Australia. Important information about using our free online percentage calculators." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://percentagecalculator.com.au/disclaimer" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Disclaimer</h1>
          <p className="text-xl text-gray-600">
            Last updated: August 2, 2025
          </p>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">General Information</h2>
          <p className="mb-6">
            The information provided by Percentage Calculator Australia is for general informational and educational purposes only. While we strive to provide accurate calculations and information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the calculators or information contained on this website.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Calculator Accuracy</h2>
          <p className="mb-6">
            Our percentage calculators are designed to provide accurate results based on standard mathematical formulas. However:
          </p>
          
          <ul className="list-disc pl-6 mb-6">
            <li>Results should be verified for critical calculations</li>
            <li>We recommend double-checking important financial or business calculations</li>
            <li>Rounding may affect precision in some calculations</li>
            <li>Complex scenarios may require professional consultation</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Financial and Tax Advice</h2>
          <p className="mb-6">
            This website does not provide financial, tax, legal, or professional advice. The calculators and information provided are tools for general calculation purposes only. For specific financial, tax, or legal matters:
          </p>
          
          <ul className="list-disc pl-6 mb-6">
            <li>Consult with qualified professionals</li>
            <li>Verify GST calculations with the Australian Taxation Office (ATO)</li>
            <li>Seek professional advice for business or investment decisions</li>
            <li>Check current tax rates and regulations independently</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Australian Context</h2>
          <p className="mb-6">
            While our calculators and examples are tailored for Australian users, including GST calculations and AUD currency formatting:
          </p>
          
          <ul className="list-disc pl-6 mb-6">
            <li>Tax rates and regulations may change</li>
            <li>Individual circumstances may vary</li>
            <li>Professional advice should be sought for complex situations</li>
            <li>Always verify current rates with official sources</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
          <p className="mb-6">
            In no event shall Percentage Calculator Australia be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your use of this website or the calculators provided, including but not limited to:
          </p>
          
          <ul className="list-disc pl-6 mb-6">
            <li>Financial losses from calculation errors</li>
            <li>Business decisions based on calculator results</li>
            <li>Tax or compliance issues</li>
            <li>Any other damages or losses</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">External Links</h2>
          <p className="mb-6">
            Our website may contain links to external websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Use at Your Own Risk</h2>
          <p className="mb-6">
            Your use of this website and its calculators is at your own risk. We recommend:
          </p>
          
          <ul className="list-disc pl-6 mb-6">
            <li>Verifying important calculations independently</li>
            <li>Consulting professionals for critical decisions</li>
            <li>Using multiple sources for verification</li>
            <li>Understanding the limitations of online calculators</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Disclaimer</h2>
          <p className="mb-6">
            We reserve the right to modify this disclaimer at any time. Changes will be posted on this page with an updated revision date.
          </p>

          <div className="bg-orange-50 rounded-lg p-6 text-center mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Use Our Calculators Responsibly</h3>
            <p className="text-gray-600 mb-4">
              Our tools are designed to help with everyday calculations. For important decisions, always verify results.
            </p>
            <Link to="/">
              <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                Start Calculating
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Disclaimer
