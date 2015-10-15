// ==UserScript==
// @name		Hide Twitter Trends and Promoted Tweets
// @description	See: title.  Yup
// @include     htt*://twitter.com*
// @include     htt*://*.twitter.com*
// @grant		none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('.trends {display:none!important;}');
addGlobalStyle('.promoted-tweet {display:none!important;}');
addGlobalStyle('.moments {display:none!important;}');
