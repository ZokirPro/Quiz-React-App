import './App.css';
import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Questions from './components/Questions';
import Start from './components/pages/start';

function App() {
  return (
    <Router>
      <Route exact path="/" render={props=>(
        <React.Fragment>
          <Start/>
        </React.Fragment>
      )}/>
      <Route exact path="/questions" component={Questions}/>
    </Router>
  );
}

export default App;
