import { useParams } from "react-router-dom";

import { getPlayer } from "../myData";
import PlayerComponent from "../components/playerComponent/PlayerComponent";

export default function Player(){
    const params = useParams();
    const player = getPlayer(parseInt(params.playerId, 10));
    return(
        <PlayerComponent player={player}/>
    );
}