import IItem from "./IItem"
import Frame from "../../common/types/Frame"
import Point from "../../common/types/Point"
import Size from "../../common/types/Size"
import ItemsType from "../../common/types/itemsType"

abstract class BaseItem implements IItem
{
	constructor()
	{
		this.frame = {
			leftTopPoint: {x: 50, y: 50},
			width: 200,
			height: 100
		}
	}

	GetType(): string
	{
		return this.type
	}

	GetId(): string
	{
		return this.id
	}

	GetFrame(): Frame
	{
		return this.frame
	}

	Move(point: Point): void
	{
		this.frame.leftTopPoint = point
	}

	Resize(size: Size): void
	{
		this.frame.width = size.width
		this.frame.height = size.height
	}

	private readonly frame: Frame
	protected abstract readonly type: ItemsType
	protected abstract readonly id: string
}

export default BaseItem