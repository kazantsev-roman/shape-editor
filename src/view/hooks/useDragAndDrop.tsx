import { RefObject, useEffect } from "react"

type DragHandler = (position: { x: number, y: number }) => void

function useDragAndDrop<T extends Element>(
	ref: RefObject<T>,
	onDragStart?: DragHandler,
	onDrag?: DragHandler,
	onDragEnd?: DragHandler,
)
{
	let move: boolean = false
	let pagePosition: { x: number, y: number }
	let currentPosition: { x: number, y: number }

	useEffect(() => {
		const element = ref.current
		element?.addEventListener("mousedown", MouseDownListener)
		return () => {
			element?.removeEventListener("mousedown", MouseDownListener)
		}
	})

	const MouseDownListener = (event: Event) =>
	{
		move = false

		pagePosition = {
			x: (event as MouseEvent).pageX,
			y: (event as MouseEvent).pageY
		}
		onDragStart?.(pagePosition)

		document.addEventListener("mousemove", MouseMoveListener)
		document.addEventListener("mouseup", MouseUpListener)
	}

	const MouseMoveListener = (event: MouseEvent) =>
	{
		move = true

		const position = {x: event.pageX - pagePosition.x, y: event.pageY - pagePosition.y}
		onDrag?.(position)
		currentPosition = position
	}

	const MouseUpListener = () =>
	{
		move && onDragEnd?.(currentPosition)

		document.removeEventListener("mousemove", MouseMoveListener)
		document.removeEventListener("mouseup", MouseUpListener)
	}
}

export default useDragAndDrop