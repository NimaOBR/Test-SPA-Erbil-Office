import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Departments from './components/Departments';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import About from './pages/About';
import Units from './pages/Units';
import AcademicActivities from './pages/AcademicActivities';
import Contact from './pages/Contact';
import DepartmentDetail from './pages/DepartmentDetail';
import SEO from './components/SEO';
import Activities from './pages/Activities';

const Placeholder = ({ title }) => (
  <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
    <h1 className="text-4xl font-bold mb-6">{title}</h1>
    <p className="text-gray-600">This page is under construction.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans">
        <Navbar />

        <Routes>
          <Route path="/" element={
            <>
              <SEO
                title="Home"
                description="Paitaxt Technical Institute - Official private technical institute in Erbil offering Pharmacy, Nursing, Computer Networking, Accounting and more."
                keywords="Paitaxt Technical Institute, Erbil, Kurdistan, Pharmacy, Nursing, Computer Networking"
              />
              <Hero />
              <FAQ />
              <Stats />
              <Departments />
            </>
          } />

          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:id" element={<DepartmentDetail />} />
          <Route path="/units" element={<Units />} />
          <Route path="/activities/academic" element={<AcademicActivities />} />
          <Route path="/activities/student" element={<Placeholder title="Student Activities" />} />
          <Route path="/activities/events" element={<Placeholder title="Events" />} />
          <Route path="/activities" element={<Activities  />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;