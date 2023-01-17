import { v4 as uuid } from 'uuid'
import BaseItem from "../../BaseItem"
import ItemsType from "../../../../common/types/itemsType"

class Ellipse extends BaseItem
{
	protected readonly type = ItemsType.Ellipse
	protected readonly id = uuid()
}

export default Ellipse