import IShape from "../Shape/IShape"
import Point from "../types/Point"
import CAbstractCommand from "./CAbstractCommand"

class CMoveShapeCommand extends CAbstractCommand
{
	constructor(shapes: Array<IShape>, point: Point, id: string)
	{
		super()
		this.shapes = shapes
		this.newPoint = point
		this.shape = this.shapes.find(shape => shape.GetId() == id)
	}

	protected DoExecute(): void
	{
		this.oldPoint = this.shape
			? this.shape.GetLeftTopPoint()
			: this.oldPoint
		this.shape?.Move(this.newPoint)
	}

	protected DoUnExecute(): void
	{
		if (this.IsExecuted())
		{
			this.shape?.Move(this.oldPoint)
		}

		// TODO: поменять ошибку
		throw "???"
	}

	private shapes: Array<IShape>
	private readonly shape: IShape | undefined
	private readonly newPoint: Point
	private oldPoint: Point = {x: 0, y: 0}
}

export default CMoveShapeCommand