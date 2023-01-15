import { useEffect, useRef, useState } from "react"
import Size from "../../../../model/utils/types/Size"
import Point from "../../../../model/utils/types/Point"
import IItem from "../../../../model/Item/IItem"
import Frame from "../../../../model/utils/types/Frame"
import FrameJSX  from "../Elements/Frame/Frame"
import useItemDragAndDrop from "../../../hooks/useItemDragAndDrop"
import useClickOutside from "../../../hooks/useClickOutside"
import addPropsToChildren from "../../../utils/addPropsToChildren"

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
	const x = item.GetFrame().leftTopPoint.x
	const y = item.GetFrame().leftTopPoint.y
	const width = item.GetFrame().width
	const height = item.GetFrame().height

	const [position, setPosition] = useState({x, y})
	const [size, setSize] = useState({width, height})

	const MouseDownListener = () => {
		setSelectItem(item)
	}

	useEffect(() => {
		const element = ref.current
		element?.addEventListener("click", MouseDownListener)

		return () => {
			element?.removeEventListener("click", MouseDownListener)
		}
	})

	useEffect(() => {
		setPosition({x, y})
	}, [x, y])

	useEffect(() => {
		setSize({width, height: height})
	}, [width, height])

	useClickOutside(ref, () => {setSelectItem(null)})
	useItemDragAndDrop<SVGGElement>(ref, item.GetId(), position, setPosition, () => {setSelectItem(item)}, moveItem)

	return (
		<>
			<g ref={ref}>
				{addPropsToChildren<{ frame: Frame }>(children, {
					frame: {
						leftTopPoint: position,
						width: size.width,
						height: size.height
					}
				})}
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
			</g>
		</>
	)
}

export default ItemWrapper