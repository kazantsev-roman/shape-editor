import Settings from "../../../../../Settings"
import Frame from "../../../../../../common/types/Frame"

interface TriangleProps
{
	frame: Frame,
}

function Triangle({frame}: TriangleProps)
{
	const x = frame.leftTopPoint.x
	const y = frame.leftTopPoint.y
	const width = frame.width
	const height = frame.height

	return (
		<polygon
			x={x}
			y={y}
			points={
				`${x} ${y + height},  
				 ${x + width / 2} ${y}, 
				 ${x + width} ${y + height} `
			}
			fill={Settings.fillColor}
			stroke={Settings.outlineColor}
		/>
	)
}

export default Triangle