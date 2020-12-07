import React, {useState} from 'react';
import { Link } from 'react-router-dom';



function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo"></Link>
                    INSPIRE. <i class="fas fa-hands-helping"></i>
                </div>
            </nav>
        </>
    )
}

export default Navbar
