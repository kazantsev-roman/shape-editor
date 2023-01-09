interface ICommand
{
	Execute(): void

	UnExecute(): void
}

export default ICommand