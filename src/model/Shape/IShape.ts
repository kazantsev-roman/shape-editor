import Point from "../common/Point";

interface IShape
{
	GetId(): string

	GetSize(): { width: number, height: number }
	SetSize(size: { width: number, height: number }): void

	SetLeftTopPoint(point: Point): void
	GetLeftTopPoint(): Point
}

export default IShape