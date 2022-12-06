import {Figure, enumFigureName} from "./Figure";
import Color from './Color'
import blackLogo from '../../assets/black-king.png'
import whiteLogo from '../../assets/white-king.png'

export class King extends Figure {

    constructor(color, cell) {
        super(color, cell);
        this.logo = color === Color.BLACK ? blackLogo : whiteLogo;
        this.name = enumFigureName.KING;
    }

    canMove(target) {
        if(!super.canMove(target))
            return false;

        const dx = Math.abs(this.cell.x - target.x)
        const dy = Math.abs(this.cell.y - target.y)

        if (dx <= 1 && dy <= 1) {
            return true;
        }

        return false;
    }
}