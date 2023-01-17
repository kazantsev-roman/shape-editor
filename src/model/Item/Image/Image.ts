import { v4 as uuid } from "uuid"
import IImage from "./IImage"
import Frame from "../../../common/types/Frame"
import Size from "../../../common/types/Size"
import Point from "../../../common/types/Point"
import Shapes from "../../../common/enum/shapes";

class Image implements IImage
{
	constructor(path: string)
	{
		this.path = path
		this.id = uuid()
		this.frame = {
			leftTopPoint: {x: 50, y: 50},
			width: 100,
			height: 100
		}
	}

	// TODO: избавиться от дублирования
	GetType(): string
	{
		return this.type
	}

	GetPath(): string
	{
		return this.path
	}

	GetId(): string
	{
		return this.id
	}

	GetFrame(): Frame
	{
		return this.frame
	}

	Move(point: Point): void
	{
		this.frame.leftTopPoint = point
	}

	Resize(size: Size): void
	{
		this.frame.width = size.width
		this.frame.height = size.height
	}

	private readonly id: string
	private readonly frame: Frame
	private readonly type = Shapes.Image
	private readonly path: string
}

export default Image