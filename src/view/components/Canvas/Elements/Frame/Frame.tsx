interface FrameProps
{
	x: number,
	y: number,
	width: number,
	height: number
}

function Frame({x, y, width, height,}: FrameProps)
{
	return (
		<rect
			x={x - 5}
			y={y - 5}
			width={width + 10}
			height={height + 10}
			stroke={"#1f74d7"}
			fill="#000"
			fillOpacity="0"
			strokeWidth={1}
		/>
	)
}

export default Frame