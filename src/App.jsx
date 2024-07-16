import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import { AllProducts, Contact, DailyDeals, Footer, HeroProducts, Recommended, SignIn, SimpleSlider, Subscribe, Trending } from './sections';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Shop" element={<AllProducts />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SignIn" element={<SignIn/>} />
      </Routes>
    </Router>
  );
};

const MainPage = () => {
  return (
    <>
      <div className='bg-white'>
        <div>
          <Nav />
        </div>
        <div className='overflow-hidden'>
          <SimpleSlider />
        </div>
        <div>
          <HeroProducts />
        </div>
      </div>
      
      <div className='bg-slate-100'>
        <DailyDeals />
      </div>
      <div className='bg-white'>
        <Trending />
        <Recommended />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default App;
