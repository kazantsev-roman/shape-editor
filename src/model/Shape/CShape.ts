import IShape from "./IShape"
import Frame from "../types/Frame"
import Point from "../types/Point"
import Size from "../types/Size"
import { v4 as uuid } from 'uuid'

abstract class CShape implements IShape
{
	constructor()
	{
		this.id = uuid()
		this.frame = {
			leftTopPoint: {x: 50, y: 50},
			width: 100,
			height: 100
		}
	}

	abstract GetType(): string;

	GetId(): string
	{
		return this.id
	}

	GetLeftTopPoint(): Point
	{
		return this.frame.leftTopPoint
	}

	Move(point: Point): void
	{
		this.frame.leftTopPoint = point
	}

	GetSize(): Size
	{
		return {
			height: this.frame.height,
			width: this.frame.width
		}
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