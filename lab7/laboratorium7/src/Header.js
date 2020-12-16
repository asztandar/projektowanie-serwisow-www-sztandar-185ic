import React from 'react'

import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import './css/Header.css'
function Header(){
    return (
        <header>
            <div className="logo">
                A
            </div>
            
            <div className="menu">
                <Link to="/"><Button variant="contained" color="primary">Home</Button></Link> 
                <Link to="/Form"><Button variant="contained" color="primary">Form</Button></Link>
                <Link to="/Gallery"><Button variant="contained" color="primary">Gallery</Button></Link>
                <Link to="/Bootstrap"><Button variant="contained" color="primary">Bootstrap</Button></Link>
            </div>
        </header>
    );
}

export default Header;