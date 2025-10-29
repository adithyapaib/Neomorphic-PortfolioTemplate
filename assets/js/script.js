// Initialize WOW.js for animations
new WOW().init();

// Initialize Typed.js for typing animation (only if element exists)
const typedElement = document.querySelector("#typed");
if (typedElement) {
    new Typed("#typed", {
        strings: ['Programmer', 'Engineer', 'Gamer', 'Designer'],
        typeSpeed: 50,
        smartBackspace: true,
        backSpeed: 35,
        loop: true,
        showCursor: false,
    });
}

// Scroll to top button functionality (only if element exists)
const btnScrollToTop = document.querySelector("#btnScrollToTop");
if (btnScrollToTop) {
    btnScrollToTop.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
}