import styles from "./Circle.module.css";
import useItemResize from "../../../../hooks/useItemResize";
import { useRef } from "react";
import IItem from "../../../../../model/Item/IItem";
import Size from "../../../../../common/types/Size";
import FrameType from "../../../../../common/types/Frame";

interface CircleProps
{
	selectItem: IItem,
	setSize: (size: Size) => void,
	resizeItem: (id: string, size: Size) => void,
	frame: FrameType
}

export function Circle({selectItem, setSize, resizeItem, frame}: CircleProps)
{

	const circleRef = useRef<SVGCircleElement>(null)

	useItemResize<SVGCircleElement>(circleRef, selectItem.GetId(), frame, setSize, resizeItem)

	return (
		<circle
			className={styles.circle}
			ref={circleRef}
			cx={frame.leftTopPoint.x + frame.width}
			cy={frame.leftTopPoint.y + frame.height}
			r={4}
			fill="#000"
		/>
	)
}