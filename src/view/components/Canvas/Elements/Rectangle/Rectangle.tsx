import Settings from "../../../../Settings"
import { useEffect, useRef, useState } from "react";
import useClickOutside from "../../../../hooks/useClickOutside";
import useDragAndDrop from "../../../../hooks/useDragAndDrop";
import Size from "../../../../../model/utils/types/Size";
import Point from "../../../../../model/utils/types/Point";

interface RectangleProps
{
	id: string,
	x: number,
	y: number,
	width: number,
	height: number,
	resizeItem: (id: string, size: Size) => void
	moveItem: (id: string, point: Point) => void
}

function Rectangle({ id, x, y, width, height, resizeItem, moveItem }: RectangleProps)
{
	useEffect(() => {
		setPosition({x, y})
	}, [x, y])

	const ref = useRef(null)
	const [position, setPosition] = useState({x: x, y: y})

	useClickOutside(ref, () => {})
	useDragAndDrop(ref, position, setPosition, (point: {x: number, y: number}) => {
		moveItem(id, point)
	})

	return (
		<rect
			ref={ref}
			id={id}
			x={position.x}
			y={position.y}
			width={width}
			height={height}
			fill={Settings.fillColor}
			stroke={Settings.outlineColor}
		/>
	)
}

export default Rectangle