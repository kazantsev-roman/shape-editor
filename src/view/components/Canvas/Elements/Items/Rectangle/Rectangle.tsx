import Settings from "../../../../../Settings"
import Frame from "../../../../../../model/utils/types/Frame"

interface RectangleProps
{
	id: string,
	frame: Frame,
}

function Rectangle({id, frame}: RectangleProps)
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