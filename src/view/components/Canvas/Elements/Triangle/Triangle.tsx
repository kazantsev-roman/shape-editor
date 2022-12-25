import Settings from "../../../../Settings"
import { useEffect, useRef, useState } from "react";
import useClickOutside from "../../../../hooks/useClickOutside";
import useDragAndDrop from "../../../../hooks/useDragAndDrop";
import Size from "../../../../../model/utils/types/Size";
import Point from "../../../../../model/utils/types/Point";

interface TriangleProps
{
	id: string,
	x: number,
	y: number,
	width: number,
	height: number,
	resizeItem: (id: string, size: Size) => void
	moveItem: (id: string, point: Point) => void
}

function Triangle({ id, x, y, width, height, resizeItem, moveItem }: TriangleProps)
{
	useEffect(() => {
		setPosition({x, y})
	}, [x, y])

	const ref = useRef(null)
	const [position, setPosition] = useState({x: x, y: y})

	useClickOutside(ref, () => {console.log('outside')})
	useDragAndDrop(ref, position, setPosition, (point: {x: number, y: number}) => {
		moveItem(id, point)
	})

	return (
		<polygon
			ref={ref}
			id={id}
			x={position.x}
			y={position.y}
			points={
				`${position.x} ${position.y + height},  
				 ${position.x + width / 2} ${position.y}, 
				 ${position.x + width} ${position.y + height} `
			}
			fill={Settings.fillColor}
			stroke={Settings.outlineColor}
		/>
	)
}

export default Triangle