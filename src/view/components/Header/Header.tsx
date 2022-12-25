import styles from "./Header.module.css"
import Button from "./Button/Button"
import Element from "./Popup/Element/Element"

interface HeaderProps
{
	addTriangle: () => void,
	addRectangle: () => void,
	addEllipse: () => void,
	addImage: (path: string) => void,
	deleteItem: (id: string) => void,
	undo: () => void,
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
		deleteItem,
		undo,
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
				<Element imageUrl={"images/open-folder.png"} text={"Open"} action={upload} />
				<Element imageUrl={"images/download.png"} text={"Save"} action={save} />
				<Element imageUrl={"images/download.png"} text={"Save as"} action={saveAs} />
			</Button>
			<Button text={"Edit"} indent={90}>
				<Element imageUrl={"images/back-arrow.png"} text={"Undo"} action={undo} />
				<Element imageUrl={"images/forward.png"} text={"Redo"} action={redo} />
				<Element imageUrl={"images/trash.png"} text={"Delete"} action={deleteItem} />
			</Button>
			<Button text={"Insert"} indent={170}>
				<Element imageUrl={"images/triangle-shape.png"} text={"Triangle"} action={addTriangle} />
				<Element imageUrl={"images/stop.png"} text={"Rectangle"} action={addRectangle} />
				<Element imageUrl={"images/circle.png"} text={"Ellipse"} action={addEllipse} />
				<Element imageUrl={"images/image.png"} text={"Image"} action={addImage} />
			</Button>

			<div className={styles.history}>
				<img className={styles.image} src="images/back-arrow.png" alt=""/>
				<img className={styles.image} src="images/forward.png" alt=""/>
			</div>
		</div>
	)
}

export default Header