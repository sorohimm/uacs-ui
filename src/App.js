import './App.css';
import CompetitionsTable from "./components/CompetitionsTable/CompetitionsTable.js";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <CompetitionsTable></CompetitionsTable>
            <Footer></Footer>
        </div>
    );
}

export default App;
