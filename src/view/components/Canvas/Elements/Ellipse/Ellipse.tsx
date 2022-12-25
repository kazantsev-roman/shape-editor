import Settings from "../../../../Settings"
import { useEffect, useRef, useState } from "react";
import useClickOutside from "../../../../hooks/useClickOutside";
import useDragAndDrop from "../../../../hooks/useDragAndDrop";
import Size from "../../../../../model/utils/types/Size";
import Point from "../../../../../model/utils/types/Point";

interface EllipseProps
{
	id: string,
	x: number,
	y: number,
	width: number,
	height: number,
	resizeItem: (id: string, size: Size) => void
	moveItem: (id: string, point: Point) => void
}

function Ellipse({ id, x, y, width, height, resizeItem, moveItem }: EllipseProps)
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
		<ellipse
			ref={ref}
			id={id}
			cx={position.x + width / 2}
			cy={position.y + height / 2}
			rx={width / 2}
			ry={height / 2}
			fill={Settings.fillColor}
			stroke={Settings.outlineColor}
		/>
	)
}

export default Ellipse