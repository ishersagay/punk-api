import React, { useState } from "react";
import "./Navbar.scss";
import FiltersList from "../FiltersList/FiltersList";
import SearchBox from "../SearchBox/SearchBox";


const Navbar = (props) => {

    const {searchTerm, handleInput} = props

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