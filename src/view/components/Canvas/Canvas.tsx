import styles from "./Canvas.module.css"
import { Rectangle } from "./Elements/Rectangle/Rectangle";
import { useState } from "react";
import { Frame } from "./Frame";

export function Canvas()
{
	const [isSelected, setSelected] = useState(false)
	const [state, setState] = useState({
		width: 100,
		height: 100,
		top: 100,
		left: 100
	})
	return (
		<div className={styles.wrap}>
			<Rectangle state={state} setState={setState} setSelected={setSelected}/>
			<Frame state={state} setState={setState} isSelected={isSelected} />
		</div>
	)
}