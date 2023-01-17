import IItem from "../../../model/Item/IItem"
import Size from "../../../common/types/Size"
import Point from "../../../common/types/Point"
import ItemFactory from "./Items/ItemFactory/ItemFactory"
import Settings from "../../Settings"
import ItemWrapper from "./ItemWrapper/ItemWrapper";

interface CanvasProps
{
	selectItem: IItem | null,
	setSelectItem: (item: IItem | null) => void,
	items: Array<IItem>,
	resizeItem: (id: string, size: Size) => void,
	moveItem: (id: string, point: Point) => void,
}

function Canvas({items, resizeItem, moveItem, selectItem, setSelectItem}: CanvasProps)
{
	return (
		<svg baseProfile="full" width={Settings.canvasWidth} height={Settings.canvasHeight}>
			<rect width="100%" height="100%" fill="white"/>
			{items.map((item: IItem) => {
                return <ItemWrapper
	                key={item.GetId()}
	                item={item}
	                selectItem={selectItem}
	                setSelectItem={setSelectItem}
	                resizeItem={resizeItem}
	                moveItem={moveItem}
                >
                    <ItemFactory
                        item={item}
                        frame={item.GetFrame()}
                    />
                </ItemWrapper>

			})}
		</svg>
	)
}

export default Canvas