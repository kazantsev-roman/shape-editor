import IItem from "../Item/IItem"
import AbstractCommand from "./AbstractCommand"
import ShapeFactory from "../ShapeFactory/ShapeFactory"

class AddShapeCommand extends AbstractCommand
{
	constructor(shapes: Array<IItem>, type: string)
	{
		super()
		this.shapes = shapes
		this.shape = ShapeFactory.CreateShape(type)
	}

	protected DoExecute(): void
	{
		this.shapes.push(this.shape)
	}

	protected DoUnExecute(): void
	{
		this.shapes.pop()
	}

	private shapes: Array<IItem>
	private readonly shape: IItem
}

export default AddShapeCommand