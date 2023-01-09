import { v4 as uuid } from 'uuid'
import CShape from "../CShape"

class CEllipse extends CShape
{
	GetType(): string
	{
		return this.type
	}

	GetId(): string
	{
		return this.id
	}

	private readonly type = "Ellipse"
	private readonly id = uuid()
}

export default CEllipse