import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/dashboard"
const Rouert = () => {
    return (
        <>
            <Routes>
                <Route path="/Home" element={<Home/>} exact={true}/>
                <Route path="/Dashboard" element={<Dashboard/>} exact={true}/>
            </Routes>
        </>
    )
}
export default Rouert