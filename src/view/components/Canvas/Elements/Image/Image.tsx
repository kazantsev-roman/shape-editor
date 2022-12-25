import { useEffect, useRef, useState } from "react";
import useClickOutside from "../../../../hooks/useClickOutside";
import useDragAndDrop from "../../../../hooks/useDragAndDrop";
import Size from "../../../../../model/utils/types/Size";
import Point from "../../../../../model/utils/types/Point";

interface ImageProps
{
	id: string,
	path: string,
	x: number,
	y: number,
	width: number,
	height: number,
	resizeItem: (id: string, size: Size) => void
	moveItem: (id: string, point: Point) => void
}

function Image({ id, path, x, 	y, width, height, resizeItem, moveItem }: ImageProps)
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
		<image
			ref={ref}
			id={id}
			x={x}
			y={y}
			width={width}
			height={height}
			xlinkHref={path}
		/>
	)
}

export default Image