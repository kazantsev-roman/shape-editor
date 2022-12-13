import styles from "./Popup.module.css"
import { Element } from "./Element/Element";
import { useEffect } from "react";

export function Popup(
	props: {
		visible: boolean,
		indent: number,
		elements: Array<{url: string, text: string}>,
		setColor: (color: string) => void,
	}
)
{
	useEffect(() => {
		return () => {
			props.setColor("#cbaf87")
		}
	}, [props.visible])

	return (
		<div className={styles.wrap} style={{display: props.visible ? "block" : "none", left: `${props.indent}px`}}>
			{
				props.elements.map((element) => {
					return <Element key={element.text} url={element.url} text={element.text} />
				})
			}
		</div>
	)
}