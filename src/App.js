import { useState } from "react";
// import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
// import Basic from "./basic/Basic";
import Full from "./components/full/Full";
import Header from "./components/Header/Header.js";
import TesterScroll from "./components/TesterScroll.js";
// import MainPage from "./components/MainPage.js";
import SearchPage from "./components/SearchPage/SearchPage.js";
import { StateProvider } from "./components/Reducer/StateProvider";
import reducer, { initialState } from "./components/Reducer/Reducer";

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
      <StateProvider initialState={initialState} reducer={reducer}>
        <Header />
        {/* <TesterScroll /> */}
        <SearchPage />
      </StateProvider>
    </div>
  );
}

export default App;
