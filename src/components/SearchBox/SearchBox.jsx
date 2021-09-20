import React from "react";
import "./SearchBox.scss";

const SearchBox = (props) => {
    const {searchTerm , handleInput} = props;
    console.log(searchTerm)
    return (
        <>
            <form className="search-box">
                <label htmlFor="">Feeling thirsty?</label>
                <input type="text" value={searchTerm} onInput={handleInput}/>
            </form>
        </>
    )
}

export default SearchBox;