/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
//dark mode
// let isDarkMode = false;

// // Fungsi untuk mengubah tema
// function toggleDarkMode() {
//   const body = document.body;
//   if (!isDarkMode) {
//     body.classList.add("dark-mode");
//     isDarkMode = true;
//   } else {
//     body.classList.remove("dark-mode");
//     isDarkMode = false;
//   }
// }

// // Mengambil tombol untuk toggle mode
// const darkModeToggle = document.getElementById("dark-mode-toggle");

// // Menambahkan event listener untuk toggle mode ketika tombol ditekan
// darkModeToggle.addEventListener("click", toggleDarkMode);

// Tema default

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});