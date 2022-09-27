import { Link } from "react-router-dom";

import "./GameComponent.css";
import { getClub } from "../../myData";

export default function GameComponent({game}){
    const club1 = getClub(game.club1);
    const club2 = getClub(game.club2);
    let mid;
    const finished = game.result[0]>-1 ? mid = game.result[0] + ' - ' + game.result[1] : mid=" VS ";

    return(
        <div key={game.id} className="gameLine">
            <Link
                className="teamLinkLeft"
                to={`/teams/${game.club1}`}
                key={game.club1}
            >
            {club1.name}
            </Link> 
            <b className="middle">{mid}</b>
            <Link
                className="teamLinkRight"
                to={`/teams/${game.club2}`}
                key={game.club2}
            >
            {club2.name}
            </Link>
            <span className="date">{game.date}</span>
        </div>
    );
}