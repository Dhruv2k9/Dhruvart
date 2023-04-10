let slider = document.querySelector('[data-slider]')
let nextbtn = document.querySelector('[data-next]')
let prevbtn = document.querySelector('[data-prev]')
let currentDEG = 60;

let sliderpp = document.querySelector('[data-slider-pp]')
let nextbtnpp = document.querySelector('[data-next-pp]')
let prevbtnpp = document.querySelector('[data-prev-pp]')
let currentDEGpp = 60;


let slidingIndex = 0
let menu = document.querySelector('.menu')
let navSlide = document.querySelector('.nav-slide')
let navArt = document.querySelector('.myArtText')
let navArtD = document.querySelectorAll('.myArtD')
let navArrow = document.querySelector('.arrow')

let recentDrawings = document.querySelectorAll('.click-items')
let viewport = document.querySelector('.viewport')
let crossBtn = document.querySelector('.crossBtn')



//OBSERVER ELEMENTS

let heroTitle = document.querySelector(".heading") 
let latestContainer = document.querySelector('.container')
let sliderContainer = document.querySelector('.slider-container')
let latestTitle = document.querySelector('.latest-title')
let projectTitle = document.querySelector('[data-pp-title]')
let conceptSection = document.querySelector('.concept-section')
let projectContainer = document.querySelector('.project-container')
let aboutCont = document.querySelector('.about-container')
let aboutContSmall = document.querySelector('.about-container-small')
let contactCont = document.querySelector('.contact-curtain')
let contactContSmall = document.querySelector('.form')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('animation-reveal', entry.isIntersecting)
    })
},{
    threshold:0
})

observer.observe(heroTitle)
observer.observe(latestContainer)
observer.observe(latestTitle)
observer.observe(sliderContainer)
observer.observe(projectTitle)
observer.observe(projectContainer)
observer.observe(conceptSection)
observer.observe(aboutCont)
observer.observe(aboutContSmall)
observer.observe(contactCont)
observer.observe(contactContSmall)
//NAV SCRIPTS




document.body.addEventListener('click', () => {
    navSlide.classList.add('hidden-nav')
})
navSlide.addEventListener('click', e => {
        console.log('slide area');
        // e.preventDefault();
        e.stopPropagation();
    });

menu.addEventListener('click', e => {
    console.log('Burger clicked');
    e.stopPropagation();
    e.preventDefault();
    navSlide.classList.remove('hidden-nav')
    
})
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
// navArt.addEventListener('click', e => {
    
//     for (var i = 0; i < navArtD.length; i++) {
//         navArtD[i].classList.toggle('hide')
//     }
//     navArrow.classList.toggle('rotate')
// })



//LATEST ART CARD SCRIPTS
for (let i = 0; i < recentDrawings.length; i++) {
    recentDrawings[i].addEventListener('click', e => {
        viewport.classList.remove('hide-viewport')
        // console.log('click ' + e.target.src)
        viewport.style.backgroundImage = 'url(' + " ' " + e.target.src + "'" + ')'
        crossBtn.classList.remove('hide-viewport')
    })
}
crossBtn.addEventListener('click', e => {

    crossBtn.classList.add('hide-viewport')
    viewport.classList.add('hide-viewport')
})

nextbtnpp.addEventListener('click', e => {
    sliderpp.style.transform += "rotateY(" + -currentDEGpp + 'deg' + ")"
})
prevbtnpp.addEventListener('click', e => {
    sliderpp.style.transform += "rotateY(" + currentDEGpp + 'deg' + ")"

})

nextbtn.addEventListener('click', e => {
    slider.style.transform += "rotateY(" + -currentDEG + 'deg' + ")"
    console.log(currentDEG)
})
prevbtn.addEventListener('click', e => {

    slider.style.transform += "rotateY(" + currentDEG + 'deg' + ")"

})