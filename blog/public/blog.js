"use strict";
(function() {
    window.addEventListener("load", init);
  
    function init() {
        getBlogPosts();
        id('blog-post').addEventListener('submit', newPost);
    }
  
    async function getBlogPosts() {
        try {
            let resp = await fetch('blogs');
            checkStatus(resp);
            let posts = await resp.json();
            addPosts(posts);
        } catch (error) {
            console.error(error);
        }
    }

    function addPosts(posts) {
        id('blogs').innerHTML = "";
        posts.forEach(post => {
            let blog = gen('article');
            let title = gen('h2');
            let date = gen('p');
            let body = gen('p');

            date.textContent = (new Date(post.time)).toLocaleString();
            title.textContent = post.title;
            body.textContent = post.body;

            blog.appendChild(title);
            blog.appendChild(body);
            blog.appendChild(date);

            id('blogs').appendChild(blog);
        });
    }

    function newPost(e) {
        e.preventDefault();
        let params = new FormData(e.currentTarget);
        fetch('post/new', { method: 'POST', body: params })
            .then(checkStatus)
            .then(getBlogPosts)
            .catch(console.error);
    }
  
    function checkStatus(response) {
        if (response.ok) {
            return response;
        } else {
            throw Error('Error in request: ' + response.statusText);
        }
    }
  
    function id(id) {
        return document.getElementById(id);
    }
  
    function qs(selector) {
        return document.querySelector(selector);
    }
  
    function qsa(selector) {
        return document.querySelectorAll(selector);
    }

    function gen(element) {
        return document.createElement(element);
    }
})();
