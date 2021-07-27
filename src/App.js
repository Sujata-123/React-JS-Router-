import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import { useHistory } from "react-router-dom";
       
        



const App=()=> {
  const history = useHistory();
  return (
    <div className="App">
      {/* <button> */}
        {/* by using link their will be underline link then wraping in button by using this no need to use history.push*/}
       
       
      {/* </button> */}
//       <div>
// <button>
//  <Link to="/about"> About Us </Link>
// </button>
// <button>
//   <Link to="/contact"> Contact Us </Link>
// </button>
// <button>
//    <Link to="/"> Home Page </Link>
// </button>
// </div>

<div>
       <button onClick={() => history.push("/about")}> About Us </button>
      <button onClick={() => history.push("/contact")}> Contact Us </button>
      <button onClick={() => history.push("/")}> Home Page </button>

</div>
 {/* if you want to display componet as
        
        child component instead of having about as a child
        you can nest inside a rander attribute when
        you put inside rander attribute you can actually pass props which is going to be react router props */}
      <Switch>
        <Route exact path="/about" render={(props) => <About {...props} />} />
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
