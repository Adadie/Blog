import logo from './logo.svg';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from './components/Navbar';

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
      </Router>
    </div>
  )
}

export default App;
