import IShape from "../Shape/IShape"
import CAbstractCommand from "./CAbstractCommand"
import CShapeFactory from "../ShapeFactory/CShapeFactory"

class CAddShapeCommand extends CAbstractCommand
{
	constructor(shapes: Array<IShape>, type: string, path: string = "")
	{
		super()
		this.shapes = shapes
		this.shape = path.length
			? new CShapeFactory().CreateShape(type)
			: new CShapeFactory().CreateShape(type, path)
	}

	protected DoExecute(): void
	{
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

	private shapes: Array<IShape>
	private readonly shape: IShape
}

export default CAddShapeCommand