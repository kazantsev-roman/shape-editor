import Settings from "../../../../../Settings"
import Frame from "../../../../../../common/types/Frame"

interface EllipseProps
{
	frame: Frame,
}

function Ellipse({frame}: EllipseProps)
{
	const x = frame.leftTopPoint.x
	const y = frame.leftTopPoint.y
	const width = frame.width
	const height = frame.height

	return (
		<ellipse
			cx={x + width / 2}
			cy={y + height / 2}
			rx={width / 2}
			ry={height / 2}
			fill={Settings.fillColor}
			stroke={Settings.outlineColor}
		/>
	)
}

export default Ellipse