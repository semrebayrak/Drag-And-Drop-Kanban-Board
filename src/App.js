import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';


import Home from "./pages/Home.js";

function App() {

  var counter = 1
  var kanbanboard = "kanbanboard"
  return (

    <Router>


      <Routes>

      
          <Route path={""} element={<Home />} />
        


      </Routes >

    </Router>

  );

}

export default App;
