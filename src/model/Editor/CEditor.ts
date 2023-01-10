import IItem from "../Item/IItem"
import IEditor from "./IEditor"
import IHistory from "../History/IHistory"
import IObserver from "./IObserver"
import Point from "../utils/types/Point"
import Size from "../utils/types/Size"
import CHistory from "../History/CHistory"
import CAddShapeCommand from "../Commands/CAddShapeCommand"
import CDeleteShapeCommand from "../Commands/CDeleteShapeCommand"
import CResizeShapeCommand from "../Commands/CResizeShapeCommand"
import CMoveShapeCommand from "../Commands/CMoveShapeCommand"
import CAddImageCommand from "../Commands/CAddImageCommand"

class CEditor implements IEditor
{
	constructor()
	{
		this.history = new CHistory()
	}

	GetItems(): Array<IItem>
	{
		return this.items
	}

	AddShape(type: string, path: string): void
	AddShape(type: string): void
	AddShape(type: string, path?: string): void
	{
		const addItemCommand = path !== undefined
			? new CAddImageCommand(this.items, type, path)
			: new CAddShapeCommand(this.items, type)
		this.history.ExecuteCommand(addItemCommand)

		this.NotifyObservers()
	}

	DeleteShape(id: string): void
	{
		const deleteShapeCommand = new CDeleteShapeCommand(this.items, id)
		this.history.ExecuteCommand(deleteShapeCommand)

		this.NotifyObservers()
	}

	ResizeShape(id: string, size: Size): void
	{
		const resizeShapeCommand = new CResizeShapeCommand(this.items, size, id)
		this.history.ExecuteCommand(resizeShapeCommand)

		this.NotifyObservers()
	}

	MoveShape(id: string, point: Point): void
	{
		const moveShapeCommand = new CMoveShapeCommand(this.items, point, id)
		this.history.ExecuteCommand(moveShapeCommand)

		this.NotifyObservers()
	}

	CanUndo(): boolean
	{
		return this.history.CanUndo()
	}

	Undo(): void
	{
		this.history.Undo()

		this.NotifyObservers()
	}

	CanRedo(): boolean
	{
		return this.history.CanRedo()
	}

	Redo(): void
	{
		this.history.Redo()

		this.NotifyObservers()
	}

	RegisterObserver(observer: IObserver): void
	{
		this.observers.push(observer)
	}

	RemoveObserver(observer: IObserver): void
	{
		this.observers.filter((element: IObserver) => element !== observer)
	}

	private NotifyObservers(): void
	{
		this.observers.forEach(observer => observer())
	}

	private items: Array<IItem> = []
	private observers: Array<IObserver> = []
	private history: IHistory
}

export default CEditor