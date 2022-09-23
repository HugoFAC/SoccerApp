
export default function PlayerComponent({player}){

    return(
        <div>
            <h1>{player.name}</h1>
            <h2>Age: {player.age}</h2>
            <h2>Position: {player.position}</h2>
            <h2>Nationality: {player.nationality}</h2>
        </div>
    );
}