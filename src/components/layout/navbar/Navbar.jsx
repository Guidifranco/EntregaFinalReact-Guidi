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
    <nav >
      <ul className="bulletPoint">
        <Link to={"/"}><li>Home</li></Link>
        <Link to={"/category/Automovilismo"}><li>Automovilismo</li></Link>
        <Link to={"/category/Futbol"}><li>Futbol</li></Link>
        <Link to={"/category/Cine"}><li>Cine</li></Link>
        <Link to={"/cart"}><li >
          {" "}<CartWidgetContainer />{" "}
        </li></Link>
      </ul>
    </nav>
  );
};
