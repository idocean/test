import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Works from './pages/Works';
import Request from './pages/Request';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/services" exact>
            <Services />
          </Route>
          <Route path="/works" exact>
            <Works />
          </Route>
          <Route path="/request" exact>
            <Request />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
