import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getUnplayedGames } from "../myData";
import GamesComponent from "../components/gamesComponent/GamesComponent";

export default function Games(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [games, setGames] = useState([]);
    let filter = searchParams.get("filter");

    const today = new Date();
    let date = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    useEffect(() => {
        setGames(getUnplayedGames(filter));
    },[filter]);

    return(
        <GamesComponent games = {games}/>
    );
}