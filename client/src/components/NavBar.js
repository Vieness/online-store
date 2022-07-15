import React, {useContext} from 'react';
import {Context} from "../index";

import {AppBar, Box, Button, Container, IconButton, Toolbar, Typography,} from "@mui/material";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/constants";
import "./styles.scss";
import {useNavigate} from "react-router-dom";

const NavBar = () => {
  const {user} = useContext(Context)
  const navigate = useNavigate()
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{mr: 2}}
            >
            </IconButton>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              <NavLink className={'nav-bar-link'} to={SHOP_ROUTE}> APP </NavLink>
            </Typography>
            {user.isAuth
              ? <div>
                <Button onClick={()=>navigate(LOGIN_ROUTE)} sx={{m: 1}} variant={'outlined'} color="inherit">LogOut</Button>
                <Button onClick={()=>navigate(ADMIN_ROUTE)} variant={'outlined'} color="inherit">Admin Panel</Button>
              </div>
              : <Button variant={'outlined'} color="inherit" onClick={() => user.setIsAuth(true)}>LogIn</Button>
            }
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default NavBar;