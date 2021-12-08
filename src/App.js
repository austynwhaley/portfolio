import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//pages
import Homepage from './pages/Homepage/index'
import About from './pages/About/index'
import Pdf from './pages/Pdf'
import Portfolio from './pages/Portfolio/index.js'
import NotFound from './pages/404'

class App extends Component{

  render() {
    return (

      <div>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/portfolio/#/about/' component={About}/>
        <Route exact path='portfolio/#/portfolio/' component={Portfolio}/>
        <Route exact path='/portfolio/#/pdf/' component={Pdf}/>
        <Route exact path="/404" component={NotFound}/>
      </div>

    ) 
  }  

    

}

export default App;