import React from "react";
import "./FilterItem.scss";
import FiltersList from "../FiltersList/FiltersList";

const FilterItem = (props) => {
    const {checkABV, checkClassic, checkPH} = props
    return (
        <>
            <FiltersList checkABV={checkABV} checkClassic={checkClassic} checkPH={checkPH}/>
        </>
    )
}
export default FilterItem