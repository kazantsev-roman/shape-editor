import { useRef } from "react"
import styles from "./Element.module.css"

interface ElementProps
{
	imageUrl: string,
	text: string,
	action: (...args: any) => void
}

function ElementImage({imageUrl, text}: ElementProps)
{
	const inputReference = useRef<HTMLInputElement>(null)

	const fileUploadAction = () => {
		inputReference.current && inputReference.current.click()
	}

	const fileUploadInputChange = (event: any) => {
		// TODO: error при отмене
	}

	return (
		<div className={styles.wrap} onClick={fileUploadAction}>
			<input
				type="file"
				hidden
				ref={inputReference}
				onChange={fileUploadInputChange}
			/>
			<img className={styles.image} src={imageUrl} alt={""}/>
			<div className={styles.text}>
				{text}
			</div>
		</div>
	)
}

export default ElementImage