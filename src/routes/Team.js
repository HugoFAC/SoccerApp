import { useParams } from "react-router-dom";

import TeamComponent from "../components/teamComponent/TeamComponent.js";

export default function Team() {
    const params = useParams();
    return (
        <TeamComponent teamId={params.teamId}/>
    );
  }