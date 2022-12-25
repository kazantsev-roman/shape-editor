import { v4 as uuid } from 'uuid'

function ConvertString(value: string): string
{
	const id: string = uuid()

	return id + value
}

export default ConvertString