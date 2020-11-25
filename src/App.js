import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import NavBar from "./components/Header"
import Footer from "./components/Footer"
import './App.css';
import './style.css'

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path={["/Portfolio", "/about", "/"]}>
            <About />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
