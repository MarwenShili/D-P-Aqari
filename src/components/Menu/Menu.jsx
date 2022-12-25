import { Avatar } from "@mui/material";
import useWindowSize from "../../hooks/useWindowSize";
import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import { Menu, MenuItem, ListItemIcon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logout } from "../../data/slices/authSlice";

const MenuHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { width } = useWindowSize();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (width < 1090) {
    return null;
  }

  return (
    <div className="menu">
      <Avatar
        className="profile__avatar"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />

      {anchorEl && width > 1090 && (
        <Menu
          className="menu_main"
          id="basic-menu1"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          // MenuListProps={{
          //   "aria-labelledby": "basic-button",
          // }}
        >
          <MenuItem
            // className="menu_item"
            onClick={() => {
              handleClose();
              navigate("/profile");
            }}
            selected={false}
          >
            Profile
          </MenuItem>

          <MenuItem
            onClick={() => {
              handleClose();
              navigate("/library");
            }}
          >
            Favourite
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              navigate("/wallet");
            }}
          >
            History
          </MenuItem>
          <MenuItem className="logout_item" onClick={() => dispatch(logout())}>
            Logout
          </MenuItem>
        </Menu>
      )}
    </div>
  );
};

export default MenuHeader;
