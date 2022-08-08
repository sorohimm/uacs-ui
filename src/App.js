import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";

import Competitions from "./pages/Competitions/Competition.js";
import Home from "./pages/Home/Home.js";
import SignIn from "./pages/SignIn/SignIn";
import SingleCompetition from "./pages/Competitions/SingleCompetition";


function App() {
    return (
        <div className="App">
            <Router>
                <Header></Header>
                <Routes>
                    <Route exact path="/" element={<Home></Home>}/>
                    <Route exact path="/competitions" element={<Competitions></Competitions>}/>
                    <Route exact path="/login" element={<SignIn></SignIn>}/>
                    <Route exact path="/competition" element={<SingleCompetition></SingleCompetition>}/>
                </Routes>
            </Router>
            <Footer></Footer>
        </div>
    );
}

export default App;
