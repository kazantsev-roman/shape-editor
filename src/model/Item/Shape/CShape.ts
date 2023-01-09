import IItem from "../IItem"
import Frame from "../../utils/types/Frame"
import Point from "../../utils/types/Point"
import Size from "../../utils/types/Size"

abstract class CShape implements IItem
{
	constructor()
	{
		this.frame = {
			leftTopPoint: {x: 50, y: 50},
			width: 200,
			height: 100
		}
	}

	abstract GetType(): string
	abstract GetId(): string



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

	private frame: Frame
}

export default CShape