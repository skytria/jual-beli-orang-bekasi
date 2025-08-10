const inputNama = document.querySelector(".masukan-nama");
const inputPassword = document.querySelector(".masukan-password");
const tombolLogin = document.querySelector(".tombol-login")

tombolLogin.addEventListener("click",() => {
  const nama = inputNama.value;
  const password = inputPassword.value;
  console.log(nama);
  console.log(password);
  
  
})

