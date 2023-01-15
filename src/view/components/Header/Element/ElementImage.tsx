import { useRef } from "react"
import styles from "./Element.module.css"

interface ElementProps
{
	imageUrl: string,
	text: string,
	action: (...args: any) => void
}

function ElementImage({imageUrl, text, action}: ElementProps)
{
	const inputReference = useRef<HTMLInputElement>(null)

	const fileUploadAction = () => {
		inputReference.current && inputReference.current.click()
	}

	const fileUploadInputChange = (event: any) => {
		let file = event.target.files[0]
		let reader = new FileReader()
		reader.readAsDataURL(file)

		reader.onload = () => {
			action(reader.result)
		}

		event.target.value = null
	}

	return (
		<div className={styles.wrap} onClick={fileUploadAction}>
			<input
				type="file"
				hidden
				accept="image/png, image/gif, image/jpeg"
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