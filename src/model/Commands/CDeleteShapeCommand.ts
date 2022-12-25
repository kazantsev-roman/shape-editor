import IItem from "../Item/IItem"
import CAbstractCommand from "./CAbstractCommand"

class CDeleteShapeCommand extends CAbstractCommand
{
	constructor(shapes: Array<IItem>, id: string)
	{
		super()
		this.shapes = shapes
		this.position = this.shapes.findIndex(shape => shape.GetId() === id)
	}

	protected DoExecute(): void
	{
		if (this.position > -1)
		{
			this.shape = this.shapes[this.position]
			this.shapes.splice(this.position, 1)
		}

		// TODO: поменять ошибку
		throw "incorrect id"
	}

	protected DoUnExecute(): void
	{
		if (this.IsExecuted() && this.shape)
		{
			this.shapes.splice(this.position, 0, this.shape)
		}

		// TODO: поменять ошибку
		throw "???"
	}

	private shapes: Array<IItem>
	private readonly position: number = 0
	private shape: IItem | null = null
}

export default CDeleteShapeCommand