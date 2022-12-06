import {Figure, enumFigureName} from "./Figure";
import Color from './Color'
import blackLogo from '../../assets/black-queen.png'
import whiteLogo from '../../assets/white-queen.png'

export class Queen extends Figure {
    constructor(color, cell) {
        super(color, cell);
        this.logo = color === Color.BLACK ? blackLogo : whiteLogo;
        this.name = enumFigureName.QUEEN;
    }

    canMove(target) {
        if(!super.canMove(target))
            return false;
        if(this.cell.isEmptyVertical(target))
            return true;
        if(this.cell.isEmptyHorizontal(target))
            return true;
        if(this.cell.isEmptyDiagonal(target))
            return true;
        return false;
    }
}