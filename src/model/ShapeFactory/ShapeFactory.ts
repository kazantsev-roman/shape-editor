import IItem from "../Item/IItem"
import Rectangle from "../Item/Shape/Rectangle/Rectangle"
import Triangle from "../Item/Shape/Triangle/Triangle"
import Ellipse from "../Item/Shape/Ellipse/Ellipse"
import ItemsType from "../../common/types/itemsType"

class ShapeFactory
{
	static CreateShape(type: string): IItem
	{
		switch(type)
		{
		case ItemsType.Triangle:
			return new Triangle()
		case ItemsType.Rectangle:
			return new Rectangle()
		case ItemsType.Ellipse:
			return new Ellipse()
		}

		throw Error("incorrect shape type")
	}
}

export default ShapeFactory