import { v4 as uuid } from 'uuid'
import BaseItem from "../../BaseItem"
import ItemsType from "../../../../common/types/itemsType";

class Rectangle extends BaseItem
{
	protected readonly type = ItemsType.Rectangle
	protected readonly id = uuid()
}

export default Rectangle