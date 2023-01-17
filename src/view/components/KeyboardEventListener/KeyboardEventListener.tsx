import { useEffect } from "react";
import IItem from "../../../model/Item/IItem";

interface KeyboardEventListenerProps
{
	selectItem: IItem | null,
	setSelectItem: (item: IItem | null) => void,
	addRectangle: () => void,
	addEllipse: () => void,
	addTriangle: () => void,
	deleteItem: (id: string) => void,
	canUndo: () => boolean,
	undo: () => void,
	canRedo: () => boolean,
	redo: () => void,
}

function KeyboardEventListener(
	{
		selectItem,
		setSelectItem,
		addRectangle,
		addEllipse,
		addTriangle,
		deleteItem,
		canUndo,
		undo,
		canRedo,
		redo
}: KeyboardEventListenerProps)
{
	const KeyUpListener = (event: KeyboardEvent) =>
	{
		if(event.key === "Delete")
		{
			if (selectItem)
			{
				deleteItem(selectItem.GetId())
				setSelectItem(null)
			}
		}
		if(event.code === "KeyR")
		{
			addRectangle()
		}
		if(event.code === "KeyE")
		{
			addEllipse()
		}
		if(event.code === "KeyT")
		{
			addTriangle()
		}
		if(event.code === "KeyZ")
		{
			canUndo() && undo()
		}
		if(event.code === "KeyY")
		{
			canRedo() && redo()
		}
	}

	useEffect(() => {
		document.addEventListener("keyup", KeyUpListener)

		return () => {
			document.removeEventListener("keyup", KeyUpListener)
		}
	})
	
	return (
		<>
		</>
	)
}

export default KeyboardEventListener