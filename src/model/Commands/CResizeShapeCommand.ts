import IItem from "../Item/IItem"
import Size from "../utils/types/Size"
import CAbstractCommand from "./CAbstractCommand"

class CResizeShapeCommand extends CAbstractCommand
{
	constructor(shapes: Array<IItem>, size: Size, id: string)
	{
		super()
		this.shapes = shapes
		this.newSize = size
		this.shape = this.shapes.find(shape => shape.GetId() === id)
	}

	protected DoExecute(): void
	{
		this.oldSize = this.shape
			? {width: this.shape.GetFrame().width, height: this.shape.GetFrame().height}
			: this.oldSize
		this.shape?.Resize(this.newSize)
	}

	protected DoUnExecute(): void
	{
		if(this.IsExecuted())
		{
			this.shape?.Resize(this.oldSize)
			return
		}

		// TODO: поменять ошибку
		throw Error("???")
	}

	private shapes: Array<IItem>
	private readonly shape: IItem | undefined
	private readonly newSize: Size
	private oldSize: Size = {width: 0, height: 0}
}

export default CResizeShapeCommand