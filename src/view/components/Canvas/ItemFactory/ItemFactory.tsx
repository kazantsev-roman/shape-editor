import Size from "../../../../model/utils/types/Size"
import Point from "../../../../model/utils/types/Point"
import IItem from "../../../../model/Item/IItem"
import Triangle from "../Elements/Items/Triangle/Triangle"
import Rectangle from "../Elements/Items/Rectangle/Rectangle"
import Ellipse from "../Elements/Items/Ellipse/Ellipse"
import isImage from "../../../../model/utils/typeGuards/isImage"
import Image from "../Elements/Items/Image/Image"

interface ItemFactoryProps
{
	item: IItem,
	resizeItem: (id: string, size: Size) => void,
	moveItem: (id: string, point: Point) => void
}

function ItemFactory({item, resizeItem, moveItem}: ItemFactoryProps)
{
	switch(item.GetType())
	{
	case "Triangle":
		return <Triangle
			id={item.GetId()}
			frame={item.GetFrame()}
			resizeItem={resizeItem}
			moveItem={moveItem}
		/>
	case "Rectangle":
		return <Rectangle
			id={item.GetId()}
			frame={item.GetFrame()}
			resizeItem={resizeItem}
			moveItem={moveItem}
		/>
	case "Ellipse":
		return <Ellipse
			id={item.GetId()}
			frame={item.GetFrame()}
			resizeItem={resizeItem}
			moveItem={moveItem}
		/>
	case "Image":
		if(isImage(item))
		{
			return <Image
				id={item.GetId()}
				path={item.GetPath()}
				frame={item.GetFrame()}
				resizeItem={resizeItem}
				moveItem={moveItem}
			/>
		}
		return null
	default:
		return null
	}
}

export default ItemFactory