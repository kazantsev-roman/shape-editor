import IItem from "../Item/IItem"
import IEditor from "./IEditor"
import IHistory from "../History/IHistory"
import IObserver from "../../common/IObserver"
import Point from "../../common/types/Point"
import Size from "../../common/types/Size"
import History from "../History/History"
import AddShapeCommand from "../Commands/AddShapeCommand"
import DeleteShapeCommand from "../Commands/DeleteShapeCommand"
import ResizeShapeCommand from "../Commands/ResizeShapeCommand"
import MoveShapeCommand from "../Commands/MoveShapeCommand"
import AddImageCommand from "../Commands/AddImageCommand"
import IObservable from "../../common/IObservable"
import ICommand from "../Commands/ICommand"
import ItemsType from "../../common/types/itemsType";

class Editor implements IEditor, IObservable
{
	constructor()
	{
		this.history = new History()
	}

	GetItems(): Array<IItem>
	{
		return this.items
	}

	AddShape(type: string): void
	{
		const addItemCommand = new AddShapeCommand(this.items, type)
		this.ExecuteCommand(addItemCommand)
	}

	AddImage(path: string): void
	{
		const addImageCommand = new AddImageCommand(this.items, ItemsType.Image, path)
		this.ExecuteCommand(addImageCommand)
	}

	DeleteItem(id: string): void
	{
		const deleteShapeCommand = new DeleteShapeCommand(this.items, id)
		this.ExecuteCommand(deleteShapeCommand)
	}

	ResizeItem(id: string, size: Size): void
	{
		const resizeShapeCommand = new ResizeShapeCommand(this.items, size, id)
		this.ExecuteCommand(resizeShapeCommand)
	}

	MoveItem(id: string, point: Point): void
	{
		const moveShapeCommand = new MoveShapeCommand(this.items, point, id)
		this.ExecuteCommand(moveShapeCommand)
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
		this.observers.forEach(observer => observer.Update())
	}

	private ExecuteCommand(command: ICommand): void
	{
		this.history.ExecuteCommand(command)
		this.NotifyObservers()
	}

	private items: Array<IItem> = []
	private history: IHistory
	private observers: Array<IObserver> = []
}

export default Editor