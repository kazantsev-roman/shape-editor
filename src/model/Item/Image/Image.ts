import IImage from "./IImage"
import BaseItem from "../BaseItem"
import ItemsType from "../../../common/types/itemsType"
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
	protected readonly id = uuid()
	protected readonly type = ItemsType.Image
}

export default Image