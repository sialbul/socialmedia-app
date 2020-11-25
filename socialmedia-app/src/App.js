import "./App.css";
import {BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
//Components
import Navbar from './components/Navbar';

//Pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';

const theme =createMuiTheme({
  
    palette: {
      primary: {
        light: '#d7e360',
        main:'#cddc39',
        dark:'#8f9a27',
        contrastText: '#fff'
      }
      ,
      secondary: {
      light: '#f73378',
      main:'#f50057',
      dark:'#ab003c',
      contrastText: '#fff'
    }},
    })
  


function App() {
    return (
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <Router>
            <Navbar />
            <div className="container">
            <Switch>
                <Route path="/" exact component={home}/>
                <Route path="/login" component={login}/>
                <Route path="/signup" component={signup}/>
              </Switch>

            </div>
            </Router>
        </div>
        </MuiThemeProvider>
    );
}

export default App;
