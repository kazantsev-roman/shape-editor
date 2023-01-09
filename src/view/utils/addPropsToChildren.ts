import React from "react"

function addPropsToChildren(children: JSX.Element, props: any)
{
	if(React.isValidElement(children))
	{
		return React.cloneElement(children, props)
	}
	return children
}

export default addPropsToChildren