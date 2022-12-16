const popupWindows = [
	{
		name: "File",
		indent: 15,
		elements: [
			{
				url: "images/open-folder.png",
				text: "Open",
				callback: (path: string) => controller.Open(path)
			},
			{
				url: "images/download.png",
				text: "Save",
				callback: (filename: string) => controller.Save(filename)
			},
			{
				url: "images/download.png",
				text: "Save as",
				callback: (path: string, filename: string) => controller.Save(path, filename)
			},
		]
	},
	{
		name: "Edit",
		indent: 90,
		elements: [
			{
				url: "images/back-arrow.png",
				text: "Undo",
				callback: () => controller.Undo()
			},
			{
				url: "images/forward.png",
				text: "Redo",
				callback: () => controller.Redo()
			},
			{
				url: "images/trash.png",
				text: "Delete",
				callback: (id: string) => controller.Delete(id)
			},
		]
	},
	{
		name: "Insert",
		indent: 170,
		elements: [
			{
				url: "images/stop.png",
				text: "Rectangle",
				callback: () => controller.AddShape("Rectangle")
			},
			{
				url: "images/triangle-shape.png",
				text: "Triangle",
				callback: () => controller.AddShape("Triangle")
			},
			{
				url: "images/circle.png",
				text: "Ellipse",
				callback: () => controller.AddShape("Ellipse")
			},
			{
				url: "images/image.png",
				text: "Image",
				callback: (path: string) => controller.AddShape("Image", path)
			},
		]
	},
]

export default popupWindows