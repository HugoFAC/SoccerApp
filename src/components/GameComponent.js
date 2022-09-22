import { getGame,getClubs } from "../myData";
import { Link } from "react-router-dom";

export default function GameComponent({gameId}){
    const game = getGame(gameId);
    const clubs = getClubs();
    let mid;
    const finished = game.result[0]>-1 ? mid = game.result[0] + ' - ' + game.result[1] : mid=" VS ";

    return(
        <div key={game.id} className="gameLine">
            <Link
                className="teamLinkLeft"
                to={`/teams/${game.club1}`}
                key={game.club1}
            >
            {clubs[game.club1].name}
            </Link> 
            <b className="middle">{mid}</b>
            <Link
                className="teamLinkRight"
                to={`/teams/${game.club2}`}
                key={game.club2}
            >
            {clubs[game.club2].name}
            </Link> 
        </div>
    );
}