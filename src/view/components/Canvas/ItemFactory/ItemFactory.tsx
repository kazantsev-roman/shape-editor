import IItem from "../../../../model/Item/IItem"
import Triangle from "../Elements/Items/Triangle/Triangle"
import Rectangle from "../Elements/Items/Rectangle/Rectangle"
import Ellipse from "../Elements/Items/Ellipse/Ellipse"
import Image from "../Elements/Items/Image/Image"
import isImage from "../../../../model/utils/typeGuards/isImage"
import Frame from "../../../../model/utils/types/Frame"

interface ItemFactoryProps
{
	item: IItem,
	frame: Frame
}

function ItemFactory({item, frame}: ItemFactoryProps)
{
	switch(item.GetType())
	{
	case "Triangle":
		return <Triangle
			frame={frame}
		/>
	case "Rectangle":
		return <Rectangle
			frame={frame}
		/>
	case "Ellipse":
		return <Ellipse
			frame={frame}
		/>
	case "Image":
		if(isImage(item))
		{
			return <Image
				path={item.GetPath()}
				frame={frame}
			/>
		}
	}
	return null
}

export default ItemFactory