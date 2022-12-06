import './App.css'
import {useEffect, useState} from "react";
import Board from "./component/Board/Board";
import BoardComponent from "./component/Board/BoardComponent";
import NewButton from "./component/NewButton/NewButton";
import Player from "./component/Player/Player";
import Color from "./component/Figure/Color";
import IndexBoard from "./component/IndexBoard";
import LostFigures from "./component/Board/LostFigures";
import Timer from "./component/Board/Timer";


function App() {
    const [board, setBoard] = useState(new Board());
    const [whitePlayer, setWhitePlayer] = useState(new Player(Color.WHITE));
    const [blackPlayer, setBlackPlayer] = useState(new Player(Color.BLACK));
    const [currentPlayer, setCurrentPlayer] = useState(null);
    const [selectedCell, setSelectedCell] = useState(null);

    useEffect(() => {
        restart()

    }, [])

    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.addFigure();
        setCurrentPlayer(whitePlayer);
        setBoard(newBoard);
        setSelectedCell(null);
    }

    function swapPlayer() {
        setCurrentPlayer(currentPlayer?.color === Color.WHITE ? blackPlayer : whitePlayer);
    }
    return (
        <div className="App">
            <Timer
                currentPlayer={currentPlayer}
                restart={restart}
            />
            <IndexBoard/>
            <BoardComponent
                board={board}
                setBoard={setBoard}
                currentPlayer={currentPlayer}
                swapPlayer={swapPlayer}
                selectedCell={selectedCell}
                setSelectedCell={setSelectedCell}
            />
            <LostFigures
                title='Чёрные фигуры'
                figures={board.lostBlackFigures}
            />
            <LostFigures
                title='Белые фигуры'
                figures={board.lostWhiteFigures}
            />
        </div>
    );
}

export default App;
