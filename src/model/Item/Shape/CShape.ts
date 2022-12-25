import IItem from "../IItem"
import Frame from "../../utils/types/Frame"
import Point from "../../utils/types/Point"
import Size from "../../utils/types/Size"
import { v4 as uuid } from 'uuid'

abstract class CShape implements IItem
{
	constructor()
	{
		this.id = uuid()
		this.frame = {
			leftTopPoint: {x: 50, y: 50},
			width: 200,
			height: 100
		}
	}

	abstract GetType(): string

	GetId(): string
	{
		return this.id
	}

	GetLeftTopPoint(): Point
	{
		return this.frame.leftTopPoint
	}

	GetSize(): Size
	{
		return {
			height: this.frame.height,
			width: this.frame.width
		}
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

	private readonly id: string
	private frame: Frame
}

export default CShape