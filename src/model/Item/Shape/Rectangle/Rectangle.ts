import { v4 as uuid } from 'uuid'
import Shape from "../Shape"
import Shapes from "../../../../common/enum/shapes";

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

	// TODO:избавитья от дублирования за счет абстрактных полей

	private readonly type = Shapes.Rectangle
	private readonly id = uuid()
}

export default Rectangle