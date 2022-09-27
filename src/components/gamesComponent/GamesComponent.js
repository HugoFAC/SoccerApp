import GameComponent from "../gameComponent/GameComponent.js"
import "./GamesComponent.css";

export default function GamesComponent({games}){

    return(
        <div className="gamesList">
            {games.map((game) => (
                    <GameComponent
                        key={game.id} 
                        game = {game}
                    >
                    </GameComponent>
            ))}
        </div>
    );
}