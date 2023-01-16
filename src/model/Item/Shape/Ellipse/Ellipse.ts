import { v4 as uuid } from 'uuid'
import Shape from "../Shape"

class Ellipse extends Shape
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

export default Ellipse