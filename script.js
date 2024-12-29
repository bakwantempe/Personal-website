// script.js
window.onscroll = function() {
    const header2 = document.getElementById("header");
    const sticky = header.offsetTop; // Posisi header dari atas

    if (window.pageYOffset > sticky) {
        header2.style.position = "fixed"; // Mengubah posisi menjadi fixed
        header2.style.top = "0"; // Menempatkan header di atas
    } else {
        header2.style.position = "relative"; // Kembali ke posisi semula
    }
};