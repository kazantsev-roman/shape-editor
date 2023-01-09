import { v4 as uuid } from 'uuid'
import CShape from "../CShape"

class CTriangle extends CShape
{
	GetType(): string
	{
		return this.type
	}

	GetId(): string
	{
		return this.id
	}

	private readonly type = "Triangle"
	private readonly id = uuid()
}

export default CTriangle