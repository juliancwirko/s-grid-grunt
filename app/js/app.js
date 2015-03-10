'use strict';

// demo only..

var app = (function(document) {
	var docElem = document.documentElement,
		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			_userAgentInit();
			console.log('Hey, I am here!');
		};
	return {
		init: _init
	};
})(document);

(function() {
	app.init();
})();