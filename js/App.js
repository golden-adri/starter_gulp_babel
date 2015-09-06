'use strict';
import Utils from "./Utils";



var utils = new Utils();

class App {
	init(){

		console.log('ready');
	}
}


var app = new App();


window.onload=app.init();
