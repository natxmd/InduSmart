function toggleMenu() {
    var isMobile = window.matchMedia("only screen and (max-width: 880px)").matches;
    if (isMobile) {
        var menu = document.querySelector('.menu');
        menu.classList.toggle('responsive');
    }
}