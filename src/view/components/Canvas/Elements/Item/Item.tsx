import { useEffect, useRef, useState } from "react"
import Size from "../../../../../model/utils/types/Size"
import Point from "../../../../../model/utils/types/Point"
import Frame from "../../../../../model/utils/types/Frame"
import useItemDragAndDrop from "../../../../hooks/useItemDragAndDrop"
import useClickOutside from "../../../../hooks/useClickOutside"
import addPropsToChildren from "../../../../utils/addPropsToChildren"

interface ItemProps
{
	id: string,
	frame: Frame
	resizeItem: (id: string, size: Size) => void,
	moveItem: (id: string, point: Point) => void,
	children: JSX.Element
}

function Item({id, frame, resizeItem, moveItem, children}: ItemProps)
{
	const ref = useRef<SVGGElement>(null)
	const [position, setPosition] = useState({x: frame.leftTopPoint.x, y: frame.leftTopPoint.y})
	const [size, setSize] = useState({width: frame.width, height: frame.height})

	useEffect(() => {
		setPosition({x: frame.leftTopPoint.x, y: frame.leftTopPoint.y})
	}, [frame.leftTopPoint.x, frame.leftTopPoint.y])

	useClickOutside(ref, () => {console.log('outside')})
	useItemDragAndDrop<SVGGElement>(ref, id, position, setPosition, moveItem)

	return (
		<g ref={ref}>
			{addPropsToChildren(children, {frame: {leftTopPoint: position, width: size.width, height: size.height}})}
		</g>
	)
}

export default Item