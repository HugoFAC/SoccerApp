import { useParams, Link } from "react-router-dom";

import { getClub, getLeague } from "../myData";

export default function League() {
    const params = useParams();
    const league = getLeague(params.leagueId);
    return (
        <>
            {league.clubs.map((teamId) => (
                <Link
                style={{ display: "block", margin: "1rem 0" }}
                to={`/teams/${teamId}`}
                key={teamId}
            >
                {getClub(teamId).name}
            </Link>
            ))}
        </>
    );
  }