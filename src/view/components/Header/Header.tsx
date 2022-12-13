import styles from "./Header.module.css"
import { Button } from "./Button/Button";
import popupWindows from "./popupWindows";

export function Header()
{
	return (
		<div className={styles.wrap}>
			{
				popupWindows.map((window) => {
					return <Button key={window.name} text={window.name} indent={window.indent} elements={window.elements} />
				})
			}

			<div className={styles.history}>
				<img className={styles.image} src="images/back-arrow.png" alt=""/>
				<img className={styles.image} src="images/forward.png" alt=""/>
			</div>
		</div>
	)
}