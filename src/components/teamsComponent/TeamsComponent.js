import { Link } from "react-router-dom";
import { useContext } from "react";

import './TeamsComponent.css'
import { UserContext } from "../../contexts/UserContext";

export default function TeamsComponent({teams}){

    const user = useContext(UserContext);

    return (
        <div>
            <h2 className="title">Teams</h2>
            <div className="teamsList">
                {teams.map((club) => (
                    <div className="teamLine" key={club[0]}>
                        <Link
                            to={`/teams/${club[0]}`}
                        >
                            {club[1].name}
                        </Link>
                        {user.name != "" && <button>{"\u2606"}</button>}
                    </div>
                ))}
            </div>
        </div>
    );
}