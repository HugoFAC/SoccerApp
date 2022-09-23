import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { getClubsByName } from "../myData";
import TeamsComponent from "../components/teamsComponent/TeamsComponent";

export default function Teams(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [teams, setTeams] = useState([]);
    let filter = searchParams.get("filter") ? searchParams.get("filter") : "";

    useEffect(() => {
        setTeams(getClubsByName(filter));
    },[filter]);

    return(
        <TeamsComponent teams={teams} />
    );
}