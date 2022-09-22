import { getClubs } from "../myData";
import { Link, Outlet, useSearchParams } from "react-router-dom";

export default function Teams(){
    const clubs = getClubs();
    let [searchParams, setSearchParams] = useSearchParams();
    return(
        <>
        <h1>Teams List</h1>
        {Object.entries(clubs).filter((club) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = club[1].name.toLowerCase();
            return name.includes(filter.toLowerCase());
          }).map((club) => (
            <Link
                style={{ display: "block", margin: "1rem 0" }}
                to={`/teams/${club[0]}`}
                key={club[0]}
            >
                {club[1].name}
            </Link>
        ))}
        <Outlet>Lalala</Outlet>
        </>
    );
}