import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Intro/Header';
import { Showcase } from './components/Projects/Showcase';
import { Footer } from './components/Contact/Footer';
import { SubHeader } from './components/Intro/SubHeader';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';

const App = () => {
  return (
      <Router>
          <Routes>
              <Route exact path="/" component={Home} />
              <Route path="/header" component={Header} />
              <Route path="/subheader" component={SubHeader} />
              <Route path="/projects" component={Showcase} />
              <Route path="/footer" component={Footer} />
              <Route path="/about" component={About} />
          </Routes>
      </Router>
  );
};

export default App;
