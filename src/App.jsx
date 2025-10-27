
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import 'font-awesome/css/font-awesome.min.css';
import Footer from './components/footer.jsx'
import FeaturedCourses from './components/section1.jsx';
import HeroSection from './components/section2.jsx';
import Brand from './components/section3.jsx';
import Testimonials from './components/section4.jsx';
import Certifications from './components/section5.jsx';
import Skills from './components/section6.jsx';
import Trend from './components/section7.jsx';
import PricingSection from './components/section8.jsx';
import TrendsReportPromo from './components/section9.jsx';
import PopularSkillsAndPromo from './components/section10.jsx';


function App() {
  return (
       <div className="overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <FeaturedCourses />
      <HeroSection />
      <Brand />
      <Testimonials />
      <Certifications/>
      <Skills/>
      <Trend/>
      <PricingSection/>
      <TrendsReportPromo/>
      <PopularSkillsAndPromo/> 
      <Footer />
    </div>
  )
}

export default App
