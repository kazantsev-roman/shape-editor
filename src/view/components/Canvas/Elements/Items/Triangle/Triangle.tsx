import Settings from "../../../../../Settings"
import Size from "../../../../../../model/utils/types/Size"
import Point from "../../../../../../model/utils/types/Point"
import Frame from "../../../../../../model/utils/types/Frame"

interface TriangleProps
{
	id: string,
	frame: Frame,
	resizeItem: (id: string, size: Size) => void
	moveItem: (id: string, point: Point) => void
}

function Triangle({ id, frame, resizeItem, moveItem }: TriangleProps)
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