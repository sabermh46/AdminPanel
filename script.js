
const profile = document.getElementById('profile');
const inNav = document.getElementById('inNav');
const userPic = document.getElementById('userPic');
const userName = document.getElementById('userName');
const outNav = document.getElementById('outNav');
const proClosed = document.getElementById('proClosed');

function profileToggle() {
    profile.classList.toggle('proClicked');
    inNav.classList.toggle('iNClicked');
    userPic.classList.toggle('uPClicked');
    userName.classList.toggle('uNClicked');
    outNav.classList.toggle('oNClicked');
    proClosed.classList.toggle('pCClicked');
}
proClosed.addEventListener("click", profileToggle());
profileToggle();



        let getSiblings = function (e) {
            // for collecting siblings
            let siblings = []; 
            // if no parent, return no sibling
            if(!e.parentNode) {
                return siblings;
            }
            // first child of the parent node
            let sibling  = e.parentNode.firstChild;
            // collecting siblings
            while (sibling) {
                if (sibling.nodeType === 1 && sibling !== e) {
                    siblings.push(sibling);
                }
                sibling = sibling.nextSibling;
            }
            return siblings;
        };

        let siblings = getSiblings(document.querySelector('.btn-link'));
        console.log(siblings);

        const btn = document.querySelectorAll('btn-link');

        btn.addEventListener('click', function(){
            btn.classList.toggle('menu-active');
        });
