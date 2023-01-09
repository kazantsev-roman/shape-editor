import styles from "./Element.module.css"

interface ElementProps
{
	imageUrl: string,
	text: string,
	action: (...args: any) => void
}

function Element({imageUrl, text, action}: ElementProps)
{
	return (
		<div className={styles.wrap} onClick={() => {action()}}>
			<img className={styles.image} src={imageUrl} alt={""}/>
			<div className={styles.text}>
				{text}
			</div>
		</div>
	)
}

export default Element