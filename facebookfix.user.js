// ==UserScript==
// @name		Make Facebook Suck Less: The SteveODat Method
// @description	See: title.
// @include     htt*://facebook.com*
// @include     htt*://*.facebook.com*
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

    addGlobalStyle('#pagelet_ego_pane, #pagelet_ego_pane_w, #pagelet_side_ads, #fbDockChatBuddylistNub, #pagelet_friends_online, #listsNav, #interestsNav, #appsNav, #pagesNav, #pagelet_sidebar, #pagelet_rhc_footer, #developerNav, .noshowdy {display: none!important;}');
    addGlobalStyle('.showdy {display: block!important;}');
    addGlobalStyle('.tar {text-align: right;}');
    addGlobalStyle('.home_right_column {min-height: 0!important;}');

    document.getElementById("pagelet_trending_tags_and_topics").className = 'pagelet noshowdy';

    var wra = document.getElementsByClassName("home_right_column");

    var newnode = document.createElement("div");
    newnode.innerHTML = '<a href="#" onclick="var tt = document.getElementById(\'pagelet_trending_tags_and_topics\'); if (tt.className == \'pagelet showdy\') {tt.className = \'pagelet noshowdy\';} else {tt.className = \'pagelet showdy\';}">show/hide</a>';
    newnode.className = 'tar';

    wra[0].appendChild(newnode);
});

head.appendChild(style);
