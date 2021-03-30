import React from 'react';
import Logo from '../assets/images/logo.png';
import { Button } from '../Button';
import './styles.css';

import { Link } from 'react-router-dom';

function Menu() {
    return(
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} alt="" />
            </Link>
        
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Video
            </Button>
        
        </nav>  
    );
}

export default Menu;