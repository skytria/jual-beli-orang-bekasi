const inputNama = document.querySelector(".masukan-nama");
const inputPassword = document.querySelector(".masukan-password");
const tombolLogin = document.querySelector(".tombol-login")

tombolLogin.addEventListener("click",(e) => {
  e.preventDefault();
  const nama = inputNama.value;
  const password = inputPassword.value;
})
