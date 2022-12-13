import styles from "./Button.module.css"
import { Popup } from "../Popup/Popup"
import { useState } from "react"
import useComponentVisible from "../../../hooks/useComponentVisible";

export function Button(
	props: {
		text: string,
		indent: number,
		elements: Array<{url: string, text: string}>,
	}
)
{
	const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)
	const [color, setColor] = useState("#cbaf87")

	return (
		<div
			ref={ref}
			className={styles.button}
			onClick={() => { setIsComponentVisible(!isComponentVisible)}}
			onMouseMove={() => {
				setColor("#7e8a97")
			}}
			onMouseLeave={() => {
				if (!isComponentVisible)
				{
					setColor("#cbaf87")
				}
			}}
			style={{backgroundColor: color}}
		>
			<span className={styles.text}>{props.text}</span>
			<Popup elements={props.elements} visible={isComponentVisible} indent={props.indent} setColor={setColor} />
		</div>
	)
}