import {Figure, enumFigureName} from "./Figure";
import Color from './Color'
import blackLogo from '../../assets/black-pawn.png'
import whiteLogo from '../../assets/white-pawn.png'
import color from "./Color";

export class Pawn extends Figure {

    isFirstStep = true;

    constructor(color, cell) {
        super(color, cell);
        this.logo = color === Color.BLACK ? blackLogo : whiteLogo;
        this.name = enumFigureName.PAWN;
    }

    canMove(target) {
        if(!super.canMove(target))
            return false;
        const direction = this.cell.figure?.color === color.BLACK ? 1 : -1;
        const firstStepDirection = this.cell.figure?.color === color.BLACK ? 2 : -2;

        // const direction = this.cell.figure?.color === color.WHITE ? -1 : 1;
        if ((target.y === this.cell.y + direction
                || (this.isFirstStep && target.y === this.cell.y + firstStepDirection))
            && target.x === this.cell.x
            && (this.cell.board.getCell(target.x, target.y).isEmpty())) {
            return true;
        }

        if (target.y === this.cell.y + direction
        && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
        && this.cell.isEnemy(target)) {
            return true;
        }

        return false;
    }

    moveFigure(target) {
        super.moveFigure(target);
        this.isFirstStep = false;
    }
}