import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Homepage from "./pages/homepage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Redirect from="/" to="/kesavamuthu" />
      </Route>
      <Route path="/:name">
        <Homepage />
      </Route>
    </Router>
  );
}

export default App;
