import { useEffect, useState } from "react"
import IItem from "../../../model/Item/IItem"
import Size from "../../../model/utils/types/Size"
import Point from "../../../model/utils/types/Point"
import ItemFactory from "./ItemFactory/ItemFactory"
import Settings from "../../Settings"
import ItemWrapper from "./ItemWrapper/ItemWrapper";

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
	const [selectItem, setSelectItem] = useState<IItem | null>(null)

	const KeyUpListener = (event: KeyboardEvent) =>
	{
		if(event.key === "Delete")
		{
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
                return <ItemWrapper
	                key={item.GetId()}
	                item={item}
	                selectItem={selectItem}
	                setSelectItem={setSelectItem}
	                resizeItem={resizeItem}
	                moveItem={moveItem}
                >
                    <ItemFactory
                        item={item}
                        frame={item.GetFrame()}
                    />
                </ItemWrapper>

			})}
		</svg>
	)
}

export default Canvas