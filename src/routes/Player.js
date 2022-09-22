import { useParams } from "react-router-dom";

import { getPlayer } from "../myData";

export default function Player(){
    const params = useParams();
    const player = getPlayer(parseInt(params.playerId, 10));
    return(
        <>
            <h1>{player.name}</h1>
            <h2>Age: {player.age}</h2>
            <h2>Position: {player.position}</h2>
            <h2>Nationality: {player.nationality}</h2>
        </>
    );
}