import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <section id="home" className="relative">
            <Hero />
          </section>
          
          <section id="services" className="py-20">
            <Services />
          </section>
          
          <section id="about" className="py-20 bg-gray-50">
            <About />
          </section>
          
          <section id="team" className="py-20 bg-gray-50">
            <Team />
          </section>
          
          <section id="reviews" className="py-20">
            <Reviews />
          </section>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
