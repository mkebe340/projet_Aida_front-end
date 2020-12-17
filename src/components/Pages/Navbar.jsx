import React from 'react';
import '../style/Navbar.css'
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
import Footer from '../Pages/footer'



class Navbar extends React.Component {

    render() {

        return (
            <div>
                <Router>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to='/'> <div className='tag'>
                            <i className="fas fa-hands-helping"></i>
                            <div className='NavLink'>
                                <h1> INSPIRENEWS.FR</h1>
                            </div>
                        </div></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link active" to='/'>Home <span className="sr-only">(current)</span></Link>
                                <Link className="nav-link" to="/APropos">A propos</Link>
                                <Link className="nav-link" to="/Inspirations">Nos sources d'inspiration</Link>
                                <Link className="nav-link" to="/QuiSommesNous" > Qui sommes-nous ?</Link>
                                <Link className="nav-link" to="/Contact" > Contact</Link>

                            </div>

                        </div>

                    </nav>
                    <Switch>
                        <Route path="/APropos/">
                            <APropos />
                        </Route>

                        <Route path="/Inspirations/">
                            <Inspirations />
                        </Route>

                        <Route path="/QuiSommesNous/">
                            <QuiSommesNous />
                        </Route>

                        <Route path="/Contact/">
                            <Contact />
                        </Route>

                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>


            </div>
        )
    }
}
export default Navbar;
{/* ANCIEN NAV <div className="">
                <Router>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid ">
                            <Link className="navbar-brand" to='/'>
                                <div className='tag'>
                                    <i className="fas fa-hands-helping"></i>
                                    <div className='NavLink'>
                                        <h1> INSPIRENEWS.FR</h1>
                                    </div>
                                </div>
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className=" " id="navbarNavAltMarkup">
                                <div className="navbar-nav  ">
                                    <Link className="nav-link active" aria-current="page" to='/'>
                                        Home
                                </Link>
                                    <Link className="nav-link" to='/APropos'>
                                        À propos
                                </Link>

                                    <Link className="nav-link" to='/Inspirations'>
                                        Nos sources d'inspiration
                                </Link>
                                    <Link className="nav-link" to='/QuiSommesNous'>
                                        Qui sommes-nous ?
                                </Link>

                                    <Link className="nav-link" to='/Contact'>
                                        Contact
                                </Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <Switch>
                        <Route path="/APropos/">
                            <APropos />
                        </Route>
                        
                        <Route path="/Inspirations/">
                            <Inspirations />
                        </Route>

                        <Route path="/QuiSommesNous/">
                            <QuiSommesNous />
                        </Route>

                        <Route path="/Contact/">
                            <Contact />
                        </Route>
                        
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
        </div>*/}

{/*  <div>
                <Router>
                    <Nav>
                        <NavLink to='/'>
                            <div className='tag'>
                                <i className="fas fa-hands-helping"></i>
                                <div className='NavLink'>
                                    <h1> INSPIRENEWS.FR</h1>
                                </div>
                            </div>
                        </NavLink>

                        <Bars />
                        <NavMenu>
                            <NavLink to='/'>
                                Home
                                </NavLink>
                            <NavLink to='/APropos'>
                                À propos
                                </NavLink>
                            
                            <NavLink to='/Inspirations'>
                                Nos sources d'inspiration
                                </NavLink>
                            <NavLink to='/QuiSommesNous'>
                                Qui sommes-nous ?
                                </NavLink>

                            <NavLink to='/Contact'>
                                Contact
                                </NavLink>
                        </NavMenu>
                    </Nav>

                    <Switch>
                        <Route path="/APropos/">
                            <APropos />
                        </Route>
                        
                        <Route path="/Inspirations/">
                            <Inspirations />
                        </Route>

                        <Route path="/QuiSommesNous/">
                            <QuiSommesNous />
                        </Route>

                        <Route path="/Contact/">
                            <Contact />
                        </Route>
                        
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>

                </Router>


          </div>*/}

































/*
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/APropos/">A Propos</Link></li>
                            <li><Link to="/Inspirations/">Nos Sources d'Inspirations</Link></li>
                            <li><Link to="/QuiSommesNous/">Qui Sommes Nous</Link></li>
                            <li><Link to="/contact/">Contact</Link></li>
                        </ul>


<Nav>
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
 */
