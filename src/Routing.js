import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Health from './pages/Health';
import Header from './components/Header';
import About from './pages/About';
import Grants from './pages/Grants';
import Science from './pages/Science';

const Routing = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="health" element={<Health/>} />
        <Route path="science" element={<Science/>} />
        <Route path="grants-and-trainings" element={<Grants/>} />
        <Route path="news-and-events" element={<News/>} />
        <Route path="about-healthbeat" element={<About/>} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  );
};





export default Routing;