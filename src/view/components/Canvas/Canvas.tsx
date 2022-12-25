import IItem from "../../../model/Item/IItem";
import Size from "../../../model/utils/types/Size";
import Point from "../../../model/utils/types/Point";

interface CanvasProps
{
	items: Array<IItem>
	resizeItem: (id: string, size: Size) => void
	moveItem: (id: string, point: Point) => void
}

function Canvas(
	{
		items,
		resizeItem,
		moveItem
	}: CanvasProps)
{
	return (
		<svg
			 version="1.1"
		     baseProfile="full"
		     width="800"
		     height="600"
		     xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="100%" height="100%" fill="white" />
			{items.map(shape => {
				return <rect
					key={shape.GetId()}
					x={shape.GetLeftTopPoint().x}
					y={shape.GetLeftTopPoint().y}
					width={shape.GetSize().width}
					height={shape.GetSize().height}
					fill={"#dsljfe"}
				/>
			})}
		</svg>
	)
}

export default Canvas