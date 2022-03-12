import { useState } from "react";
// import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
// import Basic from "./basic/Basic";
import Full from "./components/full/Full";
import Header from "./components/Header.js";
import TesterScroll from "./components/TesterScroll.js";
// import MainPage from "./components/MainPage.js";

function App() {
  const [] = useState();
  return (
    // <Router>
    //   <div className="header">
    //     <Link to="/">Home</Link>
    //     <Link to="/basic">Basic Example</Link>
    //     <Link to="/full">Full Example</Link>
    //   </div>
    //   <Switch>
    //     <Route path="/basic">
    //             <Basic />
    //         </Route>
    //     <Route path="/">
    //       <Full />
    //     </Route>
    //     <Route path="/">
    //             <Home />
    //         </Route>
    //   </Switch>
    // </Router>
    <div>
      <Header />
      <TesterScroll />
    </div>
  );
}

export default App;
