import Point from "../utils/types/Point"
import Size from "../utils/types/Size"
import IItem from "../Item/IItem"
import IEditor from "./IEditor"
import ISerialization from "../Serialization/ISerialization"
import IHistory from "../History/IHistory"
import IObserver from "./IObserver"
import CHistory from "../History/CHistory"
import CAddShapeCommand from "../Commands/CAddShapeCommand"
import CDeleteShapeCommand from "../Commands/CDeleteShapeCommand"
import CResizeShapeCommand from "../Commands/CResizeShapeCommand"
import CMoveShapeCommand from "../Commands/CMoveShapeCommand"
import CAddImageCommand from "../Commands/CAddImageCommand"
import CSerializationJSON from "../Serialization/CSerializationJSON"

class CEditor implements IEditor
{
	constructor()
	{
		this.history = new CHistory()
		this.serialization = new CSerializationJSON()
	}

	GetShapes(): Array<IItem>
	{
		return this.shapes
	}

	AddShape(type: string, path: string): void
	AddShape(type: string): void
	AddShape(type: string, path?: string): void
	{
		const addItemCommand = path !== undefined
			? new CAddImageCommand(this.shapes, type, path)
			: new CAddShapeCommand(this.shapes, type)
		this.history.ExecuteCommand(addItemCommand)

		this.NotifyObservers()
	}

	DeleteShape(id: string): void
	{
		const deleteShapeCommand = new CDeleteShapeCommand(this.shapes, id)
		this.history.ExecuteCommand(deleteShapeCommand)

		this.NotifyObservers()
	}

	ResizeShape(id: string, size: Size): void
	{
		const resizeShapeCommand = new CResizeShapeCommand(this.shapes, size, id)
		this.history.ExecuteCommand(resizeShapeCommand)

		this.NotifyObservers()
	}

	MoveShape(id: string, point: Point): void
	{
		const moveShapeCommand = new CMoveShapeCommand(this.shapes, point, id)
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

	Upload(path: string): void
	{
		// TODO: реализовать десериализацию
		this.serialization.Deserialization()

		this.NotifyObservers()
	}

	Save(path: string, filename: string): void
	Save(filename: string): void
	Save(path: string, filename?: string): void
	{
		// TODO: реализовать сериализацию
		this.serialization.Serialization()

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

	NotifyObservers(): void
	{
		this.observers.forEach(observer => observer())
	}

	private shapes: Array<IItem> = []
	private observers: Array<IObserver> = []
	private history: IHistory
	private serialization: ISerialization
}

export default CEditor