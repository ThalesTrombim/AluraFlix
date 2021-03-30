import React from 'react';
import Logo from '../assets/images/logo.png';
import { Button } from '../Button';
import './styles.css';

function Menu() {
    return(
        <nav className="Menu">
            <img src={Logo} alt=""/>
        
            <Button as="a" className="ButtonLink">
                Novo Video
            </Button>
        
        </nav>  
    );
}

export default Menu;