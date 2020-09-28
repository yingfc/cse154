/**
 * CSE 154
 * stopwatch timer solution
 */

"use strict";
(function () {
    let stopwatchTime = 0;
    let timerId = null;
    window.addEventListener("load", init);

    /**
     * initiates page upon load
     */
    function init() {
        id("stopwatch").addEventListener("click", toggleStopwatch);
        id("reset").addEventListener("click", resetStopwatch);
    }

    /**
     * toggles the stop watch time
     */
    function toggleStopwatch() {
        if (timerId == null) {
            timerId = setInterval(() => {
                stopwatchTime++;
                console.log(stopwatchTime + " seconds");
            }, 1000);
        } else {
            clearInterval(timerId);
            timerId = null;
        }
    }

    /**
     * resets the stop watch
     */
    function resetStopwatch() {
        stopwatchTime = 0;
    }

    /* -------------------- Helper Function -------------------- */
    /**
     * id helper function
     * @param {String} idName name of id
     * @return {Object} element with id name
     */
    function id(idName) {
        return document.getElementById(idName);
    }
})();
