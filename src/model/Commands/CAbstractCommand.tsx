import ICommand from "./ICommand"

abstract class CAbstractCommand implements ICommand
{
	public Execute(): void
	{
		this.DoExecute()
		this.executed = true
	}

	public UnExecute(): void
	{
		this.DoUnExecute()
		this.executed = false
	}

	public IsExecuted(): boolean
	{
		return this.executed
	}

	protected abstract DoExecute(): void;
	protected abstract DoUnExecute(): void

	private executed = false
}

export default CAbstractCommand