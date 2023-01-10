import { useRef } from "react";
import styles from "./Frame.module.css"
import IItem from "../../../../../model/Item/IItem";
import FrameType from "../../../../../model/utils/types/Frame"
import Size from "../../../../../model/utils/types/Size";
import useItemResize from "../../../../hooks/useItemResize";

interface FrameProps
{
	selectItem: IItem,
	setSize: (size: Size) => void,
	resizeItem: (id: string, size: Size) => void,
	frame: FrameType
}

function Frame({selectItem, setSize, resizeItem, frame}: FrameProps)
{
	const circleRef = useRef<SVGCircleElement>(null)

	useItemResize<SVGCircleElement>(circleRef, selectItem.GetId(), frame, setSize, resizeItem)

	return (
		<>
			<rect
				x={frame.leftTopPoint.x - 5}
				y={frame.leftTopPoint.y - 5}
				width={frame.width + 10}
				height={frame.height + 10}
				stroke={"#1f74d7"}
				fill="#000"
				fillOpacity="0"
				strokeWidth={1}
			/>
			<circle
				className={styles.circle}
				ref={circleRef}
				cx={frame.leftTopPoint.x + frame.width + 5}
				cy={frame.leftTopPoint.y + frame.height + 5}
				r={4}
				fill="#000"
			/>
		</>
	)
}

export default Frame