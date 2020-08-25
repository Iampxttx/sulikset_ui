import React, { useState } from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Search from './Components/Layout/Search';
import Jobs from './Components/Jobs';

function App() {

  const initJobs = []
  const [jobs, setJobs] = useState(initJobs);
  
  fetch('http://gis.vantaa.fi/rest/tyopaikat/v1/kaikki')
  .then(response => response.json())
  .then(json=>setJobs([...json]));
  
  const rows = () => jobs.map(job => {
    return <p><input type="checkbox"></input>{job.tyotehtava}, {job.osoite} <a href={job.linkki}>Lisätietoja</a></p>
  })
  return (
    <div className="App">
      <Header />
      <Search />
      <jobs />
      {rows()}
    
    </div>
  );
}

export default App;