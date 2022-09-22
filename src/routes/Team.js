import { useParams } from "react-router-dom";
import TeamComponent from "../components/TeamComponent";

export default function Team() {
    const params = useParams();
    console.log(params.teamId)
    return (
        <TeamComponent teamId={params.teamId}/>
    );
  }