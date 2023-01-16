import IItem from "../Item/IItem"
import AbstractCommand from "./AbstractCommand"

class DeleteShapeCommand extends AbstractCommand
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

		throw Error("incorrect id specified")
	}

	protected DoUnExecute(): void
	{
		if(this.shape)
		{
			this.shapes.splice(this.position, 0, this.shape)
		}
	}

	private shapes: Array<IItem>
	private readonly position: number = 0
	private shape: IItem | null = null
}

export default DeleteShapeCommand