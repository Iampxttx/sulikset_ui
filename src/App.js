import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Search from './Components/Layout/Search';
import Jobs from './Components/Jobs';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Weather from './Components/Weather';

function App() {

  const initJobs = []
  const [jobs, setJobs] = useState(initJobs);

  useEffect(() => {
    fetch('http://gis.vantaa.fi/rest/tyopaikat/v1/kaikki')
      .then(response => response.json())
      .then(json => setJobs([...json]));
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
        <Route path="/weather">
          <Weather />
        </Route>
        <Route path="/">
          <Search />
          <Jobs jobs={jobs} />
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;