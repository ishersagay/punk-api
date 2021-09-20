import React, {useState} from "react";
import "./FiltersList.scss"

const FiltersList = (props) => {
    const { checkABV, checkClassic, checkPH} = props;

    return (
        <>
            <div>
                <div>
                    <label for="abv">High ABV</label>
                    <input type="checkbox" id="abv" onClick={checkABV}/>
                </div>
                <div>
                    <label for="classic">Classic</label>
                    <input type="checkbox" id="classic" onClick={checkClassic}/>
                </div>
                <div>
                    <label for="ph">Acidic</label>
                    <input type="checkbox" id="ph" onClick={checkPH}/>
                </div>
            </div>
        </>
    )
}
export default FiltersList;