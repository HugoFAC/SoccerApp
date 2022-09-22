import { getLeagues } from "../myData";
import { Link, useSearchParams } from "react-router-dom";

export default function Leagues(){
    const leagues = getLeagues();
    let [searchParams, setSearchParams] = useSearchParams();
    return(
        <>
        <h1>LeaguesList</h1>
        {leagues.filter((league) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = league.name.toLowerCase();
            return name.includes(filter.toLowerCase());
          }).map((league) => (
            <Link
                style={{ display: "block", margin: "1rem 0" }}
                to={`/leagues/${league.id}`}
                key={league.id}
            >
                {league.name}
            </Link>
        ))}
        </>
    );
}