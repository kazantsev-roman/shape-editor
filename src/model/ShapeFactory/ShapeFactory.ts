import IItem from "../Item/IItem"
import IShapeFactory from "./IShapeFactory"
import Rectangle from "../Item/Shape/Rectangle/Rectangle"
import Triangle from "../Item/Shape/Triangle/Triangle"
import Ellipse from "../Item/Shape/Ellipse/Ellipse"

class ShapeFactory implements IShapeFactory
{
	CreateShape(type: string): IItem
	{
		if(type === "Rectangle")
		{
			return new Rectangle()
		}
		if(type === "Triangle")
		{
			return new Triangle()
		}
		if(type === "Ellipse")
		{
			return new Ellipse()
		}

		throw Error("incorrect shape type")
	}
}

export default ShapeFactory