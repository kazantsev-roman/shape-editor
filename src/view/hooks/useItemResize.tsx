import { RefObject } from "react"
import useDragAndDrop from "./useDragAndDrop"
import Settings from "../Settings"
import Size from "../../common/types/Size"
import Frame from "../../common/types/Frame"

function useItemResize<T extends Element>(
	ref: RefObject<T>,
	id: string,
	frame: Frame,
	setSize: (size: Size) => void,
	resizeItem: (id: string, size: Size) => void,
)
{
	const onDragStart = () => {}

	const onDrag = (delta: { x: number, y: number }) => {
		delta.x = frame.width + delta.x < 1
			? 1
			: frame.leftTopPoint.x + frame.width + delta.x > Settings.canvasWidth
				? Settings.canvasWidth - frame.leftTopPoint.x
				: frame.width + delta.x
		delta.y = frame.height + delta.y < 1
			? 1
			: frame.leftTopPoint.y + frame.height + delta.y > Settings.canvasHeight
				? Settings.canvasHeight - frame.leftTopPoint.y
				: frame.height + delta.y

		setSize({width: delta.x, height: delta.y})
	}

	const onDragEnd = (currentPosition: { x: number, y: number }) => {
		resizeItem(id, {width: currentPosition.x, height: currentPosition.y})
	}

	useDragAndDrop<T>(ref, onDragStart, onDrag, onDragEnd)
}

export default useItemResize