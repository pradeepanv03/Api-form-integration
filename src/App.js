// import logo from './logo.svg';
// import './App.css';
// import Axiosform from './Axiosform';

// function App() {
//   return (
//     <div className="App">
// <Axiosform/>
//     </div>
//   );
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import DataForm from "./DataForm";
// import DataTable from "./DataTable";

// function App() {
//     return (
//         <Router>
//             <div className="container">
//                 <Routes>
//                     <Route path="/" element={<DataForm />} />
//                     <Route path="/table" element={<DataTable />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;


import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";
import DataForm from "./DataForm";
import DataTable from "./DataTable";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = (username, password) => {
        if (username === "pradeep" && password === "v03") { // Replace with your actual authentication logic
            setIsAuthenticated(true);
        } else {
            alert("Invalid credentials");
        }
    };
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Login onLogin={handleLogin} />} />
                    <Route 
                        path="/form" 
                        element={isAuthenticated ? <DataForm /> : <Navigate to="/" />} 
                    />
                    <Route 
                        path="/table" 
                        element={isAuthenticated ? <DataTable /> : <Navigate to="/" />} 
                    />             
                </Routes>
            </div>
        </Router>
    );
}

export default App;
