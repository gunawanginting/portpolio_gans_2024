const header = document.querySelector('header');

window.addEventListener ("scroll", function() {
    header.classlist.toggle ("sticky", window.scroLLY >  120);
});


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');

};

window.onscroll = () => {
    menu.classList. remove('bx-x');
    navlist.classList. remove('active');
};
const form = document.querySelector('form');
const Nama = document.getElementById("Nama");
const Alamat = document.getElementById("Alamat email");
const Tulis = document.getElementById("Tulis");

function sendEmail() {
    const bodyMessage = `Full name: ${Nama.value}<br> Email: ${Alamat.value}<br> Tulis pesan: ${Tulis.value}<br>`;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "gans.miraclecreative.03@gmail.com",
        Password: "F0AACAC8FC3A265F19B9AD12EAF23432A070",
        To: 'gans.miraclecreative.03@gmail.com',
        From: "gans.miraclecreative.03@gmail.com",
        Subject: "New Contact Form Submission", // Hanya sebagai contoh, subjek tetap ditentukan di sini
        Body: bodyMessage
    }).then(
        message => {
            if  (message == "OK"){
                Swal.fire({
                    title: "BERHASIL",
                    text: "Pesan Anda Telah Terkirim !",
                    icon: "success"
                  });
            }
        }
    );
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (typeof Email !== 'undefined' && typeof Email.send === 'function') {
        sendEmail();
    } else {
        console.error('Perpustakaan SMTP.js tidak dimuat.');
    }
});
