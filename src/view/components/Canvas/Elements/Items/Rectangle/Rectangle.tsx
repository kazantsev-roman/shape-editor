import Settings from "../../../../../Settings"
import Size from "../../../../../../model/utils/types/Size"
import Point from "../../../../../../model/utils/types/Point"
import Frame from "../../../../../../model/utils/types/Frame"

interface RectangleProps
{
	id: string,
	frame: Frame,
	resizeItem: (id: string, size: Size) => void
	moveItem: (id: string, point: Point) => void
}

function Rectangle({ id, frame, resizeItem, moveItem }: RectangleProps)
{

	const x = frame.leftTopPoint.x
	const y = frame.leftTopPoint.y
	const width = frame.width
	const height = frame.height

	return (
		<rect
			id={id}
			x={x}
			y={y}
			width={width}
			height={height}
			fill={Settings.fillColor}
			stroke={Settings.outlineColor}
		/>
	)
}

export default Rectangle