import "./Main.scss";
import CardList from "../CardList/CardList";

const Main = (props) => {

    const {beerData} = props;

    return (
        <>
            <CardList beerData={beerData}/>
        </>
    )
}
export default Main;