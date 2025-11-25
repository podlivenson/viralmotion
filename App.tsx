import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Team from './pages/Team';
import Strategy from './pages/Strategy';
import Production from './pages/Production';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/production" element={<Production />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;