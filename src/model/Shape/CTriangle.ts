import CShape from "./CShape"

class CTriangle extends CShape
{
	GetType(): string
	{
		return this.type
	}

	private readonly type = "Triangle"
}

export default CTriangle