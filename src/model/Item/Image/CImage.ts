import { v4 as uuid } from "uuid"
import IImage from "./IImage"
import Frame from "../../utils/types/Frame"
import Size from "../../utils/types/Size"
import Point from "../../utils/types/Point"

class CImage implements IImage
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
	private frame: Frame
	private readonly type = "Image"
	private readonly path: string
}

export default CImage