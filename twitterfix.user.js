// ==UserScript==
// @name		Hide Annoying Twitter Things
// @description	Hides Trends, Promoted Tweets, Moments Tab, that While You Were Away Nonsense. Now also restores non-Segoe UI font.
// @include     htt*://twitter.com*
// @include     htt*://*.twitter.com*
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

maindoc.addEventListener("DOMContentLoaded", function() {
	// hide things we do not want to see
	addStyle('.trends, .promoted-tweet, .moments, .has-recap, .LiveVideoHomePageModuleContainer, .newstream li[data-suggestion-json*="ActivityTweet"] {display:none!important;}');

	// change the font back to Helvetica, because I am v picky and resistant to change YES I AM A STEREOTYPE OF A NERD I GET IT
	addStyle('body.ms-windows {font-family:"Helvetica Neue",Helvetica,Arial,sans-serif!important;}');

	// styling for the add/show favs link.  still deciding on location.
	addStyle('#toglink {position: fixed; left: 0; bottom: 20px; background-color: white; border: 1px solid #AAA; font-size: 13px;line-height: 1em; padding: .4em;cursor: pointer; user-select: none; -moz-user-select: none; -webkit-user-select: none;-ms-user-select: none;}}');

	// add the style element to the head
	maindoc.getElementsByTagName('head')[0].appendChild(style);

	// create the show/hide link node, set the id and content, and append it to the body
	var newnode = maindoc.createElement("div");
	newnode.setAttribute('id','toglink');
	newnode.innerHTML = '> hide favs';
	maindoc.body.appendChild(newnode);
	// get the newly create node for use later on
	var toglink = maindoc.getElementById('toglink');

	// get classlist for the timeline div
	var tlcl = maindoc.getElementById("timeline").classList;

	// add or remove the class newstream to the timeline div to hide or show favs, and change the trigger innerHTML accordingly
	toglink.addEventListener("click", function() {
	if (tlcl.contains('newstream')) {
			tlcl.remove('newstream');
			toglink.innerHTML = '> hide favs';
		} else {
			tlcl.add('newstream');
			toglink.innerHTML = '> show favs';
		}
	});
});
