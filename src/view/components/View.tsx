import styles from "./View.module.css"
import Canvas from "./Canvas/Canvas"
import Header from "./Header/Header"
import IController from "../../controller/IController"
import IItem from "../../model/Item/IItem"
import Size from "../../common/types/Size"
import Point from "../../common/types/Point"
import KeyboardEventListener from "./KeyboardEventListener/KeyboardEventListener"
import { useState } from "react";

interface ViewProps
{
	controller: IController,
	items: Array<IItem>
}

function View({controller, items}: ViewProps)
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

	const addImage = (object: string) => {
		controller.AddImage(object)
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
		controller.CanUndo() && controller.Undo()
	}

	const canRedo = (): boolean => {
		return controller.CanRedo()
	}

	const redo = () => {
		controller.CanRedo() && controller.Redo()
	}

	const [selectItem, setSelectItem] = useState<IItem | null>(null)

	return (
		<div>
			<KeyboardEventListener
				selectItem={selectItem}
				setSelectItem={setSelectItem}
				addTriangle={addTriangle}
				addRectangle={addRectangle}
				addEllipse={addEllipse}
				deleteItem={deleteItem}
				canUndo={canUndo}
				undo={undo}
				canRedo={canRedo}
				redo={redo}
			/>
			<Header addTriangle={addTriangle} addRectangle={addRectangle} addEllipse={addEllipse} addImage={addImage} canUndo={canUndo} undo={undo} canRedo={canRedo} redo={redo} />
			<div className={styles.canvasWrap}>
				<Canvas selectItem={selectItem} setSelectItem={setSelectItem} items={items} resizeItem={resizeItem} moveItem={moveItem} />
			</div>
		</div>
	)
}

export default View