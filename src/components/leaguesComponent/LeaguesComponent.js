import { Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../contexts/UserContext";
import './LeaguesComponent.css'

export default function LeaguesComponent({leagues}){

    const user = useContext(UserContext);

    return(
        <div className='leaguesList'>
            <h2 className="title">Leagues</h2>
            {leagues.map((league) => (
                <div className = 'leagueLine' key={league.id}>
                    <Link
                        to={`/leagues/${league.id}`}
                    >
                        {league.name}
                    </Link>
                    {user.name != "" && <button>{"\u2606"}</button>}
                </div>
            ))}
        </div>
    );
}