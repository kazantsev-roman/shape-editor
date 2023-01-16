import IHistory from "./IHistory"
import ICommand from "../Commands/ICommand"

class History implements IHistory
{
	public CanRedo(): boolean
	{
		return this.redo.length > 0
	}

	public CanUndo(): boolean
	{
		return this.undo.length > 0
	}

	public Redo(): void
	{
		if(this.CanRedo())
		{
			const command = this.redo.pop()
			if(command !== undefined)
			{
				this.undo.push(command)
				command.Execute()
			}
		}
		else
		{
			throw Error("the redo operation cannot be applied")
		}
	}

	public Undo(): void
	{
		if(this.CanUndo())
		{
			const command = this.undo.pop()
			if(command !== undefined)
			{
				this.redo.push(command)
				command.UnExecute()
			}
		}
		else
		{
			throw Error("the undo operation cannot be applied")
		}
	}

	public ExecuteCommand(command: ICommand): void
	{
		command.Execute()
		this.AddExecutedCommand(command)
	}

	private AddExecutedCommand(command: ICommand): void
	{
		this.redo = []
		if(this.undo.length >= this.MAX_DEPTH_OF_HISTORY)
		{
			this.undo.shift()
		}

		this.undo.push(command)
	}

	private readonly MAX_DEPTH_OF_HISTORY: number = 20
	private undo: Array<ICommand> = []
	private redo: Array<ICommand> = []
}

export default History