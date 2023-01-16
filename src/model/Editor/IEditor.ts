import IItem from "../Item/IItem"
import Size from "../utils/types/Size"
import Point from "../utils/types/Point"

interface IEditor
{
	GetItems(): Array<IItem>

	AddShape(type: string): void

	AddImage(path: string): void

	DeleteItem(id: string): void

	ResizeItem(id: string, size: Size): void

	MoveItem(id: string, point: Point): void

	CanUndo(): boolean

	Undo(): void

	CanRedo(): boolean

	Redo(): void
}

export default IEditor