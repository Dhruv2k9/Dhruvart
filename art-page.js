let recentDrawings = document.querySelectorAll('.drawings')
let viewport = document.querySelector('.viewport')
let crossBtn = document.querySelector('.crossBtn')

let menu = document.querySelector('.menu')
let navSlide = document.querySelector('.nav-slide')
let navArt = document.querySelector('.myArtText')
let navArtD = document.querySelectorAll('.myArtD')
let navArrow = document.querySelector('.arrow')

let selections = document.querySelectorAll('.selections')


selections.forEach(selected => {
    selected.addEventListener('click', e => {
        removeSelectedClass()
        e.target.classList.add("selected")
        clearPhotos();
        loadPhotos(e.target.innerHTML.toLowerCase())
    })
})

function removeSelectedClass() {
    for (let i = 0; i < selections.length; i++) {
        selections[i].classList.remove("selected")
    }
}

function clearPhotos() {
    document.getElementById('gallery-wrapper').innerHTML = '';
}
// for (let i = 0; i < selections.length; i++) {
//     console.log(selected)
// }



for (let i = 0; i < recentDrawings.length; i++) {
    recentDrawings[i].addEventListener('click', e => {
        viewport.classList.remove('hide-viewport')
        viewport.style.backgroundImage = 'url(' + " ' " + e.target.src + "'" + ')'
        crossBtn.classList.remove('hide-viewport')
    })
}
crossBtn.addEventListener('click', e => {
    crossBtn.classList.add('hide-viewport')
    viewport.classList.add('hide-viewport')
})


//nav scripts


function ScrollAbout() {
    // window.scrollTo({top:3000,behavior:"smooth"})
    aboutCont.scrollIntoView(false)
    aboutContSmall.scrollIntoView(false)
}
function ScrollContact() {
    // window.scrollTo({top:3700,behavior:"smooth"})
    contactCont.scrollIntoView(false)
    contactContSmall.scrollIntoView(false)
}
function ScrollHome() {
    // window.scrollTo({top:-10,behavior:"smooth"})
    heroTitle.scrollIntoView(false)
}



document.body.addEventListener('click', () => {
    navSlide.classList.add('hidden-nav')
})
navSlide.addEventListener('click', e => {
    console.log('slide area');
    e.stopPropagation();
});
menu.addEventListener('click', e => {
    console.log('Burger clicked');
    e.stopPropagation();
    e.preventDefault();
    navSlide.classList.remove('hidden-nav')

})
navArt.addEventListener('click', e => {

    for (var i = 0; i < navArtD.length; i++) {
        navArtD[i].classList.toggle('hide')
    }
    navArrow.classList.toggle('rotate')
})
