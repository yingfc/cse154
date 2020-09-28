/*
 * Enables view switching with button presses and handles credential verification.
 */

"use strict";
(function () {
    window.addEventListener("load", init);

    /**
     * Sets up event listener for login button.
     */
    function init() {
        id("login-btn").addEventListener("click", enterLogin);
    }

    /**
     * TODO: fill in promise creation
     * Switches to the login view and sets up the systems for submitting and verifying
     * credentials.
     */
    function enterLogin() {
        id("intro").classList.add("hidden");
        id("login").classList.remove("hidden");

        new Promise(loginExecutor).then(revealSecret).catch(keepOut);
    }

    /**
     * TODO
     * Resolves the calling Promise when correct credentials are submitted before 10
     * seconds pass, otherwise rejecting when the credentials are submitted.
     * @param {function} resolve - A callback to resolve the promise.
     * @param {function} reject - A callback to reject the promise.
     */
    function loginExecutor(resolve, reject) {
        const TIMEOUT_DELAY = 10000;
        let timeout = false;
        setTimeout(function () {
            timeout = true;
        }, TIMEOUT_DELAY);
        id("submit-btn").addEventListener("click", function () {
            if (
                timeout ||
                id("username").value !== "secretStudent" ||
                id("password").value !== "secretPassword"
            ) {
                reject();
            } else {
                resolve();
            }
        });
    }

    /**
     * Switches to the accepted view.
     */
    function revealSecret() {
        id("login").classList.add("hidden");
        id("accepted").classList.remove("hidden");
    }

    /**
     * Switches to the rejected view.
     */
    function keepOut() {
        id("login").classList.add("hidden");
        id("rejected").classList.remove("hidden");
    }

    /**
     * Returns the element that has the ID attribute with the specified value.
     * @param {string} id - element ID
     * @return {object} DOM object associated with id.
     */
    function id(id) {
        return document.getElementById(id);
    }
})();
