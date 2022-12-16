import Point from "../types/Point"
import Size from "../types/Size"
import IShape from "../Shape/IShape"
import IEditor from "./IEditor"
import ISerialization from "../Serialization/ISerialization"
import IHistory from "../History/IHistory"
import CHistory from "../History/CHistory"
import CAddShapeCommand from "../Commands/CAddShapeCommand"
import CDeleteShapeCommand from "../Commands/CDeleteShapeCommand"
import CResizeShapeCommand from "../Commands/CResizeShapeCommand"
import CMoveShapeCommand from "../Commands/CMoveShapeCommand"

class CEditor implements IEditor
{
	constructor(serialization: ISerialization) {
		this.history = new CHistory()
		this.serialization = serialization
	}

	GetShapes(): Array<IShape>
	{
		return this.shapes;
	}

	AddShape(type: string, path: string): void
	AddShape(type: string): void
	AddShape(type: string, path?: string): void
	{
		const addShapeCommand = path !== undefined
			? new CAddShapeCommand(this.shapes, type, path)
			: new CAddShapeCommand(this.shapes, type)
		this.history.ExecuteCommand(addShapeCommand)
	}

	DeleteShape(id: string): void
	{
		const deleteShapeCommand = new CDeleteShapeCommand(this.shapes, id)
		this.history.ExecuteCommand(deleteShapeCommand)
	}

	ResizeShape(id: string, size: Size): void
	{
		const resizeShapeCommand = new CResizeShapeCommand(this.shapes, size, id)
		this.history.ExecuteCommand(resizeShapeCommand)
	}

	MoveShape(id: string, point: Point): void
	{
		const moveShapeCommand = new CMoveShapeCommand(this.shapes, point, id)
		this.history.ExecuteCommand(moveShapeCommand)
	}

	Undo(): void
	{
		this.history.Undo()
	}

	Redo(): void
	{
		this.history.Redo()
	}

	Upload(path: string): void
	{
		// TODO: реализовать десериализацию
		this.serialization.Deserialization()
	}

	Save(path: string, filename: string): void
	Save(filename: string): void
	Save(path: string, filename?: string): void
	{
		// TODO: реализовать сериализацию
		this.serialization.Serialization()
	}

	private shapes: Array<IShape> = []
	private history: IHistory
	private serialization: ISerialization
}

export default CEditor