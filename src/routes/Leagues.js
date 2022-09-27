import { Link, Outlet, useSearchParams } from "react-router-dom";
import { getLeaguesByName } from "../myData";
import { useState, useEffect } from "react";

import LeaguesComponent from "../components/leaguesComponent/LeaguesComponent.js";

export default function Leagues(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [leagues, setLeagues] = useState([]);
    let filter = searchParams.get("filter");

    useEffect(() => {
        setLeagues(getLeaguesByName(filter));
    },[filter]);

    return(
        <LeaguesComponent leagues={leagues}/>
    );
}