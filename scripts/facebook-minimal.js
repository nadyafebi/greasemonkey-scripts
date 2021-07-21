// ==UserScript==
// @name         Facebook Minimal
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hide a lot of (in my opinion) unnecessary Facebook features.
// @author       Nadya Djojosantoso
// @match        https://www.facebook.com/*
// @grant        GM_addStyle
// ==/UserScript==

// Hide sidebars, stories, and video chat.
GM_addStyle(`
    div[data-pagelet="LeftRail"],
    div[data-pagelet="RightRail"],
    div[data-pagelet="Stories"],
    div[data-pagelet="VideoChatHomeUnit"] {
        display: none;
    }
`);

// Hide top tabs.
document.querySelector(`a[href="/watch/"]`).parentElement.parentElement.parentElement.style.display = "none";
document.querySelector(`a[href="/marketplace/?ref=app_tab"]`).parentElement.parentElement.parentElement.style.display = "none";
document.querySelector(`a[href="/gaming/?ref=games_tab"]`).parentElement.parentElement.parentElement.style.display = "none";
