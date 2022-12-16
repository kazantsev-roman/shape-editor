import Point from "../types/Point"
import Size from "../types/Size"

interface IShape
{
	GetId(): string
	GetType(): string
	Resize(size: Size): void
	GetSize(): Size
	Move(point: Point): void
	GetLeftTopPoint(): Point
}

export default IShape