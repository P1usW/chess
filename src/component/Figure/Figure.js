export let enumFigureName = {
    FIGURE: 'Фигура',
    KING: 'Король',
    KNIGHT: 'Конь',
    PAWN: 'Пешка',
    QUEEN: 'Ферзь',
    ROOK: 'Ладья',
    BISHOP: 'Слон',
}

export class Figure {
    constructor(color, cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.name = enumFigureName.FIGURE;
        this.id = `${this.color + this.name}`
    }

    canMove(target) {
        if (target.figure?.color === this.color)
            return false;
        if (target.figure?.name === enumFigureName.KING)
            return false;
        return true;
    }

    moveFigure(target){

    }
}