import IItem from "../Item/IItem"
import IImage from "../Item/Image/IImage"
import Image from "../Item/Image/Image"
import AbstractCommand from "./AbstractCommand"

class AddImageCommand extends AbstractCommand
{
	constructor(shapes: Array<IItem>, type: string, path: string)
	{
		super()
		this.shapes = shapes
		this.shape = new Image(path)
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
	private readonly shape: IImage
}

export default AddImageCommand