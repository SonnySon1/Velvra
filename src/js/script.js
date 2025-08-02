const navbarElement = document.getElementById('navbar');

// on and of navbar
function navbar(scrollPercent) {
    if (scrollPercent > 5) {
        navbarElement.classList.add('bg-white', 'shadow-lg')
    }
    else{
        navbarElement.classList.remove('bg-white', 'shadow-lg')
    }
}


// scroll event
window.onscroll = function () {
        // Total scroll yang sudah dilakukan
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        // Tinggi total konten halaman - tinggi tampilan layar
        let docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        // Hitung persentase scroll (0 - 100)
        let scrollPercent = (scrollTop / docHeight) * 100;

        // Bulatkan jika mau
        scrollPercent = Math.round(scrollPercent);

        navbar(scrollPercent);
}

