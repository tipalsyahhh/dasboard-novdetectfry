document.addEventListener("DOMContentLoaded", function () {
    const btnMenu = document.querySelector(".btn-menu");
    const navigationPage = document.querySelector(".navigation-page");
    const closeBtn = document.querySelector(".close-btn");
    function openNavigation() {
        navigationPage.classList.add("active");
    }
    function closeNavigation() {
        navigationPage.classList.remove("active");
    }
    btnMenu.addEventListener("click", function (event) {
        event.stopPropagation(); 
        openNavigation();
    });
    closeBtn.addEventListener("click", function (event) {
        event.stopPropagation(); 
        closeNavigation();
    });
    document.addEventListener("click", function (event) {
        if (!navigationPage.contains(event.target) && !btnMenu.contains(event.target)) {
            closeNavigation();
        }
    });
});
