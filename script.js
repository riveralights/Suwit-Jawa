function getPilihanKomputer() {
  // menangkap pilihan computer
  // membangkitkan bilangan random
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getHasil(computer, player) {
  // menentukan rules
  if (player == computer) return "SERI!";
  if (player == "gajah") return computer == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return computer == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return computer == "orang" ? "KALAH" : "MENANG!";
}

function putar(){
  const imgComputer = document.querySelector('.img-komputer'); //ambil gambar
  const gambar = ['gajah', 'semut', 'orang'];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function(){
    if( new Date().getTime() - waktuMulai > 1000){
      clearInterval;
      return;
    }
    imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
    if( i == gambar.length ) i = 0;
  }, 100);
}

const pilihanPlayer = document.querySelectorAll("li img");
pilihanPlayer.forEach(function (e) {
  e.addEventListener("click", function () {
        const pilihanKomputer = getPilihanKomputer(); // ambil pilihan komputer
        const pilihanPlayer = e.className; // ambil pilihan player berdasarkan nama kelas
        const hasil = getHasil(pilihanKomputer, pilihanPlayer); // masukkan jawaban ke parameter function

        putar();

        setTimeout(function() {
          const imageComputer =  document.querySelector('.img-komputer'); //ambil gambar komputer
          imageComputer.setAttribute('src', 'img/'+ pilihanKomputer +'.png'); //ubah gambarnya berdasarkan pilihan
          const info = document.querySelector('.info'); // ambil elemen info
          info.innerHTML = hasil; //tulis di tengah div
        }, 1000);
  });
});

// const playerGajah = document.querySelector('.gajah'); // ambil gambar gajah
// // berikan event ketika di click
// playerGajah.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer(); // ambil pilihan komputer
//     const pilihanPlayer = playerGajah.className; // ambil pilihan player berdasarkan nama kelas
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer); // masukkan jawaban ke parameter function

//     const imageComputer =  document.querySelector('.img-komputer'); //ambil gambar komputer
//     imageComputer.setAttribute('src', 'img/'+ pilihanKomputer +'.png'); //ubah gambarnya berdasarkan pilihan

//     const info = document.querySelector('.info'); // ambil elemen info
//     info.innerHTML = hasil; //tulis di tengah div
// });

// const playerOrang = document.querySelector('.orang'); // ambil gambar orang
// // berikan event ketika di click
// playerOrang.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer(); // ambil pilihan komputer
//     const pilihanPlayer = playerOrang.className; // ambil pilihan player berdasarkan nama kelas
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer); // masukkan jawaban ke parameter function

//     const imageComputer =  document.querySelector('.img-komputer'); //ambil gambar komputer
//     imageComputer.setAttribute('src', 'img/'+ pilihanKomputer +'.png'); //ubah gambarnya berdasarkan pilihan

//     const info = document.querySelector('.info'); // ambil elemen info
//     info.innerHTML = hasil; //tulis di tengah div
// });

// const playerSemut = document.querySelector('.semut'); // ambil gambar semut
// // berikan event ketika di click
// playerSemut.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer(); // ambil pilihan komputer
//     const pilihanPlayer = playerSemut.className; // ambil pilihan player berdasarkan nama kelas
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer); // masukkan jawaban ke parameter function

//     const imageComputer =  document.querySelector('.img-komputer'); //ambil gambar komputer
//     imageComputer.setAttribute('src', 'img/'+ pilihanKomputer +'.png'); //ubah gambarnya berdasarkan pilihan

//     const info = document.querySelector('.info'); // ambil elemen info
//     info.innerHTML = hasil; //tulis di tengah div
// });
