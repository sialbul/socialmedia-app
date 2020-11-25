import "./App.css";
import {BrowserRouter as Router,Route, Switch } from 'react-router-dom';

//Components
import Navbar from './components/Navbar';

//Pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';


function App() {
    return (
        <div className="App">
            <Router>
              <Navbar />
              <Switch>
                <Route path="/" exact component={home}/>
                <Route path="/login" component={login}/>
                <Route path="/signup" component={signup}/>
              </Switch>
            </Router>
        </div>
    );
}

export default App;
