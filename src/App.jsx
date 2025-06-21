import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import PopularItems from './components/PopularItems';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app-container">
      <Header />
      <Hero />
      <PopularItems/>
      <Footer /> 
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
