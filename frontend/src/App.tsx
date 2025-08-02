import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import PercentageIncreaseCalculator from './pages/PercentageIncreaseCalculator'
import PercentageDecreaseCalculator from './pages/PercentageDecreaseCalculator'
import PercentageDifferenceCalculator from './pages/PercentageDifferenceCalculator'
import WhatIsXPercentOfY from './pages/WhatIsXPercentOfY'
import GSTCalculator from './pages/GSTCalculator'
import BlogHome from './pages/blog/BlogHome'
import HowToCalculatePercentageIncrease from './pages/blog/HowToCalculatePercentageIncrease'
import HowToCalculatePercentageDecrease from './pages/blog/HowToCalculatePercentageDecrease'
import WhatIsPercentageDifference from './pages/blog/WhatIsPercentageDifference'
import WhatIs5PercentOf750000 from './pages/blog/WhatIs5PercentOf750000'
import GSTInAustraliaExplained from './pages/blog/GSTInAustraliaExplained'
import PercentageTipsForSavings from './pages/blog/PercentageTipsForSavings'
import RealLifePercentageExamples from './pages/blog/RealLifePercentageExamples'
import CalculatorVsManual from './pages/blog/CalculatorVsManual'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Disclaimer from './pages/Disclaimer'
import './App.css'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/percentage-increase-calculator" element={<PercentageIncreaseCalculator />} />
            <Route path="/percentage-decrease-calculator" element={<PercentageDecreaseCalculator />} />
            <Route path="/percentage-difference-calculator" element={<PercentageDifferenceCalculator />} />
            <Route path="/what-is-x-percent-of-y" element={<WhatIsXPercentOfY />} />
            <Route path="/gst-percentage-calculator" element={<GSTCalculator />} />
            <Route path="/blog" element={<BlogHome />} />
            <Route path="/blog/how-to-calculate-percentage-increase" element={<HowToCalculatePercentageIncrease />} />
            <Route path="/blog/how-to-calculate-percentage-decrease" element={<HowToCalculatePercentageDecrease />} />
            <Route path="/blog/what-is-percentage-difference" element={<WhatIsPercentageDifference />} />
            <Route path="/blog/what-is-5-percent-of-750000" element={<WhatIs5PercentOf750000 />} />
            <Route path="/blog/gst-in-australia-explained" element={<GSTInAustraliaExplained />} />
            <Route path="/blog/percentage-tips-for-savings" element={<PercentageTipsForSavings />} />
            <Route path="/blog/percentage-in-real-life-examples" element={<RealLifePercentageExamples />} />
            <Route path="/blog/percentage-calculator-vs-manual" element={<CalculatorVsManual />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  )
}

export default App
