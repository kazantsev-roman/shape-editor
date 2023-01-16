import ICommand from "./ICommand"

abstract class AbstractCommand implements ICommand
{
	public Execute(): void
	{
		this.DoExecute()
		this.executed = true
	}

	public UnExecute(): void
	{
		if (this.IsExecuted())
		{
			this.DoUnExecute()
			this.executed = false

			return
		}

		throw Error("canceling the command before it is executed")
	}

	public IsExecuted(): boolean
	{
		return this.executed
	}

	protected abstract DoExecute(): void;

	protected abstract DoUnExecute(): void

	private executed = false
}

export default AbstractCommand