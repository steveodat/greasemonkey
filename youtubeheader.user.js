// ==UserScript==
// @name		Make youtube's fixed header static
// @description	makes header static not fixed, for annoyance fixing
// @include     htt*:/*youtube.com*
// ==/UserScript==

var head, style;
head = document.getElementsByTagName('head')[0];
style = document.createElement('style');
style.type = 'text/css';

function addGlobalStyle(css) {
    style.innerHTML = style.innerHTML + css;
}

if (document.readyState === "complete" || document.readyState === "interactive") {
	addGlobalStyle('#masthead-positioner, #masthead-container {position:static!important; transform: none!important;}');
	addGlobalStyle('#masthead-positioner-height-offset{display: none!important;}');
	addGlobalStyle('#page-manager{margin-top: 0px!important;}');
	head.appendChild(style);
}

// this bit scrolls the page down the top(ish) of the video container in firefox
// mostly useful when going from video to video
window.setTimeout(function() {
  window.scrollTo(0,59);
},2500);
