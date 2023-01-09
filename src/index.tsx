import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import IEditor from "./model/Editor/IEditor"
import IController from "./controller/IController"
import View from "./view/components/View"
import CEditor from "./model/Editor/CEditor"
import CController from "./controller/CController"

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const editor: IEditor = new CEditor()
const controller: IController = new CController(editor)

function render()
{
	root.render(
		<React.StrictMode>
			<View items={editor.GetShapes()} controller={controller}/>
		</React.StrictMode>
	);
}

editor.RegisterObserver(render)

render()