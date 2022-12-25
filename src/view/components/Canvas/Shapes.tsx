import Triangle from "./Elements/Triangle/Triangle"
import Rectangle from "./Elements/Rectangle/Rectangle"
import Ellipse from "./Elements/Ellipse/Ellipse"
import isImage from "../../../model/utils/typeGuards/isImage"
import Image from "./Elements/Image/Image"
import IItem from "../../../model/Item/IItem"
import Size from "../../../model/utils/types/Size"
import Point from "../../../model/utils/types/Point"

interface ShapesProps
{
	items: Array<IItem>
	resizeItem: (id: string, size: Size) => void
	moveItem: (id: string, point: Point) => void
}

export function Shapes(
	{
		items,
		resizeItem,
		moveItem
	}: ShapesProps)
{
	return (
		<>
			{items.map(shape =>
			{
				switch(shape.GetType())
				{
				case "Triangle":
					return <Triangle
						key={shape.GetId()}
						id={shape.GetId()}
						x={shape.GetLeftTopPoint().x}
						y={shape.GetLeftTopPoint().y}
						width={shape.GetSize().width}
						height={shape.GetSize().height}
						resizeItem={resizeItem}
						moveItem={moveItem}
					/>
				case "Rectangle":
					return <Rectangle
						key={shape.GetId()}
						id={shape.GetId()}
						x={shape.GetLeftTopPoint().x}
						y={shape.GetLeftTopPoint().y}
						width={shape.GetSize().width}
						height={shape.GetSize().height}
						resizeItem={resizeItem}
						moveItem={moveItem}
					/>
				case "Ellipse":
					return <Ellipse
						key={shape.GetId()}
						id={shape.GetId()}
						x={shape.GetLeftTopPoint().x}
						y={shape.GetLeftTopPoint().y}
						width={shape.GetSize().width}
						height={shape.GetSize().height}
						resizeItem={resizeItem}
						moveItem={moveItem}
					/>
				case "Image":
					if(isImage(shape))
					{
						return <Image
							key={shape.GetId()}
							id={shape.GetId()}
							path={shape.GetPath()}
							x={shape.GetLeftTopPoint().x}
							y={shape.GetLeftTopPoint().y}
							width={shape.GetSize().width}
							height={shape.GetSize().height}
							resizeItem={resizeItem}
							moveItem={moveItem}
						/>
					}
					return null
				default:
					return null
				}
			})}
		</>
	)
}