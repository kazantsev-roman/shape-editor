import { v4 as uuid } from 'uuid'
import BaseItem from "../../BaseItem"
import Shapes from "../../../../common/enum/shapes";

class Rectangle extends BaseItem
{
	protected readonly type = Shapes.Rectangle
	protected readonly id = uuid()
}

export default Rectangle