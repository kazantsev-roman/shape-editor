import styles from "./View.module.css"
import Canvas from "./Canvas/Canvas"
import Header from "./Header/Header"
import IController from "../../controller/IController"
import IItem from "../../model/Item/IItem"
import Size from "../../model/utils/types/Size"
import Point from "../../model/utils/types/Point"

interface ViewProps
{
	controller: IController,
	items: Array<IItem>
}

function View({ controller, items }: ViewProps )
{
	const addTriangle = () => {
		controller.AddShape("Triangle")
	}

	const addRectangle = () => {
		controller.AddShape("Rectangle")
	}

	const addEllipse = () => {
		controller.AddShape("Ellipse")
	}

		const addImage = (path: string) => {
		controller.AddImage(path)
	}

	const deleteItem = (id: string) => {
		controller.DeleteItem(id)
	}

	const resizeItem = (id: string, size: Size) => {
		controller.ResizeItem(id, size)
	}

	const moveItem = (id: string, point: Point) => {
		controller.MoveItem(id, point)
	}

	const canUndo = (): boolean => {
		return controller.CanUndo()
	}

	const undo = () => {
		controller.Undo()
	}

	const canRedo = (): boolean => {
		return controller.CanRedo()
	}

	const redo = () => {
		controller.Redo()
	}

	const upload = (path: string) => {
		controller.Upload(path)
	}

	const save = (filename: string) => {
		controller.Save(filename)
	}

	const saveAs = (filename: string, path: string) => {
		controller.Save(filename, path)
	}

	return (
		<div>
			<Header
				addTriangle={addTriangle}
				addRectangle={addRectangle}
				addEllipse={addEllipse}
				addImage={addImage}
				canUndo={canUndo}
				undo={undo}
				canRedo={canRedo}
				redo={redo}
				upload={upload}
				save={save}
				saveAs={saveAs}
			/>
			<div className={styles.canvasWrap}>
				<Canvas
					items={items}
					resizeItem={resizeItem}
					moveItem={moveItem}
				/>
			</div>
		</div>
	)
}

export default View