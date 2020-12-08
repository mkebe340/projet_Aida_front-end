import React, { useState } from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavBarElements';



function Navbar() {




    return (
        <>
            <Nav>
                <NavLink className='NavLink' to='/'>
                    <h1>
                        <i class="fas fa-hands-helping"></i> INSPIRE.FR
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

        </>
    )
}

export default Navbar
