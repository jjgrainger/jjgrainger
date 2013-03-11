/*
 *	HTML5.js
 *	Creates HTML5 Elements for Older Browsers so CSS can be applied
 *	Created by Joe Grainger
 */


var html5 = [
	'header',
	'footer',
	'nav',
	'section',
	'article',
	'aside',
	'figure',
	'figcaption',
	'hgroup',
	'mark',
	'output',
	'progress',
	'time'
];

var i;

for(i=0; i<html5.length; i++) {
	
	document.createElement(html5[i]);
}
