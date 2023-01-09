import IItem from "../Item/IItem"
import IImage from "../Item/Image/IImage"
import CImage from "../Item/Image/CImage"
import CAbstractCommand from "./CAbstractCommand"

class CAddImageCommand extends CAbstractCommand
{
	constructor(shapes: Array<IItem>, type: string, path: string)
	{
		super()
		this.shapes = shapes
		this.shape = new CImage(path)
	}

	protected DoExecute(): void
	{
		this.shapes.push(this.shape)
	}

	protected DoUnExecute(): void
	{
		if(this.IsExecuted())
		{
			this.shapes.pop()
			return
		}

		// TODO: поменять ошибку
		throw Error("???")
	}

	private shapes: Array<IItem>
	private readonly shape: IImage
}

export default CAddImageCommand