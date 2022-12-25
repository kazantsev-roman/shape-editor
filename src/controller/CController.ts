import IController from "./IController"
import IEditor from "../model/Editor/IEditor"
import IItem from "../model/Item/IItem"
import Point from "../model/utils/types/Point"
import Size from "../model/utils/types/Size"

class CController implements IController
{
	constructor(model: IEditor)
	{
		this.model = model
	}

	public GetShapes(): Array<IItem>
	{
		return this.model.GetShapes()
	}

	public AddShape(type: string): void
	{
		this.model.AddShape(type)
	}

	public AddImage(path: string): void
	{
		this.model.AddShape("Image", path)
	}

	public DeleteItem(id: string): void
	{
		this.model.DeleteShape(id)
	}

	public MoveItem(id: string, point: Point): void
	{
		this.model.MoveShape(id, point)
	}

	public ResizeItem(id: string, size: Size): void
	{
		this.model.ResizeShape(id, size)
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

	public Save(filename: string, path?: string): void
	{
		path !== undefined
			? this.model.Save(filename, path)
			: this.model.Save(filename)
	}

	public Upload(path: string): void
	{
		this.model.Upload(path)
	}

	private model: IEditor
}

export default CController