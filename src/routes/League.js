import { useParams, Link } from "react-router-dom";

import { getLeague } from "../myData";
import LeagueComponent from "../components/leagueComponent/LeagueComponent";

export default function League() {
    const params = useParams();
    const league = getLeague(params.leagueId);

    return (
        <LeagueComponent league={league}/>
    );
  }