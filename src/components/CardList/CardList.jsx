import React from "react";
import "./CardList.scss"
import Card from "../Card/Card";

const CardList = (props) => {
    const {beerData} = props;
    const beerJSX = beerData.map((beer) => {
        return(
            <Card
                beer={beer}
            />
        )
    })

    return(
        <>
            {beerJSX}
        </>
    )
}
export default CardList;