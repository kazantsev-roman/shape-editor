import styles from "./Element.module.css"

export function Element(
	props: {
		url: string,
		text: string
	}
)
{
	return (
		<div className={styles.wrap}>
			<img className={styles.image} src={props.url} alt={""} />
			<div className={styles.text}>
				{props.text}
			</div>
		</div>
	)
}