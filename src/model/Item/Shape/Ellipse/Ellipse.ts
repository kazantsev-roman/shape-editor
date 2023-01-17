import { v4 as uuid } from 'uuid'
import Shape from "../Shape"
import Shapes from "../../../../common/enum/shapes";

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

	private readonly type = Shapes.Ellipse
	private readonly id = uuid()
}

export default Ellipse