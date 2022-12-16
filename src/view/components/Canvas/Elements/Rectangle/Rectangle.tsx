export function Rectangle(
	props: {
		setSelected: (selected: boolean) => void,
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
	return (
		<div
			onClick={() => {
				props.setSelected(true)
			}}
			style={
			{
				position: "relative",
				width: props.state.width,
				height: props.state.height,
				top: props.state.top,
				left: props.state.left,
				backgroundColor: "#000"
			}
		}>
		</div>
	)
}