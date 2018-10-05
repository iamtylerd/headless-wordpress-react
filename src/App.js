import React from 'react';
import './App.scss';
import logo from './assets/Logo.png';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Posts from './Posts/Posts';
import Post from './Post/Post';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/">
            <img src={logo} className="logo" alt="logo"/>
          </Link>
        </header>
        <Route exact path="/" component={Posts} />
        <Route path={`/post/:id`} component={Post} />
      </div>
    </Router>
  );
}


export default App;
