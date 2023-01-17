import { v4 as uuid } from 'uuid'
import BaseItem from "../../BaseItem"
import Shapes from "../../../../common/enum/shapes"

class Ellipse extends BaseItem
{
	protected readonly type = Shapes.Ellipse
	protected readonly id = uuid()
}

export default Ellipse