import Size from "../../../../../../model/utils/types/Size"
import Point from "../../../../../../model/utils/types/Point"
import Frame from "../../../../../../model/utils/types/Frame"

interface ImageProps
{
	id: string,
	path: string,
	frame: Frame,
	resizeItem: (id: string, size: Size) => void
	moveItem: (id: string, point: Point) => void
}

function Image({ id, path, frame, resizeItem, moveItem }: ImageProps)
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