import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import Igtv from './Pages/Igtv';
import Posts from './Pages/Posts';
import Profile from './Pages/Profile';
import Reels from './Pages/Reels';
import Fullsize from './Pages/Fullsize';
import Stories from './Pages/Stories';



function App() {

  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/reels" component = {Reels} />
      <Route exact path="/igtv" component = {Igtv} />
      <Route exact path="/posts" component = {Posts} />
      <Route exact path="/profile-picture" component = {Profile} />
      <Route exact path="/stories" component = {Stories} />
      <Route exact path="/fullsize/:username/" component = {Fullsize} />
      </Switch>
    </Router>
  );
}

export default App;
