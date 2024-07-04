//AOS
AOS.init({
    offset: 400,
    duration: 1000
});

const navToggle = document.querySelector('[data-collapse-toggle="navbar-default"]');
const navContent = document.getElementById('navbar-default');

//ResponsiveToggler
document.addEventListener('DOMContentLoaded', () => {
    navToggle.addEventListener('click', () => {
        navContent.classList.toggle('hidden');
    });
});

//textChevron
let chevron = document.querySelector('.chevron');
let text_about = document.getElementById('text_about');

chevron.addEventListener('click', () => {
    chevron.classList.toggle('active');
    text_about.classList.toggle('visible');
});

//Tarifs 
let part1_tarif = document.getElementById('tarif_card1');
let part2_tarif = document.getElementById('tarif_card2');
let text1_tarif = document.getElementById('text1_card');
let text2_tarif = document.getElementById('text2_card');
let image_tarif = document.getElementById('image_tarif');

part1_tarif.addEventListener('click', () => {
    text1_tarif.style.display = 'block';
    text1_tarif.classList.add('tarif_card');
    text2_tarif.classList.remove('tarif_card');
    image_tarif.style.display = 'none';
});

part2_tarif.addEventListener('click', () => {
    text2_tarif.style.display = 'block';
    text2_tarif.classList.add('tarif_card');
    text1_tarif.classList.remove('tarif_card');
    text1_tarif.style.display = 'none';
    image_tarif.style.display = 'none';
});

let boutton_tarif = document.getElementById('button_tarif');

boutton_tarif.addEventListener('click', () => {
    window.location.hash = 'tarifs';
});

//boutonReserver
let boutton_reserver = document.getElementById('reservation');

boutton_reserver.addEventListener('click', () => {
    window.location.hash = 'reservation_page';
});

//Réservation
let bouttonReserver = document.getElementById('button_reserver');
let iconNike = document.getElementById('message_reussi');
let nom = document.getElementById('nom');
let mail = document.getElementById('mail');
let debut = document.getElementById('checkIn');
let nombrePersonne = document.getElementById('membre');
let phone = document.getElementById('phone');
let fin = document.getElementById('checkOut');

bouttonReserver.addEventListener('click', () => {
    if (nom.value != "" && mail.value != "" && debut.value != "" && nombrePersonne.value != "" && phone.value != "" && fin.value != "") {
        event.preventDefault();
        setTimeout( () => {
            iconNike.style.opacity = '1';
            setTimeout(() => {
                iconNike.style.opacity = '0';  
            }, 2000);
        }, 2000);
    }
});