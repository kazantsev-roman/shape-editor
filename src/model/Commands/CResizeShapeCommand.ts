import CAbstractCommand from "./CAbstractCommand"
import IShape from "../Shape/IShape"
import Size from "../types/Size"

class CResizeShapeCommand extends CAbstractCommand
{
	constructor(shapes: Array<IShape>, size: Size, id: string)
	{
		super()
		this.shapes = shapes
		this.newSize = size
		this.shape = this.shapes.find(shape => shape.GetId() == id)
	}

	protected DoExecute(): void
	{
		this.oldSize = this.shape
			? this.shape.GetSize()
			: this.oldSize
		this.shape?.Resize(this.newSize)
	}

	protected DoUnExecute(): void
	{
		if (this.IsExecuted())
		{
			this.shape?.Resize(this.oldSize)
		}

		// TODO: поменять ошибку
		throw "???"
	}

	private shapes: Array<IShape>
	private readonly shape: IShape | undefined
	private readonly newSize: Size
	private oldSize: Size = {width: 0, height: 0}
}

export default CResizeShapeCommand