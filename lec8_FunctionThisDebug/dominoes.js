"use strict";
(function () {
    window.addEventListener("load", init);

    function init() {
        addDivs();
    }

    function addDivs() {
        let section = qs("section");
        for (let i = 0; i < 190; i++) {
            section.appendChild(createDiv());
        }
    }

    function createDiv() {
        let div = gen("div");
        div.addEventListener("dblclick", removeAll);
        return div;
    }

    function removeAll() {
        console.log(this.parentNode.children);
        let divs = qsa("section > div");
        for (let i = 0; i < divs.length; i++) {
            divs[i].remove();
        }
    }

    /** ---- Helper Functions  ---- */

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
