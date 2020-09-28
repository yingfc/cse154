"use strict";

(function () {
    window.addEventListener("load", init);

    function init() {
        let myBtn = qs("button");
        myBtn.addEventListener("click", printMsg);
        myBtn.addEventListener("click", function () {
            console.log("anonymous func");
        });
        myBtn.addEventListener("click", (e) => {
            console.log(e.currentTarget);
            e.currentTarget.textContent = "arrow func";
        });
    }

    function printMsg() {
        console.log(this);
        // this.textContent = "named function";
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
