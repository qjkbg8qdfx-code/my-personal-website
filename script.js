/**
 * System.Logic UI Interactions
 * 1. Mobile Menu Toggle
 * 2. Scroll Reveal Animations
 */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Mobile Menu Toggle --- */
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.main-nav ul');
    const navLinks = document.querySelectorAll('.main-nav a');

    if (hamburger && navMenu) {
        // Toggle Menu
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('nav-active');
            document.body.classList.toggle('no-scroll'); // Prevent body scroll when menu is open
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('nav-active');
                document.body.classList.remove('no-scroll');
            });
        });
    }


    /* --- 2. Scroll Reveal Animations --- */
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed if you only want it to happen once
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Slight offset so it triggers a bit before the very bottom
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

});
