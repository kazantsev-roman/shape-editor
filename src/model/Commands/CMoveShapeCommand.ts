import IItem from "../Item/IItem"
import Point from "../utils/types/Point"
import CAbstractCommand from "./CAbstractCommand"

class CMoveShapeCommand extends CAbstractCommand
{
	constructor(shapes: Array<IItem>, point: Point, id: string)
	{
		super()
		this.shapes = shapes
		this.newPoint = point
		this.shape = this.shapes.find(shape => shape.GetId() === id)
	}

	protected DoExecute(): void
	{
		this.oldPoint = this.shape
			? this.shape.GetFrame().leftTopPoint
			: this.oldPoint
		this.shape?.Move(this.newPoint)
	}

	protected DoUnExecute(): void
	{
		if (this.IsExecuted())
		{
			this.shape?.Move(this.oldPoint)
			return
		}

		// TODO: поменять ошибку
		throw Error("???")
	}

	private shapes: Array<IItem>
	private readonly shape: IItem | undefined
	private readonly newPoint: Point
	private oldPoint: Point = {x: 0, y: 0}
}

export default CMoveShapeCommand