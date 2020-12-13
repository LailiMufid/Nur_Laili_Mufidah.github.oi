var n = prompt("Masukkan Nama");
var c = confirm("Selamat datang " + n +", Anda telah memasuki blog Waroeng Nenek Kita!");
if (c== true){
    alert('Silahkan Mampir!');
}else{
    alert('No Problem!');
}
var c = confirm(n + ", lanjut melihat menu kami?");
if (c==true){
    alert('Selamat Menikmati!');
}else{
    alert('Jangan lupa mampir lagi!')
}
function successFunction() {
    alert("Selamat, login Anda berhasil!")
}
function failedFunction() {
    alert("Baik, silahkan coba lagi!")
}