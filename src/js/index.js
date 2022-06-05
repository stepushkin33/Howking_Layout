import '../components';
const themeBtn = document.querySelector("#btn-js")
const mainBackground = document.querySelector("body")
const parag = document.querySelectorAll('p')
const links = document.querySelectorAll('a')
const spans = document.querySelectorAll('span')
const titles = document.querySelectorAll('.section__title')
const semiTitles = document.querySelectorAll('h3')
const lists = document.querySelectorAll('li')
const icons = document.querySelectorAll('path')

function getTheme() {
    if(localStorage.getItem('theme') === "night") {
    mainBackground.classList.add("body--dark")

    for(let i = 0; i < parag.length; ++i){
        parag[i].classList.add("dark-text")
    }

    for(let i = 0; i < links.length; ++i){
        links[i].classList.add("dark-text")
    }

    for(let i = 0; i < spans.length; ++i){
        spans[i].classList.add("dark-spans")
    }

    for(let i = 0; i < titles.length; ++i){
        titles[i].classList.add("dark-text")
    }

    for(let i = 0; i < semiTitles.length; ++i){
        semiTitles[i].classList.add("dark-text")
    }

    for(let i = 0; i < lists.length; ++i){
        lists[i].classList.add("dark-text")
    }

    for(let i = 0; i < icons.length; ++i){
        icons[i].classList.add("svg--dark")
    }

    themeBtn.textContent = "Тёмная тема"
    themeBtn.classList.toggle('theme-btn--dark')
}else {
    mainBackground.classList.remove("body--dark")

    for(let i = 0; i < parag.length; ++i){
        parag[i].classList.remove("dark-text")
    }

    for(let i = 0; i < links.length; ++i){
        links[i].classList.remove("dark-text")
    }

    for(let i = 0; i < spans.length; ++i){
        spans[i].classList.remove("dark-spans")
    }

    for(let i = 0; i < titles.length; ++i){
        titles[i].classList.remove("dark-text")
    }

    for(let i = 0; i < semiTitles.length; ++i){
        semiTitles[i].classList.remove("dark-text")
    }

    for(let i = 0; i < lists.length; ++i){
        lists[i].classList.remove("dark-text")
    }

    for(let i = 0; i < icons.length; ++i){
        icons[i].classList.remove("svg--dark")
    }
    themeBtn.classList.remove('theme-btn--dark')
    themeBtn.textContent = "Светлая тема"
}
    }

themeBtn.addEventListener('click', function(evt){
    if(themeBtn.textContent == "Светлая тема") {
        localStorage.setItem("theme", "night")
        getTheme()
    }
    else{
        localStorage.setItem("theme", "day")
        getTheme()
    }
    console.log(localStorage.getItem('theme'))
})

getTheme()
