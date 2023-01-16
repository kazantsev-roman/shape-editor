import { useState, useEffect, useRef, Ref } from 'react'

export default function useComponentVisible<T extends Element>(initialIsVisible: boolean)
{
	const [isComponentVisible, setIsComponentVisible] = useState<boolean>(initialIsVisible)
	const ref: Ref<T> | undefined = useRef(null)


	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		};
	});

	const handleClickOutside = (event: MouseEvent) =>
	{
		if(ref.current && !ref.current.contains(event.target as Node))
		{
			setIsComponentVisible(false)
		}
	};


	return {ref, isComponentVisible, setIsComponentVisible}
}