import IItem from "../Item/IItem"

interface IShapeFactory
{
	CreateShape(type: string): IItem
}

export default IShapeFactory