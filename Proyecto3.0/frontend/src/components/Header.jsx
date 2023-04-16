import Navbar from 'react-bootstrap/Navbar';
import React from 'react'

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark" className="mr-auto">
            <Navbar.Brand href="#home">Bienvenido</Navbar.Brand>      
        </Navbar>
    )
}
