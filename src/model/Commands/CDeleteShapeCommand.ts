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
		if(this.position > -1)
		{
			this.shape = this.shapes[this.position]
			this.shapes.splice(this.position, 1)
			return
		}

		// TODO: поменять ошибку
		throw Error("incorrect id")
	}

	protected DoUnExecute(): void
	{
		if(this.IsExecuted() && this.shape)
		{
			this.shapes.splice(this.position, 0, this.shape)
			return
		}

		// TODO: поменять ошибку
		throw Error("???")
	}

	private shapes: Array<IItem>
	private readonly position: number = 0
	private shape: IItem | null = null
}

export default CDeleteShapeCommand