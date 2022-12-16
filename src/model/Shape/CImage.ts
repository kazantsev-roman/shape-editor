import CShape from "./CShape";

class CImage extends CShape
{
	constructor(path: string) {
		super()
		this.path = path
	}

	GetType(): string
	{
		return this.type
	}

	private readonly type = "Image"
	private readonly path: string
}

export default CImage