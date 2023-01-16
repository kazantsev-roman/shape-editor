import Settings from "../../../../../Settings"
import Frame from "../../../../../../common/types/Frame"

interface RectangleProps
{
	frame: Frame,
}

function Rectangle({frame}: RectangleProps)
{
	const x = frame.leftTopPoint.x
	const y = frame.leftTopPoint.y
	const width = frame.width
	const height = frame.height

	return (
		<rect
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