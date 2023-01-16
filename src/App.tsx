import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Homepage from "./pages/homepage";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
      <Route  path="/" element={<Navigate replace to="/kesavamuthu" />}/>
      <Route path="/:name" element={<Homepage />}>
        
        </Route>
        </Routes>
    </Router>
  );
}

export default App;
