import { useEffect, useRef, useState } from "react"
import useClickOutside from "../../../../hooks/useClickOutside"
import Size from "../../../../../model/utils/types/Size"
import Point from "../../../../../model/utils/types/Point"
import useItemDragAndDrop from "../../../../hooks/useItemDragAndDrop"

interface ItemProps
{
	id: string,
	x: number,
	y: number,
	width: number,
	height: number,
	resizeItem: (id: string, size: Size) => void,
	moveItem: (id: string, point: Point) => void
}

function Item({ id, x, y, width, height, resizeItem, moveItem }: ItemProps)
{
	useEffect(() => {
		setPosition({x, y})
	}, [x, y])

	const ref = useRef<SVGElement>(null)
	const [position, setPosition] = useState({x: x, y: y})

	useClickOutside(ref, () => {console.log('outside')})
	useItemDragAndDrop<SVGElement>(ref, id, position, moveItem)

	return (<></>)
}

export default Element