import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import "./Navbar.css";
import { CartWidgetContainer } from "../../common/cartWidget/CartWidgetContainer";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul className="bulletPoint">
        <Link to={"/"}>Home</Link>
        <Link to={"/category/Automovilismo"}>Automovilismo</Link>
        <Link to={"/category/Futbol"}>Futbol</Link>
        <Link to={"/category/Cine"}>Cine</Link>
        <CartWidgetContainer />
      </ul>
    </nav>
  );
};
