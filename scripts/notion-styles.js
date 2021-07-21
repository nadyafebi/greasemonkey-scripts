// ==UserScript==
// @name         Notion Styles
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Change your Notion default appearance.
// @author       Nadya Djojosantoso
// @match        https://www.notion.so/USERNAME/*
// @grant        GM_addStyle
// ==/UserScript==

// NOTE: Change the USERNAME part of @match above to your username.

// Settings
const bodyFont = "Source Sans Pro"; // Change this to whatever font you want to use for texts.
const headerFont = "Source Serif Pro"; // Change this to whatever font you want to use for headers.
const boldHeaders = true; // Whether you want the headers to be bold or not.
const hidePageMentionArrow = true; // Hide the arrow next to a page mention.

GM_addStyle(`
    .notion-frame .notion-selectable,
    .notion-page-content,
    div[placeholder="Heading 1"],
    div[placeholder="Heading 2"],
    div[placeholder="Heading 3"] {
        font-family: "${bodyFont}" !important;
    }
`);

if (headerFont) {
    GM_addStyle(`
        div[placeholder="Untitled"],
        div[placeholder="Heading 1"],
        div[placeholder="Heading 2"],
        div[placeholder="Heading 3"] {
            font-family: "${headerFont}" !important;
        }
    `);
}

if (boldHeaders) {
    GM_addStyle(`
        div[placeholder="Untitled"],
        div[placeholder="Heading 1"],
        div[placeholder="Heading 2"],
        div[placeholder="Heading 3"] {
            font-weight: bold !important;
        }
    `);
}

if (hidePageMentionArrow) {
    GM_addStyle(`
        .notion-page-mention-token svg {
            display: none !important;
        }

        .notion-page-mention-token > span > span {
            width: auto !important;
            margin-right: 2px !important;
            padding-left: 2px !important;
            vertical-align: text-top;
        }

        .notion-page-mention-token img {
            width: 19.8px !important;
            height: auto !important;
        }
    `);
}
