const burgerMenu = document.querySelector('.burger');

function runAnimationAndMenu() {
    this.classList.toggle('active');
    const menuActivator = document.querySelector('nav');
    const menuToSectionOffer = document.querySelector('section.offer');
    menuActivator.classList.toggle('show');
    menuToSectionOffer.classList.toggle('menu-open-portrait');
    menuToSectionOffer.classList.toggle('menu-open-landscape');
}

burgerMenu.addEventListener('click', runAnimationAndMenu);





setTimeout(() => {
    const vanishingHeading = document.querySelector('.neon-wrapper div');
    vanishingHeading.classList.add('off');
}, 7000);

setTimeout(() => {
    const vanishingHello = document.querySelector('div.hello');
    vanishingHello.classList.add('off');
    const logoPositionChange = document.querySelector('.neon-wrapper ul');
    logoPositionChange.classList.add('position-change');
    const lis = document.querySelectorAll('.neon-wrapper ul li');
    lis.forEach(function (li) {
        li.classList.add('font-size-change');
    })

    const firstLi = document.querySelector('.neon-wrapper ul li:nth-last-child(4)');
    firstLi.classList.remove('font-size-change');
    firstLi.classList.add('logo-trasition');
}, 7500);

setTimeout(() => {
    const body = document.querySelector('main');
    body.classList.add('new-bgc');
    const offerBoxLeft = document.querySelector('.offer-wrapper div:first-child');
    offerBoxLeft.classList.add('active');
    const offerBoxRight = document.querySelector('.offer-wrapper div:last-child');
    offerBoxRight.classList.add('active');
    const offerBoxMid = document.querySelector('.offer-wrapper div:nth-child(2)');
    offerBoxMid.classList.add('active');
    const captions = document.querySelector('.captions');
    const burgerMenu = document.querySelector('.burger');
    captions.classList.add('visible');
    burgerMenu.classList.add('visible');
}, 8500);



const hoveredGE = document.querySelector('.offer-wrapper .general-english');
hoveredGE.onmouseover = function () {
    const GEWithBottomBorder = document.querySelector('.captions-general-english h2');
    GEWithBottomBorder.classList.add('border-bottom');
    hoveredGE.onmouseleave = function () {
        GEWithBottomBorder.classList.remove('border-bottom');
    }
}
const hoveredB2B = document.querySelector('.offer-wrapper .b2b');
hoveredB2B.onmouseover = function () {
    const b2bWithBottomBorder = document.querySelector('.captions-b2b h2');
    b2bWithBottomBorder.classList.add('border-bottom');
    hoveredB2B.onmouseleave = function () {
        b2bWithBottomBorder.classList.remove('border-bottom');
    }
}
const hoveredAbroad = document.querySelector('.offer-wrapper .study-abroad');
hoveredAbroad.onmouseover = function () {
    const AbroadWithBottomBorder = document.querySelector('.captions-study-abroad h2');
    AbroadWithBottomBorder.classList.add('border-bottom');
    hoveredAbroad.onmouseleave = function () {
        AbroadWithBottomBorder.classList.remove('border-bottom');
    }
}