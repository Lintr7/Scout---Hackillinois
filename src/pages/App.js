import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Homepage from './Homepage';

function App() {
  return (
    <Router>
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </main>
    </Router>
  );
}

export default App;