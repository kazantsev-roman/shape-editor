import CImage from "../Item/Image/CImage"
import IItem from "../Item/IItem"
import CAbstractCommand from "./CAbstractCommand"
import ConvertString from "../utils/string/ConvertString"
import CopyFile from "../utils/file/CopyFile"
import path from "path"
import IImage from "../Item/Image/IImage"

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
		const fileName: string = path.parse(this.shape.GetPath()).base
		this.convertedPath = ConvertString(fileName)

		CopyFile(this.shape.GetPath(), `./images/${this.convertedPath}`)
		this.shapes.push(this.shape)
	}

	protected DoUnExecute(): void
	{
		if (this.IsExecuted())
		{
			this.shapes.pop()
		}

		// TODO: поменять ошибку
		throw "???"
	}

	private shapes: Array<IItem>
	private readonly shape: IImage
	private convertedPath: string = ""
}

export default CAddImageCommand