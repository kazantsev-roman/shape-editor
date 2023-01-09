import Frame from "../../../../../../model/utils/types/Frame"

interface ImageProps
{
	id: string,
	path: string,
	frame: Frame,
}

function Image({ id, path, frame }: ImageProps)
{

	const x = frame.leftTopPoint.x
	const y = frame.leftTopPoint.y
	const width = frame.width
	const height = frame.height

	return (
		<image
			id={id}
			x={x}
			y={y}
			width={width}
			height={height}
			xlinkHref={path}
		/>
	)
}

export default Image