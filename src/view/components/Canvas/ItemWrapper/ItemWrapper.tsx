import { useEffect, useRef, useState } from "react"
import Size from "../../../../model/utils/types/Size"
import Point from "../../../../model/utils/types/Point"
import useItemDragAndDrop from "../../../hooks/useItemDragAndDrop"
import useClickOutside from "../../../hooks/useClickOutside"
import addPropsToChildren from "../../../utils/addPropsToChildren"
import IItem from "../../../../model/Item/IItem"
import FrameJSX  from "../Elements/Frame/Frame"

interface ItemWrapperProps
{
	item: IItem,
	selectItem: IItem | null,
	setSelectItem: (item: IItem | null) => void,
	resizeItem: (id: string, size: Size) => void,
	moveItem: (id: string, point: Point) => void,
	children: JSX.Element
}

function ItemWrapper({item, selectItem, setSelectItem, resizeItem, moveItem, children}: ItemWrapperProps)
{
	const ref = useRef<SVGGElement>(null)

	const [position, setPosition] = useState({x: item.GetFrame().leftTopPoint.x, y: item.GetFrame().leftTopPoint.y})
	const [size, setSize] = useState({width: item.GetFrame().width, height: item.GetFrame().height})

	const MouseDownListener = () => {
		setSelectItem(item)
	}

	useEffect(() => {
		ref.current?.addEventListener("click", MouseDownListener)

		return () => {
			ref.current?.removeEventListener("click", MouseDownListener)
		}
	})

	useEffect(() => {
		setPosition({x: item.GetFrame().leftTopPoint.x, y: item.GetFrame().leftTopPoint.y})
	}, [item.GetFrame().leftTopPoint.x, item.GetFrame().leftTopPoint.y])

	useEffect(() => {
		setSize({width: item.GetFrame().width, height: item.GetFrame().height})
	}, [item.GetFrame().width, item.GetFrame().height])

	useClickOutside(ref, () => {setSelectItem(null)})
	useItemDragAndDrop<SVGGElement>(ref, item.GetId(), position, setPosition, () => {setSelectItem(item)}, moveItem)

	return (
		<>
			{(selectItem?.GetId() === item.GetId()) &&
				<FrameJSX
					selectItem={selectItem}
					setSize={setSize}
                    resizeItem={resizeItem}
					frame={{
						leftTopPoint: position,
						width: size.width,
						height: size.height
					}}
				/>}
			<g ref={ref}>
				{addPropsToChildren(children, {
					frame: {
						leftTopPoint: position,
						width: size.width,
						height: size.height
					}
				})}
			</g>
		</>
	)
}

export default ItemWrapper