import React from 'react'
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import StockChart from './components/StockChart';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <StockChart />
      <Footer />
    </div>
  )
}

export default App
