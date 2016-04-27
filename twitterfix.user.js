// ==UserScript==
// @name		Hide Annoying Twitter Things
// @description	Hides Trends, Promoted Tweets, Moments Tab, and that While You Were Away Nonsense
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
	addGlobalStyle('.trends, .promoted-tweet, .moments, .has-recap {display:none!important;}');
	head.appendChild(style);
});
