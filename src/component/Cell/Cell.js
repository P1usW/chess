import Color from "../Figure/Color";

export class Cell {
    constructor(board, x, y, color, figure) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.board = board;
        this.available = false;
        this.id = `${this.x + this.y}`;
    }

    isEmpty() {
        return this.figure === null;
    }

    isEmptyVertical(target) {
        if (this.x !== target.x) {
            return false;
        }

        const min = Math.min(this.y, target.y);
        const max = Math.max(this.y, target.y);

        for (let y = min + 1; y < max; y++) {
            if(!this.board.getCell(this.x, y).isEmpty()) {
                return false;
            }
        }
        return true;
    }

    isEmptyHorizontal(target) {
        if (this.y !== target.y) {
            return false;
        }

        const min = Math.min(this.x, target.x);
        const max = Math.max(this.x, target.x);

        for (let x = min + 1; x < max; x++) {
            if(!this.board.getCell(x, this.y).isEmpty()) {
                return false;
            }
        }
        return true;
    }

    isEmptyDiagonal(target) {
        const absX = Math.abs(target.x - this.x)
        const absY = Math.abs(target.y - this.y)

        if(absX !== absY) {
            return false;
        }

        const dy = this.y < target.y ? 1: -1
        const dx = this.x < target.x ? 1: -1

        for (let i = 1; i < absY; i++) {
            if(!this.board.getCell(this.x + dx*i, this.y + dy*i).isEmpty())
                return false;
        }

        return true;
    }

    isEnemy(target) {
        if (target.figure) {
            return this.figure?.color !== target.figure.color;
        }
        return false;
    }

    setFigure(figure) {
        this.figure = figure;
        this.figure.cell = this;
    }

    moveFigure(target) {
        if (this.figure && this.figure?.canMove(target)) {
            this.figure.moveFigure(target);
            if (target.figure) {
                this.board.addLostFigure(target.figure);
            }
            target.setFigure(this.figure);
            this.figure = null;
        }
    }
}