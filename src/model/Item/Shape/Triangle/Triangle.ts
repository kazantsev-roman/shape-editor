import { v4 as uuid } from 'uuid'
import BaseItem from "../../BaseItem"
import ItemsType from "../../../../common/types/itemsType";

class Triangle extends BaseItem
{
	protected readonly type = ItemsType.Triangle
	protected readonly id = uuid()
}

export default Triangle