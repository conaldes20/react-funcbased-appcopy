import React from "react"
import ReactDOM from "react-dom"

//component file
//import TodoContainer from "./components/TodoContainer"
//ReactDOM.render(<TodoContainer />, document.getElementById("root"))

//import TodoContainer from "./components/TodoContainer"
//import { BrowserRouter as Router } from "react-router-dom"

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './react-pages';
import About from './react-pages/about';
import Events from './react-pages/events';
import AnnualReport from './react-pages/annual';
import Teams from './react-pages/team';
import Blogs from './react-pages/blogs';
import SignUp from './react-pages/signup';
import NotMatch from './react-pages/NotMatch';
import Footer from './components/Footer'

//stylesheet
//import "./App.css";
import "./index.css";
import App from './App';
import './components/Footer.css'

ReactDOM.render(
  <React.StrictMode>
      <Router>
	<App />
        <Switch>
           <Route path='/' exact component={Home} />
           <Route path='/about' component={About} />
           <Route path='/events' component={Events} />
           <Route path='/annual' component={AnnualReport} />
           <Route path='/team' component={Teams} />
           <Route path='/blogs' component={Blogs} />
           <Route path='/sign-up' component={SignUp} />
           <Route component={NotMatch} />
        </Switch>
        <Footer/>
      </Router>
  </React.StrictMode>,  
  document.getElementById("root")
)