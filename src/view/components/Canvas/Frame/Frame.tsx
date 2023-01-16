import FrameType from "../../../../common/types/Frame"

interface FrameProps
{
	frame: FrameType
}

function Frame({frame}: FrameProps)
{
	return (
		<rect
			x={frame.leftTopPoint.x}
			y={frame.leftTopPoint.y}
			width={frame.width}
			height={frame.height}
			stroke={"#ff0000"}
			fill="#000"
			fillOpacity="0"
			strokeWidth={1}
		/>
	)
}

export default Frame