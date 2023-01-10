import { useState } from "react"
import styles from "./Button.module.css"
import Popup from "./Popup/Popup"
import useComponentVisible from "../../../hooks/useComponentVisible"

interface ButtonProps
{
	text: string,
	indent: number,
	children: Array<JSX.Element>
}

function Button({text, indent, children}: ButtonProps)
{
	const {ref, isComponentVisible, setIsComponentVisible} = useComponentVisible<HTMLDivElement>(false)
	const [color, setColor] = useState("#cbaf87")

	return (
		<div
			ref={ref}
			className={styles.button}
			onClick={() => {
				setIsComponentVisible(!isComponentVisible)
			}}
			onMouseMove={() => {
				setColor("#7e8a97")
			}}
			onMouseLeave={() => {
				if(!isComponentVisible)
				{
					setColor("#cbaf87")
				}
			}}
			style={{backgroundColor: color}}
		>
			<span className={styles.text}>{text}</span>
			<Popup visible={isComponentVisible} indent={indent} setColor={setColor}>
				{children.map(element => {
					return element
				})}
			</Popup>
		</div>
	)
}

export default Button