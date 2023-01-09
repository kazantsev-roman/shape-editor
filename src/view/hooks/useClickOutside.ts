import { useEffect, RefObject } from 'react'

function useClickOutside<T extends Element>(
	ref: RefObject<T>,
	setClickOutside: () => void
)
{
	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	})

	const handleClickOutside = (event: MouseEvent) =>
	{
		if(ref.current && !ref.current.contains(event.target as Node))
		{
			setClickOutside()
		}
	}
}

export default useClickOutside