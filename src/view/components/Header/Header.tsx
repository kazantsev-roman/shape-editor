import styles from "./Header.module.css"
import Button from "./Button/Button"
import Element from "./Element/Element"
import ElementImage from "./Element/ElementImage"
import { useEffect } from "react";

interface HeaderProps
{
	addTriangle: () => void,
	addRectangle: () => void,
	addEllipse: () => void,
	addImage: (path: string) => void,
	canUndo: () => boolean,
	undo: () => void,
	canRedo: () => boolean,
	redo: () => void,
	upload: (path: string) => void,
	save: (filename: string) => void,
	saveAs: (filename: string, path: string) => void,
}

function Header({addTriangle, addRectangle, addEllipse, addImage, canUndo, undo, canRedo, redo, upload, save, saveAs}: HeaderProps)
{
	const KeyUpListener = (event: KeyboardEvent) =>
	{
		console.log(event.key)
		if(event.key.toUpperCase() === "R")
		{
			addRectangle()
		}
		if(event.key.toUpperCase() === "E" || event.key.toUpperCase() === "C")
		{
			addEllipse()
		}
		if(event.key.toUpperCase() === "T")
		{
			addTriangle()
		}
	}

	useEffect(() => {
		document.addEventListener("keyup", KeyUpListener)

		return () => {
			document.removeEventListener("keyup", KeyUpListener)
		}
	})

	return (
		<div className={styles.wrap}>
			<Button text={"File"} indent={15}>
				<Element imageUrl={"images/folder.png"} text={"Open"} action={upload}/>
				<Element imageUrl={"images/download.png"} text={"Save"} action={save}/>
				<Element imageUrl={"images/download.png"} text={"Save as"} action={saveAs}/>
			</Button>
			<Button text={"Insert"} indent={90}>
				<Element imageUrl={"images/triangle.png"} text={"Triangle"} action={addTriangle}/>
				<Element imageUrl={"images/rectangle.png"} text={"Rectangle"} action={addRectangle}/>
				<Element imageUrl={"images/ellipse.png"} text={"Ellipse"} action={addEllipse}/>
				<ElementImage imageUrl={"images/image.png"} text={"Image"} action={addImage}/>
			</Button>
			<div className={styles.history}>
				<img
					className={
						canUndo()
							? styles.image + " " + styles.imageUndo + " " + styles.imageHoverUndo
							: styles.image + " " + styles.imageUndo + " " + styles.withOpacity
					}
					src="images/undo.png"
					alt=""
					onClick={() => {
						canUndo() && undo()
					}}
				/>
				<img
					className={
						canRedo()
							? styles.image + " " + styles.imageRedo + " " + styles.imageHoverRedo
							: styles.image + " " + styles.imageRedo + " " + styles.withOpacity
					}
					src="images/redo.png"
					alt=""
					onClick={() => {
						canRedo() && redo()
					}}
				/>
			</div>
		</div>
	)
}

export default Header