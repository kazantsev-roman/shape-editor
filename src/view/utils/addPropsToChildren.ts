import React from "react"

function addPropsToChildren<T extends object>(children: JSX.Element, props: T)
{
	if(React.isValidElement(children))
	{
		return React.cloneElement(children, props)
	}
	return children
}

export default addPropsToChildren