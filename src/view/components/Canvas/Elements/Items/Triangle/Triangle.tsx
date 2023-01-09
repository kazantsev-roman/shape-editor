import Settings from "../../../../../Settings"
import Frame from "../../../../../../model/utils/types/Frame"

interface TriangleProps
{
	id: string,
	frame: Frame,
}

function Triangle({id, frame}: TriangleProps)
{
	const x = frame.leftTopPoint.x
	const y = frame.leftTopPoint.y
	const width = frame.width
	const height = frame.height

	return (
		<polygon
			id={id}
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