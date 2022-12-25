import styles from "./Popup.module.css"
import { useEffect } from "react"

interface PopupProps
{
	visible: boolean,
	indent: number,
	setColor: (color: string) => void,
	children: Array<JSX.Element>,
}

function Popup(
	{
		visible,
		indent,
		setColor,
		children
	}: PopupProps
)
{
	useEffect(() => {
		if (visible)
		{
			setColor("#7e8a97")
		}
		return () => {
			setColor("#cbaf87")
		}
	}, [visible])

	return (
		<div className={styles.wrap} style={{display: visible ? "block" : "none", left: `${indent}px`}}>
			{
				children.map((element) => {
					return element
				})
			}
		</div>
	)
}

export default Popup