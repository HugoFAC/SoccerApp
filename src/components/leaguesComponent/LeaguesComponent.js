import { Link } from "react-router-dom";

export default function LeaguesComponent({leagues}){

    return(
        <div>
        <h1>LeaguesList</h1>
        {leagues.map((league) => (
            <Link
                style={{ display: "block", margin: "1rem 0" }}
                to={`/leagues/${league.id}`}
                key={league.id}
            >
                {league.name}
            </Link>
        ))}
        </div>
    );
}