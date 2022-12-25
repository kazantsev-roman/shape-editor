const fs = require("fs")

function CopyFile(from: string, to: string)
{
	fs.copyFile(from, to, (error: any) =>
	{
		if(error)
		{
			throw error
		}
	})
}

export default CopyFile