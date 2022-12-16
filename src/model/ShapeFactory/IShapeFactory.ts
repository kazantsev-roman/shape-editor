import IShape from "../Shape/IShape"

interface IShapeFactory
{
	CreateShape(type: string, url: string): IShape
	CreateShape(type: string): IShape
}

export default IShapeFactory