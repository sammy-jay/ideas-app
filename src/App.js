import './App.css';
import About from './container/About/About';
import Contact from './container/Contact/Contact';
import CTA from './container/CTA/CTA';
import Footer from './container/Footer/Footer';
import Hero from './container/Hero/Hero';
import IPChoices from './container/IPChoices/IPChoices';
import Services from './container/Services/Services';

function App() {
  return (
    <div className="app">
      <Hero/>
      <About/>
      <IPChoices/>
      <Services/>
      <Contact/>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default App;
