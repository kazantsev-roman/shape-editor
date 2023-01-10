import { RefObject } from "react"
import useDragAndDrop from "./useDragAndDrop"
import Settings from "../Settings"

function useItemDragAndDrop<T extends Element>(
	ref: RefObject<T>,
	id: string,
	position: { x: number, y: number },
	setPosition: (position: { x: number, y: number }) => void,
	setSelectItem: () => void,
	moveItem: (id: string, position: { x: number, y: number }) => void
)
{
	const onDragStart = setSelectItem

	const onDrag = (delta: { x: number, y: number }) => {
		if(ref.current?.getBoundingClientRect())
		{
			delta.x = position.x + delta.x < 0
				? 0
				: position.x + delta.x > Settings.canvasWidth - ref.current?.getBoundingClientRect().width
					? Settings.canvasWidth - ref.current?.getBoundingClientRect().width
					: position.x + delta.x
			delta.y = position.y + delta.y < 0
				? 0
				: position.y + delta.y > Settings.canvasHeight - ref.current?.getBoundingClientRect().height
					? Settings.canvasHeight - ref.current?.getBoundingClientRect().height
					: position.y + delta.y
		}
		setPosition(delta)
	}

	const onDragEnd = (currentPosition: { x: number, y: number }) => {
		moveItem(id, currentPosition)
	}

	useDragAndDrop<T>(ref, onDragStart, onDrag, onDragEnd)
}

export default useItemDragAndDrop