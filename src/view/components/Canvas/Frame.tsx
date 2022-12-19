import { ResizableRect } from "./ResizableRect/ResizableRect";

export function Frame(
	props: {
		isSelected: boolean,
		state: {
			width: number,
			height: number,
			top: number,
			left: number
		},
		setState: (state: {
			width: number,
			height: number,
			top: number,
			left: number
		}) => void
	}
)
{
	const handleResize = () => {
	}

	const handleDragStart = () => {
	}

	const handleDrag = () => {
	}

	return (
		<div style={{ position: "relative" }}>
			{props.isSelected && <ResizableRect
                left={props.state.left - 10}
                top={props.state.top - props.state.height - 10}
                width={props.state.width + 20}
                height={props.state.height + 20}
				// onResizeStart={this.handleResizeStart}
                onResize={handleResize}
				// onResizeEnd={this.handleUp}
				onDragStart={handleDragStart}
                onDrag={handleDrag}
                onDragEnd={() => {}}
			/>
			}
		</div>
	)
}