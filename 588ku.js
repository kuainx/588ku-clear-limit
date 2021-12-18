// ==UserScript==
// @name         588ku clear
// @namespace    http://ekuai.tech/
// @version      0.1
// @description  clear login limit page in 588ku.com
// @author       kuai
// @match        https://588ku.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  function scrollStyle() {
    if (document.getElementById("scrollBarCustom")) {
      return;
    }
    let s = document.createElement("style");
    s.id = "scrollBarCustom";
    s.innerHTML = `.down-limit,.page-loginbox {
			display:none !important;
		}`;
    document.body.appendChild(s)
    document.removeEventListener("scroll", scrollStyle);
  }
  document.addEventListener("scroll", scrollStyle);
  scrollStyle();

})();