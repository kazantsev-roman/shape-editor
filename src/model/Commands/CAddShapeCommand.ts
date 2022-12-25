import IItem from "../Item/IItem"
import CAbstractCommand from "./CAbstractCommand"
import CShapeFactory from "../ShapeFactory/CShapeFactory"

class CAddShapeCommand extends CAbstractCommand
{
	constructor(shapes: Array<IItem>, type: string)
	{
		super()
		this.shapes = shapes
		this.shape = new CShapeFactory().CreateShape(type)
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

	private shapes: Array<IItem>
	private readonly shape: IItem
}

export default CAddShapeCommand