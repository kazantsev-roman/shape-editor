import CShape from "./CShape"

class CEllipse extends CShape
{
	GetType(): string
	{
		return this.type
	}

	private readonly type = "Ellipse"
}

export default CEllipse