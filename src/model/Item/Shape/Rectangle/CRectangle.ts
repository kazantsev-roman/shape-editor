import CShape from "../CShape"
import { v4 as uuid } from 'uuid'

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