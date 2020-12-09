import React, { useState } from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavBarElements';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from '../Pages/Home';
import APropos from '../Pages/APropos';
import Inspirations from '../Pages/Inspirations'
import QuiSommesNous from '../Pages/QuiSommesNous'
import Contact from '../Pages/Contact';




class Navbar extends React.Component {

    render() {

        return (

            <div>
                <Router>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/APropos/">A Propos</Link></li>
                            <li><Link to="/Inspirations/">Nos Sources d'Inspirations</Link></li>
                            <li><Link to="/QuiSommesNous/">Qui Sommes Nous</Link></li>
                            <li><Link to="/contact/">Contact</Link></li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/APropos/">
                            <APropos />
                        </Route>
                        <Route path="/Contact/">
                            <Contact />
                        </Route>


                        <Route path="/Inspirations/">
                            <Inspirations />

                        </Route>
                        <Route path="/QuiSommesNous/">
                            <QuiSommesNous />

                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>

                    </Switch>
                </Router>


            </div>



        )
    }
}

export default Navbar;



/* <Nav>
     <NavLink className='NavLink' to='/'>
         <h1>
             <i class="fas fa-hands-helping"></i> INSPIRENEWS.FR
         </h1>
     </NavLink>
     <Bars />
     <NavMenu>
         <NavLink to='/a-propos' activeStyle>
             À propos
         </NavLink>
         <NavLink to='/nos-sources-d-inspiration' activeStyle>
             Nos sources d'inspiration
         </NavLink>
         <NavLink to='/qui-sommes-nous' activeStyle>
             Qui sommes-nous ?
         </NavLink>
         <NavLink to='/contact' activeStyle>
             Contact
         </NavLink>
     </NavMenu>
     <NavBtn>
         <NavBtnLink to='connexion'>Connexion</NavBtnLink>
     </NavBtn>

 </Nav>
 <Inspirations/>*/
