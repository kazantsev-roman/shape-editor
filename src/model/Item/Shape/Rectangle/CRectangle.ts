import { v4 as uuid } from 'uuid'
import CShape from "../CShape"

class CRectangle extends CShape
{
	GetType(): string
	{
		return this.type
	}

	GetId(): string
	{
		return this.id
	}

	private readonly type = "Rectangle"
	private readonly id = uuid()
}

export default CRectangle