import React from 'react';
import './App.css';
import Navbar from './components/Pages/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import APropos from './components/Pages/APropos';
import QuiSommesNous from './components/Pages/QuiSommesNous';
import Contact from './components/Pages/Contact';
import Home from './components/Pages/Home';
import Inspirations from './components/Pages/Inspirations';


import {
    BrowserRouter as router,
    Route,
    Link,
    Switch
} from 'react-router-dom';




function App() {
    return (
        <Navbar/>
    );
}


export default App;