
//Event listener
document.querySelector('#backToTop').onclick = function (event) {
    window.scrollTo(0, 0)
}


document.querySelector('#darkMode').onclick = function (event) {

    document.querySelector('body').classList.toggle('dark')

}