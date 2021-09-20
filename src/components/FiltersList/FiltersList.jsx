import React, {useState} from "react";
import "./FiltersList.scss"

const FiltersList = (props) => {

    return (
        <>
            <div>
                <div>
                    <label for="abv">High ABV</label>
                    <input type="checkbox" id="abv"/>
                </div>
                <div>
                    <label for="classic">Classic</label>
                    <input type="checkbox" id="classic"/>
                </div>
                <div>
                    <label for="ph">Acidic</label>
                    <input type="checkbox" id="ph"/>
                </div>
            </div>
        </>
    )
}
export default FiltersList;