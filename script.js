
const profile = document.getElementById('profile');
const inNav = document.getElementById('inNav');
const userPic = document.getElementById('userPic');
const userName = document.getElementById('userName');
const outNav = document.getElementById('outNav');
const proClosed = document.getElementById('proClosed');

proClosed.addEventListener('click', profileToggle());

function profileToggle() {
    profile.classList.toggle('proClicked');
    inNav.classList.toggle('iNClicked');
    userPic.classList.toggle('uPClicked');
    userName.classList.toggle('uNClicked');
    outNav.classList.toggle('oNClicked');
    proClosed.classList.toggle('pCClicked');
}
