import { RefObject } from "react"
import useDragAndDrop from "./useDragAndDrop"
import Settings from "../Settings"
import Size from "../../model/utils/types/Size"
import Frame from "../../model/utils/types/Frame"

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
		let currentSize = {width: frame.width + delta.x, height: frame.height + delta.y}

		if(ref.current?.getBoundingClientRect())
		{
			delta.x = frame.width + delta.x < 1
				? 1
				: frame.leftTopPoint.x + frame.width + delta.x > Settings.canvasWidth
					? Settings.canvasWidth - frame.leftTopPoint.x
					: currentSize.width
			delta.y = frame.height + delta.y < 1
				? 1
				: frame.leftTopPoint.y + frame.height + delta.y > Settings.canvasHeight
					? Settings.canvasHeight - frame.leftTopPoint.y
					: currentSize.height
		}

		setSize(currentSize)
	}

	const onDragEnd = (currentPosition: { x: number, y: number }) => {
		resizeItem(id, {width: currentPosition.x, height: currentPosition.y})
	}

	useDragAndDrop<T>(ref, onDragStart, onDrag, onDragEnd)
}

export default useItemResize