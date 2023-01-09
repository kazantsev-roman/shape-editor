import Size from "../../../../model/utils/types/Size"
import Point from "../../../../model/utils/types/Point"
import IItem from "../../../../model/Item/IItem"
import Triangle from "../Elements/Items/Triangle/Triangle"
import Rectangle from "../Elements/Items/Rectangle/Rectangle"
import Ellipse from "../Elements/Items/Ellipse/Ellipse"
import isImage from "../../../../model/utils/typeGuards/isImage"
import Image from "../Elements/Items/Image/Image"
import Item from "../Elements/Item/Item"

interface ItemFactoryProps
{
	item: IItem,
	resizeItem: (id: string, size: Size) => void,
	moveItem: (id: string, point: Point) => void
}

function ItemFactory({item, resizeItem, moveItem}: ItemFactoryProps)
{
	let itemElement: JSX.Element | null = null

	switch(item.GetType())
	{
	case "Triangle":
		itemElement = <Triangle
			id={item.GetId()}
			frame={item.GetFrame()}
		/>
		break
	case "Rectangle":
		itemElement = <Rectangle
			id={item.GetId()}
			frame={item.GetFrame()}
		/>
		break
	case "Ellipse":
		itemElement = <Ellipse
			id={item.GetId()}
			frame={item.GetFrame()}
		/>
		break
	case "Image":
		if(isImage(item))
		{
			itemElement = <Image
				id={item.GetId()}
				path={item.GetPath()}
				frame={item.GetFrame()}
			/>
			break
		}
	}

	return (
		<>
			{itemElement &&
                <Item id={item.GetId()} frame={item.GetFrame()} resizeItem={resizeItem} moveItem={moveItem}>
					{itemElement}
                </Item>
			}
		</>
	)
}

export default ItemFactory