import logo from './logo.svg';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/Homepage';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <HomePage />
        <Footer />
      </Router>
    </div>
  )
}

export default App;
