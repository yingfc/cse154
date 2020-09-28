"use strict";

(function () {
    console.log("Run before the DOM is fully loaded");
    console.log("Status of the button element: " + qs("#my-button"));

    window.addEventListener("DOMContentLoaded", init);

    function init() {
        console.log("Run after the DOM is fully loaded");
        console.log("Status of the button element: " + qs("#my-button"));

        let b = qs("#my-button");
        b.addEventListener("click", clickedButton);
    }

    function clickedButton() {
        let p = qs("p");
        p.classList.toggle("hidden");
    }

    function qs(selector) {
        return document.querySelector(selector);
    }

    function qsa(selector) {
        return document.querySelectorAll(selector);
    }

    function id(idName) {
        return document.getElementById(idName);
    }
})();
