import IController from "./IController"
import IEditor from "../model/Editor/IEditor"
import IItem from "../model/Item/IItem"
import Point from "../common/types/Point"
import Size from "../common/types/Size"

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
		try
		{
			this.model.AddShape(type)
		}
		catch(error)
		{
			console.log(error)
		}
	}

	public AddImage(path: string): void
	{
		try
		{
			this.model.AddImage(path)
		}
		catch(error)
		{
			console.log(error)
		}
	}

	public DeleteItem(id: string): void
	{
		try
		{
			this.model.DeleteItem(id)
		}
		catch(error)
		{
			console.log(error)
		}
	}

	public ResizeItem(id: string, size: Size): void
	{
		try
		{
			this.model.ResizeItem(id, size)
		}
		catch(error)
		{
			console.log(error)
		}
	}

	public MoveItem(id: string, point: Point): void
	{
		try
		{
			this.model.MoveItem(id, point)
		}
		catch(error)
		{
			console.log(error)
		}
	}

	public CanUndo(): boolean
	{
		return this.model.CanUndo()
	}

	public Undo(): void
	{
		try
		{
			this.model.Undo()
		}
		catch(error)
		{
			console.log(error)
		}
	}

	public CanRedo(): boolean
	{
		return this.model.CanRedo()
	}

	public Redo(): void
	{
		try
		{
			this.model.Redo()
		}
		catch(error)
		{
			console.log(error)
		}
	}

	private model: IEditor
}

export default Controller