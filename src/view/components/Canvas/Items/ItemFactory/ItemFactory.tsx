import IItem from "../../../../../model/Item/IItem"
import Triangle from "../ItemsView/Triangle/Triangle"
import Rectangle from "../ItemsView/Rectangle/Rectangle"
import Ellipse from "../ItemsView/Ellipse/Ellipse"
import Image from "../ItemsView/Image/Image"
import isImage from "../../../../../model/utils/typeGuards/isImage"
import Frame from "../../../../../common/types/Frame"
import Shapes from "../../../../../common/enum/shapes";

interface ItemFactoryProps
{
	item: IItem,
	frame: Frame
}

function ItemFactory({item, frame}: ItemFactoryProps)
{
	switch(item.GetType())
	{
	case Shapes.Triangle:
		return <Triangle
			frame={frame}
		/>
	case Shapes.Rectangle:
		return <Rectangle
			frame={frame}
		/>
	case Shapes.Ellipse:
		return <Ellipse
			frame={frame}
		/>
	case Shapes.Image:
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