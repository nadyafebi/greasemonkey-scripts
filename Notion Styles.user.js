// ==UserScript==
// @name         Notion Font
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Change your Notion default font.
// @author       Nadya Djojosantoso
// @match        https://www.notion.so/USERNAME/*
// @grant        GM_addStyle
// ==/UserScript==

// NOTE: Change the USERNAME part of @match above to your username.

const font = "Source Sans Pro"; // Change this to whatever font you want to use.
const boldHeaders = true; // Whether you want the headers to be bold or not.

GM_addStyle(`
    .notion-frame .notion-selectable,
    div[placeholder="Heading 1"],
    div[placeholder="Heading 2"],
    div[placeholder="Heading 3"] {
        font-family: "${font}" !important;
    }
`);

if (boldHeaders)
{
    GM_addStyle(`
        div[placeholder="Untitled"],
        div[placeholder="Heading 1"],
        div[placeholder="Heading 2"],
        div[placeholder="Heading 3"] {
            font-weight: bold !important;
        }
    `);
}
