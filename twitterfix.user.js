// ==UserScript==
// @name		Hide Annoying Twitter Things
// @description	Hides Trends, Promoted Tweets, Moments Tab, that While You Were Away Nonsense. Now also restores non-hideous Segoe UI font.
// @include     htt*://twitter.co*
// @include     htt*://*twitter.co*
// @grant		none
// ==/UserScript==

// made by steveodat
// I have a couple other ones for facebook etc. that I periodically update as the sites themselves change: https://github.com/steveodat/greasemonkey

var maindoc = window.top.document;

var style = maindoc.createElement('style');
style.type = 'text/css';

// to concatentate the styles
function addStyle(css) {
	style.innerHTML = style.innerHTML + css;
}

if (maindoc.readyState === "complete" || maindoc.readyState === "interactive") {
  
	// hide things we do not want to see (promoted twwts, trending topics, the moments tab, etc)
	addStyle('.trends, .promoted-tweet, .Footer, .moments, .has-recap, .LiveVideoHomePageModuleContainer, .newstream li[data-suggestion-json*="ActivityTweet"] {display:none!important;}');

	// change the font back to Helvetica, because dang the new one is ugly
	addStyle('body.ms-windows {font-family:"Helvetica Neue",Helvetica,Arial,sans-serif!important;}');

	// add the style element to the head
	maindoc.getElementsByTagName('head')[0].appendChild(style);

}
