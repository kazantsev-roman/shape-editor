import Settings from "../../../../../Settings"
import Size from "../../../../../../model/utils/types/Size"
import Point from "../../../../../../model/utils/types/Point"
import Frame from "../../../../../../model/utils/types/Frame"

interface EllipseProps
{
	id: string,
	frame: Frame,
	resizeItem: (id: string, size: Size) => void
	moveItem: (id: string, point: Point) => void
}

function Ellipse({ id, frame, resizeItem, moveItem }: EllipseProps)
{
	const x = frame.leftTopPoint.x
	const y = frame.leftTopPoint.y
	const width = frame.width
	const height = frame.height

	return (
		<ellipse
			id={id}
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