"use strict";
(function () {
    const URL = "http://localhost:8000/addItem"; // Add endpoint URL

    window.addEventListener("load", init);

    // Part 1: Add event listener
    function init() {
        document
            .addEventListener("input-form")
            .addEventListener("submit", submitRequest);
    }

    // Part 2: Make request to our endpoint
    async function submitRequest(e) {
        e.preventDefault();
        let data = new FormData(document.addEventListener("input-form"));
        // let data = new FormData(e.currentTarget);
        try {
            let resp = await fetch(URL, { method: "POST", body: data });
            checkStatus(resp);
            resp = await resp.json();
            showResponse(resp);
        } catch (error) {
            handleError(error);
        }
    }

    function showResponse(responseData) {
        document.getElementById("results").textContent = responseData.result;
    }

    function handleError(responseText) {
        document.getElementById("results").textContent =
            "Check out the Network tab for the response details!";
    }

    function checkStatus(response) {
        if (response.ok) {
            return response;
        } else {
            throw Error("Error in request: " + response.statusText);
        }
    }
})();
