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
}

function Header({addTriangle, addRectangle, addEllipse, addImage, canUndo, undo, canRedo, redo}: HeaderProps)
{
	return (
		<div className={styles.wrap}>
			<Button text={"Insert"} indent={15}>
				<Element imageUrl={"images/triangle.png"} text={"Triangle"} action={addTriangle}/>
				<Element imageUrl={"images/rectangle.png"} text={"Rectangle"} action={addRectangle}/>
				<Element imageUrl={"images/ellipse.png"} text={"Ellipse"} action={addEllipse}/>
				<ElementImage imageUrl={"images/image.png"} text={"Image"} action={addImage}/>
			</Button>
			<div className={styles.history}>
				<img
					className={
						canUndo()
							? `${styles.image} ${styles.imageUndo} ${styles.imageHoverUndo}`
							: `${styles.image} ${styles.imageUndo} ${styles.withOpacity}`
					}
					src="images/undo.png"
					alt=""
					onClick={() => {
						undo()
					}}
				/>
				<img
					className={
						canRedo()
							? `${styles.image} ${styles.imageRedo} ${styles.imageHoverRedo}`
							: `${styles.image} ${styles.imageRedo} ${styles.withOpacity}`
					}
					src="images/redo.png"
					alt=""
					onClick={() => {
						redo()
					}}
				/>
			</div>
		</div>
	)
}

export default Header