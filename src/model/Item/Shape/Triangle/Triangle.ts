import { v4 as uuid } from 'uuid'
import Shape from "../Shape"

class Triangle extends Shape
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

export default Triangle