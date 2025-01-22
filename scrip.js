document.addEventListener("DOMContentLoaded", function () {
    const btnMenu = document.querySelector(".btn-menu");
    const navigationPage = document.querySelector(".navigation-page");
    const closeBtn = document.querySelector(".close-btn");

    // Fungsi untuk membuka navigasi
    function openNavigation() {
        navigationPage.classList.add("active");
    }

    // Fungsi untuk menutup navigasi
    function closeNavigation() {
        navigationPage.classList.remove("active");
    }

    // Event listener untuk tombol menu
    btnMenu.addEventListener("click", function (event) {
        event.stopPropagation(); // Mencegah klik pada tombol menutup navigasi
        openNavigation();
    });

    // Event listener untuk tombol tutup
    closeBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Mencegah klik pada tombol tutup memicu event luar
        closeNavigation();
    });

    // Event listener untuk klik di luar navigasi
    document.addEventListener("click", function (event) {
        if (!navigationPage.contains(event.target) && !btnMenu.contains(event.target)) {
            // Jika klik terjadi di luar navigasi dan tombol menu
            closeNavigation();
        }
    });
});
