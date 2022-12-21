import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmploy";
import EmployeeList from "./pages/EmployeeList";
import Header from "./components/Header";

const App = () => (
  <div>
    <Header/>
    <Router>
        <Routes >
          <Route path="/createemployee" element={<CreateEmployee/>}/>
          <Route path="/employeelist" element={<EmployeeList/>}/>
        </Routes>
    </Router>  
  </div>
);

export default App;