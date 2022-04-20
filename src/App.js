import React from "react";
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import AppBar from "@mui/material/AppBar";
import {Container, Drawer} from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized)
            return <Preloader/>

        return (
            <Box sx={{display: 'flex', maxWidth: '100%'}}>
                <AppBar position="fixed"
                        sx={{zIndex: (theme) => theme.zIndex.drawer + 1, color: 'black', backgroundColor: 'gold'}}>
                    <HeaderContainer/>
                </AppBar>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: '15%',
                        minWidth: 140,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: {
                            width: '15%', minWidth: 140, boxSizing: 'border-box', backgroundColor: '#383838'
                        },
                    }}>
                    <Toolbar/>
                    <Box sx={{overflow: 'auto'}}>
                        <Navbar/>
                    </Box>
                </Drawer>
                <Box component="main" sx={{flexGrow: 1, p: 3, backgroundColor: '#f5f5ef'}}>
                    <Toolbar/>
                    <Switch>
                        <Route exact path='/'
                               render={() => <Redirect to={'/profile'}/>}/>
                        <Route path='/dialogs'
                               render={withSuspense(DialogsContainer)}/>
                        <Route path='/profile/:userId?'
                               render={withSuspense(ProfileContainer)}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <LoginPage/>}/>
                        <Route path='/music' render={() => <div>coming soon...</div>}/>
                        <Route path='/settings' render={() => <div>coming soon...</div>}/>
                        <Route path='/news' render={() => <div>coming soon...</div>}/>
                        <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </Box>
            </Box>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

const SocialNetworkApp = (props) => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SocialNetworkApp;