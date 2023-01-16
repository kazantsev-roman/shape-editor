import IItem from "../../../../../model/Item/IItem"
import Triangle from "../ItemsView/Triangle/Triangle"
import Rectangle from "../ItemsView/Rectangle/Rectangle"
import Ellipse from "../ItemsView/Ellipse/Ellipse"
import Image from "../ItemsView/Image/Image"
import isImage from "../../../../../model/utils/typeGuards/isImage"
import Frame from "../../../../../model/utils/types/Frame"

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