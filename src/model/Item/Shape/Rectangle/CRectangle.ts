import CShape from "../CShape"

class CRectangle extends CShape
{
	GetType(): string
	{
		return this.type
	}

	private readonly type = "Rectangle"
}

export default CRectangle