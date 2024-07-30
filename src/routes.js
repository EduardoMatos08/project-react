import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/HomePage/index";
import Users from "./pages/UsersPage/index";

function Page() {
    
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/users" element={<Users/>}/>
            </Routes>
        </Router>
    )

} export default Page