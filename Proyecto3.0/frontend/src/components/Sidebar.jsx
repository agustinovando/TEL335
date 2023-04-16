import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
    Link,
} from "react-router-dom";

export default function Sidebar() {
    return (
        <Navbar className="bg-light" >
            <Nav defaultActiveKey="/" className="flex-column sidebar-sticky">
                <Link to="/"><Nav.Link href="/">Inicio</Nav.Link></Link>
                <Link to="/login"><Nav.Link href="/login">Iniciar sesion</Nav.Link></Link>
                <Link to="/register"><Nav.Link href="/register">Registrarse</Nav.Link></Link>
                <Link to="/Logout"><Nav.Link href="/Logout">Logout</Nav.Link></Link>
            </Nav>
        </Navbar>
        )
}