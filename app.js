let img = document.querySelector('img#rfi');
let UTG = document.querySelector('#UTG');
let UTG_1 = document.querySelector('#UTG_1');
let UTG_2 = document.querySelector('#UTG_2');
let LJ = document.querySelector('#LJ');
let HJ = document.querySelector('#HJ');
let CO = document.querySelector('#CO');
let BU = document.querySelector('#BU');

UTG.addEventListener('click', () => {
    img.src = 'preflop_img/RFI_UTG.png';
})

UTG_1.addEventListener('click', () => {
    img.src = 'preflop_img/RFI_UTG+1.png';
})

UTG_2.addEventListener('click', () => {
    img.src = 'preflop_img/RFI_UTG+2.png';
})

LJ.addEventListener('click', () => {
    img.src = 'preflop_img/RFI_LJ.png';
})

HJ.addEventListener('click', () => {
    img.src = 'preflop_img/RFI_HJ.png';
})

CO.addEventListener('click', () => {
    img.src = 'preflop_img/RFI_CO.png';
})

BU.addEventListener('click', () => {
    img.src = 'preflop_img/RFI_BU.png';
})

