import React, { useState, useRef, useEffect} from 'react';
import {NavLink} from "react-router-dom";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(null);
    const sideBar = useRef(null);

    const toggleIsOpen = () =>{
        if(isOpen != null){setIsOpen(!isOpen);}
        else{setIsOpen(true)}
    }

    const getIsOpen = () =>{
        if(isOpen === null)
        {
            return "Navbar-close";
        }
        else if(isOpen === true)
        {
            return "Navbar-Open-active";
        }

        return "Navbar-Open-close";
    }

    return (
        <div className = "Navbar">
            <div className= "Navbar-logo">Edgar Gonzalez</div>
            <div className = "Navbar-sidebar"
            onClick = {toggleIsOpen}
            ><i className="fas fa-bars Navbar-menubtn"/></div>
            <nav className = "Navbar-nav">
                <NavLink to="/" activeClassName= "selected">
                <i className="fas fa-home Navbar-icons"/>
                </NavLink>
                <NavLink to= "/projects" className= "Navbar-item">Blog</NavLink>
                <NavLink to= "/projects" className= "Navbar-item">Projects</NavLink>
                <NavLink to= "/projects" className= "Navbar-item">Resume</NavLink>
            </nav>

            <div className = "Navbar-side" ref={sideBar}>
                <nav className = {`Navbar-Open-nav ${getIsOpen()}`}>
                    <NavLink to="/" activeClassName= "selected" onClick = {toggleIsOpen}>
                    <i className="fas fa-home Navbar-icons"/>
                    </NavLink>
                    <NavLink to= "/projects" className= "Navbar-item" onClick = {toggleIsOpen}>Blog</NavLink>
                    <NavLink to= "/projects" className= "Navbar-item" onClick = {toggleIsOpen}>Projects</NavLink>
                    <NavLink to= "/projects" className= "Navbar-item" onClick = {toggleIsOpen}>Resume</NavLink>
                </nav>
            </div>
        </div>
    )
}
