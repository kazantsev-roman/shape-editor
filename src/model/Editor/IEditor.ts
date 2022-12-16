import IShape from "../Shape/IShape"
import Size from "../types/Size"
import Point from "../types/Point"

interface IEditor
{
	GetShapes(): Array<IShape>
	AddShape(type: string, path: string): void
	AddShape(type: string): void
	DeleteShape(id: string): void
	ResizeShape(id: string, size: Size): void
	MoveShape(id: string, point: Point): void
	Undo(): void
	Redo(): void
	Upload(path: string): void
	Save(path: string, filename: string): void
	Save(filename: string): void
}

export default IEditor