import { Link, Outlet } from "react-router-dom";

import './LeaguesComponent.css'

export default function LeaguesComponent({leagues}){

    return(
        <div className='leaguesList'>
            <h2 className="title">Leagues</h2>
            {leagues.map((league) => (
                <Link
                    className = 'leagueLine'
                    to={`/leagues/${league.id}`}
                    key={league.id}
                >
                    {league.name}
                </Link>
            ))}
        </div>
    );
}