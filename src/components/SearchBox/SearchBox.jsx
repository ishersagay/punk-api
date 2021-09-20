import React from "react";
import "./SearchBox.scss";

const SearchBox= (props) => {
    const { searchTerm, handleInput} = props;
    return (
        <>
            <form className="search-box">
                <label htmlFor="navForm__input">Feeling thirsty?</label>
                <input type="text" value={searchTerm} onInput={handleInput}/>
            </form>
        </>
    )
}

export default SearchBox;