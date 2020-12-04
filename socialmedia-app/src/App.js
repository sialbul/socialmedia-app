import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from "./util/theme";
import jwtDecode from 'jwt-decode';

//redux
import {Provider} from 'react-redux';
import store from './redux/store';
//Components
import Navbar from "./components/Navbar";
import AuthRoute from './util/AuthRoute';

//Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

const theme = createMuiTheme(themeFile);

let authenticated;
const token = localStorage.FBIdToken;
if(token){
const decodedToken =jwtDecode(token);
if(decodedToken.exp *1000 < Date.now()){
    window.location.href = '/login'
    authenticated =false;
}else{
    authenticated =true;
}
}

function App() {
    return (
        <MuiThemeProvider theme={theme}>
        <Provider store = {store}>
          <div className="App">
                <Router>
                    <Navbar />
                    <div className="container">
                        <Switch>
                            <Route path="/" exact component={home} />
                            <AuthRoute path="/login" exact component={login} authenticated={authenticated} />
                            <AuthRoute path="/signup" exact component={signup} authenticated={authenticated} />
                        </Switch>
                    </div>
                </Router>
            </div>
        </Provider>

          
        </MuiThemeProvider>
    );
}

export default App;
