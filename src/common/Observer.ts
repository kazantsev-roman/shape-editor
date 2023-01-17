import IObserver from "./IObserver";

class Observer implements IObserver
{
	constructor(func: Function)
	{
		this.func = func
	}

	Update(): void
	{
		this.func()
	}

	private readonly func: Function
}

export default Observer