import { v4 as uuid } from 'uuid'
import BaseItem from "../../BaseItem"
import Shapes from "../../../../common/enum/shapes";

class Triangle extends BaseItem
{
	protected readonly type = Shapes.Triangle
	protected readonly id = uuid()
}

export default Triangle