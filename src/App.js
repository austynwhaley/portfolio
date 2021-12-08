import React, { Component } from 'react';
import { Route} from 'react-router-dom';

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
        <Route path='/about' component={About}/>
        <Route path='/portfolio' component={Portfolio}/>
        <Route path='/pdf' component={Pdf}/>
        <Route path="/404" component={NotFound}/>
      </div>

    ) 
  }  

    

}

export default App;