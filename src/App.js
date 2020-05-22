import React from 'react';
import './App.css';
import JobListing from './component/pages/job-listing/job-listing'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Homepage from './component/pages/homepage/homepage'
import DetailPage from './component/pages/detail-page/detailpage'
import Header from './component/header/header'
import NewJob from './component/pages/newjob/newjob'

function App() {
  return (
   
      
      <div className="App">
         <Router>
          <Header></Header>
          <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/joblisting" component={JobListing}></Route>
          <Route exact path="/detailpage/:id" component={DetailPage}></Route>
          <Route exact path="/newjob" component={NewJob}></Route>
          </Switch>
        </Router>
      </div>
      
  );
}

export default App;
