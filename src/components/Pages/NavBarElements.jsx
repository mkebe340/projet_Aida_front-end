import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'



export const Nav = styled.nav` // RECTANGLE
    background: #faf9f9e3;
    height: 65px;
    display: flex;
    justify-content: space-between;
    padding:25px;
    z-index: 10;
`

export const NavLink = styled(Link)`
    color: #707070e3;
    display: flex;
    align-item: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color : #353535f1;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #707070e3;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -25px;

    @media screen and (max-midth: 768px) {
        display: none
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    
    

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 5px;
    background: #707070e3;
    padding: 10px 22px;
    color: #fff;
    border: none; 
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #353535f1;
        color : #fff;
    }

`


