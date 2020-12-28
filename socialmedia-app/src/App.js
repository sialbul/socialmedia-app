import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from "./util/theme";
import jwtDecode from "jwt-decode";

//redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";
//Components
import Navbar from "./components/layout/Navbar";
import AuthRoute from "./util/AuthRoute";
import themeObject from './util/theme';


//Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import axios from "axios";

const theme = createMuiTheme(themeObject);

const token = localStorage.FBIdToken;
if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
        store.dispatch(logoutUser());
        window.location.href = "/login";
    } else {
        store.dispatch({ type: SET_AUTHENTICATED });
        axios.defaults.headers.common['Authorization'] = token;
        store.dispatch(getUserData());
    }
}

function App() {
    return ( <
        MuiThemeProvider theme = { theme } >
        <
        Provider store = { store } >
        <
        Router >
        <
        Navbar / >
        <
        div className = "container" >
        <
        Switch >
        <
        Route path = "/"
        exact component = { home }
        />{" "} <
        AuthRoute path = "/login"
        exact component = { login }
        />{" "} <
        AuthRoute path = "/signup"
        exact component = { signup }
        />{" "} <
        /Switch>{" "} <
        /div>{" "} <
        /Router>{" "} <
        /Provider>{" "} <
        /MuiThemeProvider>
    );
}

export default App;