import IItem from "../model/Item/IItem"
import Size from "../model/utils/types/Size"
import Point from "../model/utils/types/Point"

interface IController
{
	GetShapes(): Array<IItem>
	AddShape(type: string): void
	AddImage(path?: string): void
	DeleteItem(id: string): void
	ResizeItem(id: string, size: Size): void
	MoveItem(id: string, point: Point): void
	Undo(): void
	Redo(): void
	Upload(path: string): void
	Save(filename: string, path?: string): void
}

export default IController