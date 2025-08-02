import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Percentage Calculator Australia</title>
        <meta name="description" content="Privacy Policy for Percentage Calculator Australia. Learn how we protect your data and privacy when using our free online calculators." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://percentagecalculator.com.au/privacy" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            Last updated: August 2, 2025
          </p>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
          <p className="mb-6">
            Percentage Calculator Australia is committed to protecting your privacy. We collect minimal information to provide our calculator services:
          </p>
          
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Usage Data:</strong> We may collect anonymous usage statistics to improve our calculators</li>
            <li><strong>Technical Data:</strong> Browser type, device information, and IP address for security purposes</li>
            <li><strong>Calculator Inputs:</strong> We do not store or save any numbers you enter into our calculators</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Information</h2>
          <p className="mb-6">
            Any information collected is used solely to:
          </p>
          
          <ul className="list-disc pl-6 mb-6">
            <li>Provide and improve our calculator services</li>
            <li>Ensure website security and prevent abuse</li>
            <li>Analyze usage patterns to enhance user experience</li>
            <li>Comply with legal obligations under Australian law</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Storage and Security</h2>
          <p className="mb-6">
            We implement appropriate security measures to protect your information:
          </p>
          
          <ul className="list-disc pl-6 mb-6">
            <li>All data transmission is encrypted using SSL/TLS</li>
            <li>We do not store personal calculation data</li>
            <li>Access to any collected data is strictly limited</li>
            <li>We comply with Australian Privacy Principles (APPs)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
          <p className="mb-6">
            Our website may use cookies for:
          </p>
          
          <ul className="list-disc pl-6 mb-6">
            <li>Essential website functionality</li>
            <li>Anonymous analytics (if implemented)</li>
            <li>Remembering your preferences</li>
          </ul>
          
          <p className="mb-6">
            You can disable cookies in your browser settings, though this may affect website functionality.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
          <p className="mb-6">
            We may use third-party services for analytics or hosting. These services have their own privacy policies and we encourage you to review them.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
          <p className="mb-6">
            Under Australian privacy law, you have the right to:
          </p>
          
          <ul className="list-disc pl-6 mb-6">
            <li>Access any personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Lodge a complaint with the Australian Privacy Commissioner</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="mb-6">
            If you have questions about this Privacy Policy or our data practices, please contact us through our website.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
          </p>

          <div className="bg-blue-50 rounded-lg p-6 text-center mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Calculate?</h3>
            <p className="text-gray-600 mb-4">
              Use our free percentage calculators with confidence.
            </p>
            <Link to="/">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Start Calculating
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy
