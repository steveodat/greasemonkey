// ==UserScript==
// @name		Hide Annoying Twitter Things
// @description	Hides Trends, Promoted Tweets, Moments Tab, that While You Were Away Nonsense. Now also restores non-Segoe UI font.
// @include     htt*://twitter.com*
// @include     htt*://*.twitter.com*
// @grant		none
// ==/UserScript==

var head, style;
head = document.getElementsByTagName('head')[0];
style = document.createElement('style');
style.type = 'text/css';

function addGlobalStyle(css) {
    style.innerHTML = style.innerHTML + css;
}

document.addEventListener("DOMContentLoaded", function() {
	addGlobalStyle('.trends, .promoted-tweet, .moments, .has-recap, .LiveVideoHomePageModuleContainer {display:none!important;}');
	addGlobalStyle('body.ms-windows {font-family:"Helvetica Neue",Helvetica,Arial,sans-serif!important;}');
	head.appendChild(style);
});
