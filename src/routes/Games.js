import { getGamesOfClub, getGames,getGamesOnDay } from "../myData";
import { useSearchParams, useLocation } from "react-router-dom";
import '../styleSheets/myGames.css'
import GameComponent from "../components/GameComponent";
import { useEffect, useState } from "react";

export default function Games(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [games, setGames] = useState([]);
    let location = useLocation();
    let filter = searchParams.get("filter");
    useEffect(() => {
        setGames(getGamesOfClub(filter));
    },[filter]);
    const today = new Date();
    let date = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    return(
        <div className="gamesList">
            {games.map((game) => (
                    <GameComponent
                        key={game.id} 
                        gameId = {game.id}
                    >
                    </GameComponent>
            ))}
        </div>
    );
}