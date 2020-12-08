import React from 'react';
import './App.css';
import Navbar from './components/Pages/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';

import './App.css';




function App() {
    return (
      <>
        <Router>
          <Navbar />
        </Router>
      </>
    );
  }


export default App;
