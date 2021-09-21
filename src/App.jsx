import {useEffect, useState} from "react";
import './App.scss';
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {

    const [beerData, setBeerData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const getBeersApi = () => {
        fetch("https://api.punkapi.com/v2/beers ")
            .then(response => response.json())
            .then(jsonResponse => setBeerData(jsonResponse))
            .catch(err => console.log("err"))
    }

    useEffect(getBeersApi, [])

    const handleInput = event => {
        const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput)

    }

    const newData = beerData.filter(beer => {
        const resultsName = beer.name.toLowerCase();
        return resultsName.includes(searchTerm) && beer.image_url;
    })

    return (
        <>
            <div className="app">
                <div className="app-nav">
                    <Navbar searchTerm={searchTerm} handleInput={handleInput}/>
                </div>
                <div className="main-beer_cards">
                    {newData && <Main beerData={newData}/>}
                </div>
            </div>
        </>
    );
}

export default App;
