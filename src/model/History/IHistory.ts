import ICommand from "../Commands/ICommand"

interface IHistory
{
	Undo(): void

	Redo(): void

	CanUndo(): boolean

	CanRedo(): boolean

	ExecuteCommand(command: ICommand): void
}

export default IHistory