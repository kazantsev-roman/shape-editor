import Point from "../../common/types/Point"
import Size from "../../common/types/Size"
import Frame from "../../common/types/Frame"

interface IItem
{
	GetId(): string

	Resize(size: Size): void

	Move(point: Point): void

	GetFrame(): Frame

	GetType(): string
}

export default IItem