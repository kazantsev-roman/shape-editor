import { RefObject, useEffect } from "react"
import Settings from "../Settings";

function useDragAndDrop(
	ref: RefObject<SVGElement>,
	position: {x: number, y: number},
	onDrag: (position: {x: number, y: number}) => void,
	onDragEnd: (point: {x: number, y: number}) => void,
)
{
	let startPosition = {x: 0, y: 0}
	let endPosition = {x: 0, y: 0}

	useEffect(() => {
		const element = ref.current
		element?.addEventListener("mousedown", MouseDownListener)
		return () => {
			element?.removeEventListener("mousedown", MouseDownListener)
		}
	})

	const MouseDownListener = (event: MouseEvent) => {
		startPosition = {x: event.pageX, y: event.pageY}

		document.addEventListener("mousemove", MouseMoveListener)
		document.addEventListener("mouseup", MouseUpListener)
	}

	const MouseMoveListener = (event: MouseEvent) => {
		const delta = {x: event.pageX - startPosition.x, y: event.pageY - startPosition.y}

		if (ref.current?.getBoundingClientRect())
		{
			const newPosition = {
				x: position.x + delta.x < 0
					? 0
					: position.x + delta.x > Settings.canvasWidth - ref.current?.getBoundingClientRect().width
						? Settings.canvasWidth - ref.current?.getBoundingClientRect().width
						: position.x + delta.x,
				y: position.y + delta.y < 0
					? 0
					: position.y + delta.y > Settings.canvasHeight - ref.current?.getBoundingClientRect().height
						? Settings.canvasHeight - ref.current?.getBoundingClientRect().height
						: position.y + delta.y
			}

			onDrag(newPosition)
			endPosition = newPosition
		}
		else
		{
			onDrag(startPosition)
		}
	}

	const MouseUpListener = () => {
		onDragEnd(endPosition)

		document.removeEventListener("mousemove", MouseMoveListener)
		document.removeEventListener("mouseup", MouseUpListener)

	}
}

export default useDragAndDrop