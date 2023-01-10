import IItem from "../Item/IItem"
import IShapeFactory from "./IShapeFactory"
import CRectangle from "../Item/Shape/Rectangle/CRectangle"
import CTriangle from "../Item/Shape/Triangle/CTriangle"
import CEllipse from "../Item/Shape/Ellipse/CEllipse"

class CShapeFactory implements IShapeFactory
{
	CreateShape(type: string): IItem
	{
		if(type === "Rectangle")
		{
			return new CRectangle()
		}
		if(type === "Triangle")
		{
			return new CTriangle()
		}
		if(type === "Ellipse")
		{
			return new CEllipse()
		}

		// TODO: поменять ошибку
		throw Error("Error shape type")
	}
}

export default CShapeFactory