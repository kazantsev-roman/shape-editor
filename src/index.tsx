import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import IEditor from "./model/Editor/IEditor"
import IController from "./controller/IController"
import View from "./view/components/View"
import CEditor from "./model/Editor/CEditor"
import CController from "./controller/CController"
import IObservable from "./model/Editor/IObservable";

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

type EditorType = IEditor & IObservable

const editor: EditorType = new CEditor()
const controller: IController = new CController(editor)

function render()
{
	root.render(
		<React.StrictMode>
			<View items={editor.GetItems()} controller={controller}/>
		</React.StrictMode>
	);
}

editor.RegisterObserver(render)

render()