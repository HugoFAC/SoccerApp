import { Link } from "react-router-dom";

import { getClub } from "../../myData";

export default function LeagueComponent({league}){

    return(
        <div className="teamsList">
            {league.clubs.map((teamId) => (
                <Link
                style={{ display: "block", margin: "1rem 0" }}
                to={`/teams/${teamId}`}
                key={teamId}
            >
                {getClub(teamId).name}
            </Link>
            ))}
        </div>
    );
}