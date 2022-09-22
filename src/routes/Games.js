import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getGamesOfClub } from "../myData";
import GamesComponent from "../components/games/GamesComponent";

export default function Games(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [games, setGames] = useState([]);
    let filter = searchParams.get("filter");
    useEffect(() => {
        setGames(getGamesOfClub(filter));
    },[filter]);
    const today = new Date();
    let date = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    return(
        <GamesComponent games = {games}/>
    );
}