let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        navbar.style.top = "-200px";
    }else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
})