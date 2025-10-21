const inputNamaDepan = document.getElementById("namaDepan");
const inputNamaBelakang = document.getElementById("namaBelakang");
const tombolKirim = document.getElementById("tombolKirim"); // Pastikan ID tombol di HTML kamu "tombolKirim"

function tampilkanNamaLengkap() {
  const depan = inputNamaDepan.value;
  const belakang = inputNamaBelakang.value;

  console.log("Nama Lengkap: " + depan + " " + belakang + ".");
}
tombolKirim.addEventListener("click", tampilkanNamaLengkap);
