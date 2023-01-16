import IController from "./IController"
import IEditor from "../model/Editor/IEditor"
import IItem from "../model/Item/IItem"
import Point from "../model/utils/types/Point"
import Size from "../model/utils/types/Size"

class Controller implements IController
{
	constructor(model: IEditor)
	{
		this.model = model
	}

	public GetItems(): Array<IItem>
	{
		return this.model.GetItems()
	}

	public AddShape(type: string): void
	{
		this.model.AddShape(type)
	}

	public AddImage(path: string): void
	{
		this.model.AddImage(path)
	}

	public DeleteItem(id: string): void
	{
		this.model.DeleteItem(id)
	}

	public ResizeItem(id: string, size: Size): void
	{
		this.model.ResizeItem(id, size)
	}

	public MoveItem(id: string, point: Point): void
	{
		this.model.MoveItem(id, point)
	}

	public CanUndo(): boolean
	{
		return this.model.CanUndo()
	}

	public Undo(): void
	{
		this.model.Undo()
	}

	public CanRedo(): boolean
	{
		return this.model.CanRedo()
	}

	public Redo(): void
	{
		this.model.Redo()
	}

	private model: IEditor
}

export default Controller