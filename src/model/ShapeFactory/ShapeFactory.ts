import IItem from "../Item/IItem"
import Rectangle from "../Item/Shape/Rectangle/Rectangle"
import Triangle from "../Item/Shape/Triangle/Triangle"
import Ellipse from "../Item/Shape/Ellipse/Ellipse"

class ShapeFactory
{
	static CreateShape(type: string): IItem
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