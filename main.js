// "use strict";
// const electron = require('electron');
// const app = electron.app;
// const BrowserWindow = electron.BrowserWindow;

// let mainWindow

// function createWindow() {
// 	mainWindow = new BrowserWindow({width: 1200, height: 800})
// 	mainWindow.loadURL(`file://${__dirname}/index.html`)
// 	mainWindow.webContents.openDevTools()

// 	mainWindow.on('closed', function() {
// 		mainWindow = null
// 	})
// };

// app.on('ready', createWindow)

// app.on('window-all=closed', function() {
// 	if (process.platform !== 'darwin') {
// 		app.quit()
// 	}
// });

// app.on('activate', function() {
// 	if (mainWindow === null) {
// 		createWindow()
// 	}
// });

var Express = require('express');

// configure the server
const Server = Express();
const Port = 3000;

var routeOptions = {
	root: __dirname,
	dotfiles: 'allow',
	headers: {
		root: __dirname,
		'x-timestamp': Date.now(),
		'x-sent': true
	}
};

// include all files in directory
Server.use(Express.static(__dirname));

// set route for home page
fileName = 'index.html';
Server.get('*', function(request, response) {
	response.sendFile(fileName, routeOptions, function(err) {
		if (err) {
			console.log("failed loading home page.\n" + err);
			response.status(err.status).end();
		}
		else {
			console.log('Sent: ', fileName)
		}
	});
});

// create server to listen for calls to the port
Server.listen(Port, function(err) {
	if (err) {
		console.log("ERROR: " + err);
	}

	console.log("Web server is listening on port " + Port);
});