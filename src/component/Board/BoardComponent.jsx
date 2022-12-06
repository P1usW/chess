import React, {useEffect, useState} from 'react';
import CellComponent from "../Cell/CellComponent";
import LetterBoard from "../LetterBoard";


const BoardComponent = ({board, setBoard, currentPlayer, swapPlayer, selectedCell, setSelectedCell}) => {


    function click(cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            swapPlayer();
            setSelectedCell(null);
        } else if (selectedCell && selectedCell === cell) {
            setSelectedCell(null);
        } else {
            if (cell.figure?.color === currentPlayer?.color)
            setSelectedCell(cell);
        }
    }

    useEffect(() =>{
        highlightCells();
        updateBoard();
    },[selectedCell])

    function highlightCells() {
        board.highlightCells(selectedCell);
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
    }

    return (
        <div>
            <h3>Текуший игрок {currentPlayer?.color}</h3>
            <div className='board'>
                {board.cells.map((row, index) =>
                    <React.Fragment key={index}>
                        {row.map((cell) =>
                            <CellComponent
                                click={click}
                                cell={cell}
                                key={cell.id}
                                selected={cell.x === selectedCell?.x && cell.y === selectedCell.y}
                                />
                        )}
                    </React.Fragment>
                )}
            </div>
            <LetterBoard/>
        </div>

    );
};

export default BoardComponent;