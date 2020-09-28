"use strict";

(function () {
    window.addEventListener("load", init);

    function init() {
        qs("img").addEventListener("dblclick", reveal);
    }

    function reveal() {
        this.classList.add("reveal");
    }

    /** ---- Helper functions ---- */
    function gen(tagName) {
        return document.createElement(tagName);
    }

    function id(idName) {
        return document.getElementById(idName);
    }

    function qs(selector) {
        return document.querySelector(selector);
    }

    function qsa(selector) {
        return document.querySelectorAll(selector);
    }
})();
