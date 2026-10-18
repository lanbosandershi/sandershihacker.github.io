/*
 * File: main.js
 * Description: This is the main JavaScript file for Sander's personal website.
 * Author: Sander Shi
 */

document.addEventListener("DOMContentLoaded", function () {
    // Navigation Menu (small screens)
    var navbar = document.querySelector(".navbar");
    var menuButton = document.querySelector(".menu-button");
    menuButton.addEventListener("click", function () {
        var open = navbar.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", open);
    });
    document.querySelectorAll(".nav-links a").forEach(function (link) {
        link.addEventListener("click", function () {
            navbar.classList.remove("open");
            menuButton.setAttribute("aria-expanded", false);
        });
    });
});
