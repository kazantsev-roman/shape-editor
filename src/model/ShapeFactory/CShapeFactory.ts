import IShape from "../Shape/IShape"
import IShapeFactory from "./IShapeFactory"
import CRectangle from "../Shape/CRectangle"
import CTriangle from "../Shape/CTriangle"
import CEllipse from "../Shape/CEllipse"
import CImage from "../Shape/CImage"

class CShapeFactory implements IShapeFactory
{
	CreateShape(type: string, url: string): IShape
	CreateShape(type: string): IShape
	CreateShape(type: string, url?: string): IShape
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