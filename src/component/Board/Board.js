import {Cell} from "../Cell/Cell";
import {Queen} from "../Figure/Queen";
import {Knight} from "../Figure/Knight";
import {Pawn} from "../Figure/Pawn";
import {Rook} from "../Figure/Rook";
import {Bishop} from "../Figure/Bishop";
import {King} from "../Figure/King";
import Color from "../Figure/Color";

export default class Board {
    cells = []
    lostWhiteFigures = []
    lostBlackFigures = []

    initCells() {
        for (let i=0; i<8; i++) {
            let rowElem = [];
            for (let j=0; j<8; j++) {
                if ((i + j) % 2 !== 0) {
                    rowElem.push(new Cell(this, j, i, 'black', null));
                } else {
                    rowElem.push(new Cell(this, j, i, 'white', null));
                }
            }
            this.cells.push(rowElem);
        }
    }

    getCell(x, y) {
        return this.cells[y][x];
    }

    highlightCells(selectedCell) {
        for (let i = 0; i < this.cells.length; i++){
            const row = this.cells[i];
            for (let j = 0; j < row.length; j++) {
                const target = row[j];
                target.available = !!selectedCell?.figure?.canMove(target);
            }
        }
    }

    addLostFigure(figure) {
        figure.color === Color.BLACK ? this.lostBlackFigures.push(figure) : this.lostWhiteFigures.push(figure);
    }

    getCopyBoard() {
        const newBoard = new Board();
        newBoard.cells = this.cells;
        newBoard.lostWhiteFigures = this.lostWhiteFigures;
        newBoard.lostBlackFigures = this.lostBlackFigures;
        return newBoard;
    }

    _addPawns () {
        for (let j=0; j<8; j++) {
            new Pawn(Color.BLACK, this.getCell(j, 1));
            new Pawn(Color.WHITE, this.getCell(j, 6));
        }
    }

    _addKings () {
        new King(Color.BLACK, this.getCell(3,0));
        new King(Color.WHITE, this.getCell(3,7));
    }

    _addQueens () {
        new Queen(Color.BLACK, this.getCell(4,0));
        new Queen(Color.WHITE, this.getCell(4,7));
    }

    _addKnights () {
        new Knight(Color.BLACK, this.getCell(1,0));
        new Knight(Color.BLACK, this.getCell(6,0));
        new Knight(Color.WHITE, this.getCell(1,7));
        new Knight(Color.WHITE, this.getCell(6,7));
    }

    _addRooks () {
        new Rook(Color.BLACK, this.getCell(0,0));
        new Rook(Color.BLACK, this.getCell(7,0));
        new Rook(Color.WHITE, this.getCell(0,7));
        new Rook(Color.WHITE, this.getCell(7,7));
    }

    _addBishops () {
        new Bishop(Color.BLACK, this.getCell(2,0));
        new Bishop(Color.BLACK, this.getCell(5,0));
        new Bishop(Color.WHITE, this.getCell(2,7));
        new Bishop(Color.WHITE, this.getCell(5,7));
    }

    addFigure() {
        this._addQueens();
        this._addKings();
        this._addKnights();
        this._addRooks();
        this._addBishops();
        this._addPawns();
    }
}
