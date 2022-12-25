import Point from "../utils/types/Point"
import Size from "../utils/types/Size"

interface IItem
{
	GetId(): string
	Resize(size: Size): void
	GetSize(): Size
	Move(point: Point): void
	GetLeftTopPoint(): Point
	GetType(): string
}

export default IItem