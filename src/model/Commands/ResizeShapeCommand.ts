import IItem from "../Item/IItem"
import Size from "../../common/types/Size"
import AbstractCommand from "./AbstractCommand"

class ResizeShapeCommand extends AbstractCommand
{
	constructor(shapes: Array<IItem>, size: Size, id: string)
	{
		super()
		this.shapes = shapes
		this.newSize = size
		this.shape = this.shapes.find(shape => shape.GetId() === id) as IItem
	}

	protected DoExecute(): void
	{
		this.oldSize = this.shape
			? {width: this.shape.GetFrame().width, height: this.shape.GetFrame().height}
			: this.oldSize
		this.shape.Resize(this.newSize)
	}

	protected DoUnExecute(): void
	{
		this.shape.Resize(this.oldSize)
	}

	private shapes: Array<IItem>
	private readonly shape: IItem
	private readonly newSize: Size
	private oldSize: Size = {width: 0, height: 0}
}

export default ResizeShapeCommand