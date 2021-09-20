import React, { useState } from "react";
import "./Navbar.scss";
import FiltersList from "../FiltersList/FiltersList";
import SearchBox from "../SearchBox/SearchBox";


const Navbar = () => {

    const [searchTerm, setSearchTerm] = useState("")

    const handleInput = event => {
        const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput)
    }

    return (
        <>
            <div className="navbar">
                <SearchBox searchTerm={searchTerm} handleInput={handleInput}/>
                <FiltersList/>
            </div>
        </>
    )
}
export default Navbar;