import './App.css';
import Counter from './components/Counter';
import { BrowserRouter  as Router, Route, Switch,Link } from 'react-router-dom';
import About from './components/About';
import Gallery from './components/Gallery';
import HitDetails from './components/HitDetails';

const App =() => {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-brand m-2">
        <ul className="navbar-nav">
          <li>
        <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li>
        <Link className="nav-link" to="/counter">Counter</Link>
          </li>
          <li>
        <Link className="nav-link" to="/about">About</Link>
          </li>
          <li>
        <Link className="nav-link" to="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav>
      <div className="m-4">
        <Switch>
        <Route exact path="/home" />
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/about" component={About} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/hitDetails/:id" component={HitDetails} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;

