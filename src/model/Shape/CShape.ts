import IShape from "./IShape"
import Frame from "../common/Frame"
import Point from "../common/Point"
import { v4 as uuid } from 'uuid'

class CShape implements IShape
{
	constructor()
	{
		this.m_id = uuid()
		this.m_frame = {
			leftTopPoint: {x: 50, y: 50},
			width: 100,
			height: 100
		}
	}

	public GetId(): string
	{
		return this.m_id
	}

	public GetLeftTopPoint(): Point
	{
		return this.m_frame.leftTopPoint
	}

	public SetLeftTopPoint(point: Point): void
	{
		this.m_frame.leftTopPoint = point
	}

	GetSize(): { width: number; height: number }
	{
		return {
			height: this.m_frame.height,
			width: this.m_frame.width
		}
	}

	SetSize(size: { width: number; height: number }): void
	{
		this.m_frame.width = size.width
		this.m_frame.height = size.height
	}

	private readonly m_id: string
	private m_frame: Frame
}