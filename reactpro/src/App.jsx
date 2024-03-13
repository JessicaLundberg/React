import Home from "./Pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer"

import IconPage from './IconPage'
import "./App.css";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return ( <div> 
    <Router>
      <Header />
      <Switch>
        <Route exact path= "/" component={Home} />
      </Switch>
      <Footer />
    </Router>
    </div> )
}

export default App
