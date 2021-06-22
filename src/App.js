import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Soon from "./components/Soon";
import Footer from "./components/Footer";
import Blumig from "./components/Blumig";
import Bewegung from "./components/Bewegung";
import Technik from "./components/Technik";
import Mitmachen from "./components/Mitmachen";
import Termine from "./components/Termine";

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/casa-website" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/blumig" exact component={Blumig} />
          <Route path="/bewegung" exact component={Bewegung} />
          <Route path="/technik" exact component={Technik} />
          <Route path="/mitmachen" exact component={Mitmachen} />
          <Route path="/termine" exact component={Termine} />
          <Route path="/contact" exact component={Contact} />
          <Route path={() => "/main" || "/admin" || "/any-other-word"}>
            <Soon />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
