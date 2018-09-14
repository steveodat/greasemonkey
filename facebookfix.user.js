// ==UserScript==
// @name		Make Facebook Suck Less: The SteveODat Method
// @description	See: title.
// @include     htt*:/*facebook.com*
// @grant		none
// ==/UserScript==

var head, style;
head = document.getElementsByTagName('head')[0];
style = document.createElement('style');
style.type = 'text/css';

function addGlobalStyle(css) {
    style.innerHTML = style.innerHTML + css;
}

if (document.readyState === "complete" || document.readyState === "interactive") {
    addGlobalStyle('#pagelet_ego_pane, #pagelet_marketplace_new_user_top_picks_rhc, .mvm, #pagelet_ego_pane_w, #pagelet_video_home_suggested_for_you_rhc, #pagelet_ego_contextual_group, #stories_pagelet_rhc, #pagelet_side_ads, #fbDockChatBuddylistNub, #pagelet_friends_online, #listsNav, #interestsNav, #appsNav, #pagesNav, #left_nav_section_nodes, #pinnedNav, #leftCol, #pagelet_sidebar, #pagelet_dock, #pagelet_rhc_footer, #developerNav, .fbChatSidebar, .noshowdy, ._3lb4:not([data-timestamp]) div {display: none!important;}');
    addGlobalStyle('#u_0_p, .fixed_elem {position: static!important;}');
    addGlobalStyle('#contentArea, #rightCol {clear: left!important;float: none!important;position: static!important; margin: 0px auto!important;text-align: left;} ._2yq #globalContainer {width:100%!important;} #contentCol {text-align: center!important; width: 100%!important;margin:0px!important;} #content_container {margin: 0px auto!important;}');
    head.appendChild(style);
}
