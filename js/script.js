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
        window.location.href = 'main.html';
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