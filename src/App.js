import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";

import Competitions from "./pages/Competitions/Competition.js";
import Home from "./pages/Home/Home.js";


function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route exact path="/" element={Home}/>
                    <Route path="/competitions" element={Competitions} />
                </Routes>
            </Router>
            <Footer></Footer>
        </div>
    );
}

export default App;
