const fazemosSection = document.getElementById('fazemos');
const scroll = document.getElementById('scroll');

function animeScroll() {
    const windowTop = window.pageYOffset;
    console.log(windowTop)
    if (windowTop > 900 && windowTop < 1800) {
        scroll.style.marginTop = '20px'
    } else if (windowTop > 1800 && windowTop < 2700) {
        scroll.style.marginTop = '35px'
    } else if (windowTop > 2700) {
        scroll.style.marginTop = '50px'
    } else if (windowTop < 900) {
        scroll.style.marginTop = '0px'
    }
}

window.addEventListener('scroll', function() {
    animeScroll()
})