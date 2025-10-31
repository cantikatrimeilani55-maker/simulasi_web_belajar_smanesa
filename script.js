// Fungsi untuk mengaktifkan/menonaktifkan mode gelap
function toggleDarkMode() {
    // Mengubah class 'dark-mode' pada elemen <body>
    document.body.classList.toggle('dark-mode');

    // Menyimpan preferensi pengguna di Local Storage (agar mode tetap aktif saat dibuka kembali)
    let isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);

    // Mengubah teks tombol
    const toggleButton = document.getElementById('darkModeToggle');
    if (isDarkMode) {
        toggleButton.textContent = '☀️ Mode Terang';
    } else {
        toggleButton.textContent = '🌙 Mode Gelap';
    }
}

// Cek preferensi pengguna saat website dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Ambil status dari Local Storage
    const savedMode = localStorage.getItem('darkMode');
    const toggleButton = document.getElementById('darkModeToggle');

    // Jika ada preferensi tersimpan DAN itu 'true', aktifkan mode gelap
    if (savedMode === 'true') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = '☀️ Mode Terang';
    } else {
         toggleButton.textContent = '🌙 Mode Gelap';
    }

    // Pasang event listener pada tombol
    toggleButton.addEventListener('click', toggleDarkMode);
});
