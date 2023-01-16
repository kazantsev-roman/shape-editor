import Frame from "../../../../../../common/types/Frame"

interface ImageProps
{
	path: string,
	frame: Frame,
}

function Image({path, frame}: ImageProps)
{
	const x = frame.leftTopPoint.x
	const y = frame.leftTopPoint.y
	const width = frame.width
	const height = frame.height

	return (
		<image
			preserveAspectRatio={"none"}
			x={x}
			y={y}
			width={width}
			height={height}
			xlinkHref={path}
		/>
	)
}

export default Image