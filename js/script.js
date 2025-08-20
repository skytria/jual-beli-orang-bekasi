const inputNama = document.querySelector(".masukan-nama");
const inputPassword = document.querySelector(".masukan-password");
const tombolLogin = document.querySelector(".tombol-login");

tombolLogin.addEventListener("click", (e) => {
  e.preventDefault();
  const nama = inputNama.value.trim();
  const password = inputPassword.value.trim();
  
  // Load the profile data from JSON file
  fetch('../database/profile.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Check if credentials match
      const user = data.profile.find(user =>
        user.nama === nama && user.password === password
      );
      
      if (user) {
        // Successful login - redirect to main.html
        window.location.href = '../main.html';
      } else {
        // Failed login
        alert('Nama atau password salah!');
      }
    })
    .catch(error => {
      console.error('Error loading profile data:', error);
      alert('Terjadi kesalahan saat memproses login. Silakan coba lagi.');
    });
});

// Fungsi pembuatan gelembung yang diperbarui
function createBubbles() {
  const ship = document.querySelector('.kapal-karam');
  const shipRect = ship ? ship.getBoundingClientRect() : { 
    left: 0, 
    right: 0, 
    top: 0, 
    bottom: 0 
  };
  
  // Buat lebih banyak gelembung
  for (let i = 0; i < 100; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    // Ukuran acak
    const size = Math.random() * 20 + 5;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    
    // Variasi posisi X
    let x;
    const margin = 100; // Jarak dari kapal
    const shipWidth = shipRect.right - shipRect.left;
    
    // Pastikan gelembung tidak muncul di atas kapal
    if (Math.random() > 0.5) {
      // Area kiri kapal
      x = Math.random() * Math.max(0, shipRect.left - margin);
    } else {
      // Area kanan kapal
      x = shipRect.right + margin + Math.random() * (window.innerWidth - shipRect.right - margin);
    }
    
    bubble.style.left = `${x}px`;
    bubble.style.setProperty('--random-x', (Math.random() * 2 - 1)); // Gerakan horizontal acak
    
    // Durasi dan delay animasi
    const duration = Math.random() * 15 + 10;
    bubble.style.animationDuration = `${duration}s`;
    bubble.style.animationDelay = `${Math.random() * 5}s`;
    
    document.body.appendChild(bubble);
  }
}

// Inisialisasi dengan pemeriksaan DOM
document.addEventListener('DOMContentLoaded', () => {
  createBubbles();
  setInterval(createBubbles, 15000); // Buat gelembung setiap 15 detik
  
  // Bersihkan gelembung yang sudah tidak terlihat
  setInterval(() => {
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach(bubble => {
      const rect = bubble.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        bubble.remove();
      }
    });
  }, 5000);
});

// Handle resize window
window.addEventListener('resize', () => {
  document.querySelectorAll('.bubble').forEach(bubble => bubble.remove());
  createBubbles();
});