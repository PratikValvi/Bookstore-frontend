import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
      <Route path="/" exact component={Dashboard}/>
      <Route path="/signup" component={Register}/>
      <Route path="/signin" component={Login}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
