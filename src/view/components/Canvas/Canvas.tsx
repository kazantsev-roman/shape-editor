import IItem from "../../../model/Item/IItem"
import Size from "../../../model/utils/types/Size"
import Point from "../../../model/utils/types/Point"
import Settings from "../../Settings"
import Frame from "./Elements/Frame/Frame"
import ItemFactory from "./ItemFactory/ItemFactory"
import { useEffect, useState } from "react";

interface CanvasProps
{
	items: Array<IItem>,
	resizeItem: (id: string, size: Size) => void,
	moveItem: (id: string, point: Point) => void,
	deleteItem: (id: string) => void,
}

function Canvas(
	{
		items,
		resizeItem,
		moveItem,
		deleteItem
	}: CanvasProps)
{
	const [selectItem, setSelectItem] = useState<IItem | null>()

	const KeyUpListener = (event: KeyboardEvent) => {
		console.log(event.key)
		if(event.key === "Delete"){
			selectItem && deleteItem(selectItem.GetId())
		}
	}

	useEffect(() => {
		document.addEventListener("keyup", KeyUpListener)

		return () => {
			document.removeEventListener("keyup", KeyUpListener)
		}
	})

	return (
		<svg baseProfile="full" width={Settings.canvasWidth} height={Settings.canvasHeight}>
			<rect width="100%" height="100%" fill="white"/>
			{items.map((item: IItem) => {
				return <ItemFactory
					key={item.GetId()}
					item={item}
					resizeItem={resizeItem}
					moveItem={moveItem}
				/>
			})}
			<Frame  height={100} width={100} x={10} y={10}/>
		</svg>
	)
}

export default Canvas