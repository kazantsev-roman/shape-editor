import IItem from "../Item/IItem"
import Point from "../../common/types/Point"
import AbstractCommand from "./AbstractCommand"

class MoveShapeCommand extends AbstractCommand
{
	constructor(shapes: Array<IItem>, point: Point, id: string)
	{
		super()
		this.shapes = shapes
		this.newPoint = point
		this.shape = this.shapes.find(shape => shape.GetId() === id) as IItem
	}

	protected DoExecute(): void
	{
		this.oldPoint = this.shape
			? this.shape.GetFrame().leftTopPoint
			: this.oldPoint
		this.shape.Move(this.newPoint)
	}

	protected DoUnExecute(): void
	{
		this.shape.Move(this.oldPoint)
	}

	private shapes: Array<IItem>
	private readonly shape: IItem
	private readonly newPoint: Point
	private oldPoint: Point = {x: 0, y: 0}
}

export default MoveShapeCommand