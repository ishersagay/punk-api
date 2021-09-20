import {useState, useEffect} from "react";
import './App.scss';
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {

    const [beerData, setBeerData] = useState("")

    const getBeersApi = () => {
        fetch("https://api.punkapi.com/v2/beers ")
            .then(response => response.json())
            .then(jsonResponse => setBeerData(jsonResponse))
            .catch(err => console.log("err"))
    }

    useEffect(getBeersApi, [])

    return (
        <>
            <div className="app">
                <Navbar/>
                {beerData && <Main beerData={beerData}/>}
            </div>
        </>
    );
}

export default App;
