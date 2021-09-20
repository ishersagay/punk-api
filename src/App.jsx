import {useEffect, useState} from "react";
import './App.scss';
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {

    const [beerData, setBeerData] = useState("")
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

    // const newData = beerData.filter(beer => {
    //     const resultsName = beer.name.toLowerCase();
    //     return resultsName.includes(searchTerm) && beer.image_url;
    // })


    console.log(beerData, "line 37")
    return (
        <>
            <div className="app">
                <Navbar searchTerm={searchTerm} handleInput={handleInput}/>
                {beerData && <Main beerData={beerData}/>}
            </div>
        </>
    );
}

export default App;
