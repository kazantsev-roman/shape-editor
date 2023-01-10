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
		action(URL.createObjectURL(event.target.files[0]));
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