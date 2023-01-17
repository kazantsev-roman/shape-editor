import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import IEditor from "./model/Editor/IEditor"
import IController from "./controller/IController"
import View from "./view/components/View"
import Editor from "./model/Editor/Editor"
import Controller from "./controller/Controller"
import IObservable from "./common/IObservable"
import Observer from "./common/Observer"

type EditorType = IEditor & IObservable

const editor: EditorType = new Editor()
const controller: IController = new Controller(editor)


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

function render()
{
	root.render(
		<React.StrictMode>
			<View items={editor.GetItems()} controller={controller}/>
		</React.StrictMode>
	);
}

const observer =  new Observer(render)
editor.RegisterObserver(observer)

render()