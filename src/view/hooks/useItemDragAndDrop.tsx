import { RefObject } from "react"
import Settings from "../Settings";
import useDragAndDrop from "./useDragAndDrop"

function useItemDragAndDrop<T extends Element>(
	ref: RefObject<T>,
	id: string,
	position: {x: number, y: number},
	moveItem: (id: string, position: {x: number, y: number}) => void
)
{
	const onDrag = (delta: {x: number, y: number}) => {
		if (ref.current?.getBoundingClientRect())
		{
			delta.x = position.x + delta.x < 0
					? 0
					: position.x + delta.x > Settings.canvasWidth - ref.current?.getBoundingClientRect().width
						? Settings.canvasWidth - ref.current?.getBoundingClientRect().width
						: position.x + delta.x
			delta.y = position.y + delta.y < 0
					? 0
					: position.y + delta.y > Settings.canvasHeight - ref.current?.getBoundingClientRect().height
						? Settings.canvasHeight - ref.current?.getBoundingClientRect().height : position.y + delta.y
		}
	}

	const onDragEnd = (currentPosition: {x: number, y: number}) => {
		moveItem(id, currentPosition)
	}

	useDragAndDrop<T>(ref, onDrag, onDragEnd)
}

export default useItemDragAndDrop