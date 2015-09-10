'use strict';
import Utils from "./Utils";



var utils = new Utils();
var raf = Utils.Raf();
class App {
	init(){

		console.log('ready');

		//Request Animation Frame to handle scroll
		function reqAF(){
			this.handleRaf();
			raf(reqAF.bind(this));
		}
		raf(reqAF.bind(this));
	}

	handleRaf(){
		

	}
}


var app = new App();


window.onload=app.init();
