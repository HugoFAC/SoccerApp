import { Link } from "react-router-dom";

export default function TeamsComponent({teams}){

    return (
        <div>
            <h1>Teams List</h1>
            {teams.map((club) => (
                <Link
                    style={{ display: "block", margin: "1rem 0" }}
                    to={`/teams/${club[0]}`}
                    key={club[0]}
                >
                    {club[1].name}
                </Link>
            ))}
        </div>
    );
}