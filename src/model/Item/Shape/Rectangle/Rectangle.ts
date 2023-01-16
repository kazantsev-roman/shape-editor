import { v4 as uuid } from 'uuid'
import Shape from "../Shape"

class Rectangle extends Shape
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

export default Rectangle