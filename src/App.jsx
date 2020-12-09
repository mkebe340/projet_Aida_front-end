import React from 'react';
import './App.css';
import Navbar from './components/Pages/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';





function App() {
    return ( 
        <div >
        <Router >
        <Navbar/>
        </Router>  

        </div>
    );
}


export default App;