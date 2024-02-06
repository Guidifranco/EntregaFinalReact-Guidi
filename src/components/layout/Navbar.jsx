import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, Toolbar, Tooltip, Typography } from "@mui/material"
import "./Navbar.css"
import { CartWidget } from "../common/CartWidget"

export const Navbar = ()=> {
    
    return (
        <nav>
            <ul className="bulletPoint">
                <li>Home</li>
                <li>Catálogo</li>
                <li className="logo">Guidi E-commerce</li>
                <li>Contacto</li>
                <li className="cart"> <CartWidget/> </li>
            </ul>
        
        </nav>
    )
}