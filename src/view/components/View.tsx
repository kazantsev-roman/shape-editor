import { Canvas } from "./Canvas/Canvas"
import styles from "./View.module.css"
import { Header } from "./Header/Header";

export function View()
{
	return (
		<div>
			<Header />
			<div className={styles.canvasWrap}>
				<Canvas />
			</div>
		</div>
	)
}