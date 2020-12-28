import logo from './logo.svg';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Footer/>
      </Router>
    </div>
  )
}

export default App;
