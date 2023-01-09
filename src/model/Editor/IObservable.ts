import IObserver from "./IObserver"

interface IObservable
{
	RegisterObserver(observer: IObserver): void

	RemoveObserver(observer: IObserver): void
}

export default IObservable