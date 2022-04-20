import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Box, Container, Toolbar, Typography} from "@mui/material";
import {Image} from "@mui/icons-material";

const Header = (props) => {
    return (
        <Container fixed>
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                    <Box
                        component="img"
                        sx={{height: 32, width: 32}}
                        src="https://cdn-icons-png.flaticon.com/512/1239/1239608.png"
                    />
                </Typography>
                <Box>
                    { props.isAuth
                        ? <div>{props.login} - <button onClick={props.logout}>Выйти</button></div>
                        : <NavLink to={'/login'}>Войти</NavLink> }
                </Box>
            </Toolbar>
        </Container>
        // <header className={s.header}>
        //     <img
        //         src='https://cdn-icons-png.flaticon.com/512/1239/1239608.png'
        //         alt=''/>
        //     <div className={s.loginBlock}>
        //         { props.isAuth
        //             ? <div>{props.login} - <button onClick={props.logout}>Выйти</button></div>
        //             : <NavLink to={'/login'}>Войти</NavLink> }
        //     </div>
        // </header>
    )
}

export default Header;