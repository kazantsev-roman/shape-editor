import Point from "../utils/types/Point"
import Size from "../utils/types/Size"
import Frame from "../utils/types/Frame";

interface IItem
{
	GetId(): string
	Resize(size: Size): void
	Move(point: Point): void
	GetFrame(): Frame
	GetType(): string
}

export default IItem