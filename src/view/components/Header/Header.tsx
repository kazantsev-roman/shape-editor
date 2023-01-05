import styles from "./Header.module.css"
import Button from "./Button/Button"
import Element from "./Element/Element"
import ElementImage from "./Element/ElementImage"

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

function Header(
	{
		addTriangle,
		addRectangle,
		addEllipse,
		addImage,
		canUndo,
		undo,
		canRedo,
		redo,
		upload,
		save,
		saveAs
	}: HeaderProps
)
{
	return (
		<div className={styles.wrap}>
			<Button text={"File"} indent={15}>
				<Element imageUrl={"images/open-folder.png"} text={"Open"} action={upload}/>
				<Element imageUrl={"images/download.png"} text={"Save"} action={save}/>
				<Element imageUrl={"images/download.png"} text={"Save as"} action={saveAs}/>
			</Button>
			<Button text={"Insert"} indent={90}>
				<Element imageUrl={"images/triangle-shape.png"} text={"Triangle"} action={addTriangle}/>
				<Element imageUrl={"images/stop.png"} text={"Rectangle"} action={addRectangle}/>
				<Element imageUrl={"images/circle.png"} text={"Ellipse"} action={addEllipse}/>
				<ElementImage imageUrl={"images/image.png"} text={"Image"} action={addImage}/>
			</Button>

			<div className={styles.history}>
				<img
					className={
						canUndo()
							? styles.image + " " + styles.imageUndo + " " + styles.imageHoverUndo
							: styles.image + " " + styles.imageUndo + " " + styles.withOpacity
					}
					src="images/back-arrow.png"
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
					src="images/forward.png"
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