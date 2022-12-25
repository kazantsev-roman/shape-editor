import IImage from "../../Item/Image/IImage"

function isImage(object: any): object is IImage
{
	return object.GetPath !== undefined
}

export default isImage