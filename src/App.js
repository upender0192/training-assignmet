import React from 'react';
import './App.css';
import JobListing from './component/pages/job-listing/job-listing'
import {BrowserRouter as Router} from 'react-router-dom'
import {Switch} from 'react-router-dom'
import Route from 'react-router-dom/Route';
import Homepage from './component/pages/homepage/homepage'
import DetailPage from './component/pages/detail-page/detailpage'
import Header from './component/header/header'
import NewJob from './component/pages/newjob/newjob'

function App() {
  return (
    <Router>
      
      <div className="App">
      <Header></Header>
        <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/joblisting" component={JobListing}></Route>
        <Route path="/detailpage" component={DetailPage}></Route>
        <Route path="/newjob" component={NewJob}></Route>
        </Switch>
      </div>
      </Router>
  );
}

export default App;
