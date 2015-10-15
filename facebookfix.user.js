// ==UserScript==
// @name		Make Facebook Suck Less: The SteveODat Method
// @description	See: title.  Hides annoying things, adds the toggle option to re-show trending things
// @include     htt*://facebook.com*
// @include     htt*://*.facebook.com*
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

addGlobalStyle('#pagelet_ego_pane, #pagelet_ego_pane_w, #pagelet_side_ads, #fbDockChatBuddylistNub, #pagelet_friends_online, #listsNav, #interestsNav, #appsNav, #pagesNav {display: none!important;}');

addGlobalStyle('.showdy {display: block!important;}');
addGlobalStyle('.noshowdy {display: none!important;}');
addGlobalStyle('.tar {text-align: right;}');

document.getElementById("pagelet_trending_tags_and_topics").className = 'pagelet noshowdy';

var wra = document.getElementsByClassName("rightColumnWrapper");

var newnode = document.createElement("div");
newnode.innerHTML = '<a href="#" onclick="var tt = document.getElementById(\'pagelet_trending_tags_and_topics\'); if (tt.className == \'pagelet showdy\') {tt.className = \'pagelet noshowdy\';} else {tt.className = \'pagelet showdy\';}">show/hide</a>';
newnode.className = 'tar';

wra[0].appendChild(newnode);
