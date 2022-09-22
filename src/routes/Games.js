import { getGames,getClubs,getGamesOnDay } from "../myData";
import { useSearchParams } from "react-router-dom";
import '../styleSheets/myGames.css'
import GameComponent from "../components/GameComponent";

export default function Games(){
    const clubs = getClubs();
    let [searchParams, setSearchParams] = useSearchParams();
    const today = new Date();
    let date = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear()
    const games = getGames();
    console.log(games);
    return(
        <div className="gamesList">
            {games.filter((game) => {
                let filter = searchParams.get("filter");
                if (!filter) return true;
                let name1 = clubs[game.club1].name.toLowerCase();
                let name2 = clubs[game.club2].name.toLowerCase();
                return (name1.includes(filter.toLowerCase()) || name2.includes(filter.toLocaleLowerCase()));
                }).map((game) => (
                    <GameComponent
                        key={game.id} 
                        gameId = {game.id}
                    >
                    </GameComponent>
            ))}
        </div>
    );
}