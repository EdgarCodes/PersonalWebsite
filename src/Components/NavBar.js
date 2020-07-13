import React, { useState, useRef} from 'react';
import {NavLink} from "react-router-dom";

//Import logo
import Logo from "../Images/Basic_Logo.png";

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
            <div className= "Navbar-logo">
                <img src = {Logo} alt= "Edgar Gonzalez"/>
            </div>
            <div className = "Navbar-sidebar"
            onClick = {toggleIsOpen}
            ><i className="fas fa-bars Navbar-menubtn"/></div>
            <nav className = "Navbar-nav">
                <NavLink exact to="/" activeClassName = "active-navLink">
                <i className="fas fa-home Navbar-icons"/>
                </NavLink>
                <NavLink to= "/blog" className= "Navbar-item" 
                activeClassName = "active-navLink">Blog</NavLink>

                <NavLink to= "/projects" className= "Navbar-item"
                activeClassName = "active-navLink">Projects</NavLink>

                <NavLink to= "/resume" className= "Navbar-item"
                activeClassName = "active-navLink">Resume</NavLink>
            </nav>

            <div className = "Navbar-side" ref={sideBar}>
                <nav className = {`Navbar-Open-nav ${getIsOpen()}`}>
                    <NavLink exact to="/"
                    activeClassName = "active-navLink"
                    onClick = {toggleIsOpen}>
                    <i className="fas fa-home Navbar-icons"/>
                    </NavLink>

                    <NavLink to= "/blog" 
                    className= "Navbar-item" 
                    onClick = {toggleIsOpen}
                    activeClassName = "active-navLink">
                    Blog</NavLink>

                    <NavLink to= "/projects" 
                    className= "Navbar-item" 
                    onClick = {toggleIsOpen}
                    activeClassName = "active-navLink">
                    Projects</NavLink>

                    <NavLink to= "/resume" 
                    className= "Navbar-item" 
                    activeClassName = "active-navLink"
                    onClick = {toggleIsOpen}>
                    Resume</NavLink>
                </nav>
            </div>
        </div>
    )
}
