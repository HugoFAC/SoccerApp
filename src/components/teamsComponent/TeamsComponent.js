import { Link } from "react-router-dom";

import './TeamsComponent.css'

export default function TeamsComponent({teams}){

    return (
        <div className="teamsList">
            <h2 className="title">Teams</h2>
            {teams.map((club) => (
                <Link
                    className="teamLine"
                    to={`/teams/${club[0]}`}
                    key={club[0]}
                >
                    {club[1].name}
                </Link>
            ))}
        </div>
    );
}