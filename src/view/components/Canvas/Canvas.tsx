import IItem from "../../../model/Item/IItem"
import Size from "../../../model/utils/types/Size"
import Point from "../../../model/utils/types/Point"
import Settings from "../../Settings"
import { Shapes } from "./Shapes";

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
		<svg baseProfile="full" width={Settings.canvasWidth} height={Settings.canvasHeight}>
			<rect width="100%" height="100%" fill="white"/>
			<Shapes
				items={items}
				resizeItem={resizeItem}
				moveItem={moveItem}
			/>

		</svg>
	)
}

export default Canvas