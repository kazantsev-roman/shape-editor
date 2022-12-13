import IShape from "../Shape/IShape"
import IEditor from "./IEditor"

class CEditor implements IEditor
{
	private m_shapes: Array<IShape> = []
}