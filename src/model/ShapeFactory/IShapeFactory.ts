import IItem from "../Item/IItem"

interface IShapeFactory
{
	CreateShape(type: string, url: string): IItem
	CreateShape(type: string): IItem
}

export default IShapeFactory