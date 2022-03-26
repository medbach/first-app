import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Menu = () => {
    return (
        <div>
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <div className='nav-item'>
                    <NavLink to ="/" exact className="nav-link">Home</NavLink>
                </div>
                <div className='nav-item'>
                    <NavLink to ="/jsx" exact className="nav-link">JSX</NavLink>
                </div>
                <Nav.Item>
                    <NavLink to="/profil" exact className="nav-link">Mon Profil</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/profil-prop" exact className="nav-link">Mon Profil Props</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                    Disabled
                    </Nav.Link>
                </Nav.Item>
                </Nav>
        </div>
    );
};

export default Menu;