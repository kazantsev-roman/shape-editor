import IItem from "../Item/IItem"
import IShapeFactory from "./IShapeFactory"
import CRectangle from "../Item/Shape/Rectangle/CRectangle"
import CTriangle from "../Item/Shape/Triangle/CTriangle"
import CEllipse from "../Item/Shape/Ellipse/CEllipse"
import CImage from "../Item/Image/CImage"

class CShapeFactory implements IShapeFactory
{
	CreateShape(type: string, url: string): IItem
	CreateShape(type: string): IItem
	CreateShape(type: string, url?: string): IItem
	{
		if (type === "Rectangle")
		{
			return new CRectangle()
		}
		if (type === "Triangle")
		{
			return new CTriangle()
		}
		if (type === "Ellipse")
		{
			return new CEllipse()
		}
		if (type === "Image")
		{
			if (!url)
			{
				// TODO: поменять ошибку
				throw "NO URL"
			}

			return new CImage(url)
		}

		// TODO: поменять ошибку
		throw "Error shape type"
	}
}

export default CShapeFactory