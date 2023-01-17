import IImage from "./IImage"
import BaseItem from "../BaseItem"
import Shapes from "../../../common/enum/shapes"
import { v4 as uuid } from "uuid";

class Image extends BaseItem implements IImage
{
	constructor(path: string)
	{
		super()
		this.path = path
	}

	GetPath(): string
	{
		return this.path
	}

	private readonly path: string
	readonly id = uuid()
	readonly type = Shapes.Image
}

export default Image