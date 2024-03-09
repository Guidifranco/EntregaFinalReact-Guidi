import "./CartWidget.css";
import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const CartWidget = (total) => {
  return (
    <div>
      <Link to="/cart">
        <Badge badgeContent={total || 0} showZero color="primary">
          <BsFillCartCheckFill size="20px" color="blue" />
        </Badge>
      </Link>
    </div>
  );
};
