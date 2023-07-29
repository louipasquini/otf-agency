const fazemosSection = document.getElementById('fazemos');
const scroll = document.getElementById('scroll');

function animeScroll() {
    const windowTop = window.pageYOffset;
    console.log(windowTop)
    if (windowTop > 759 && windowTop < 1659) {
        scroll.style.marginTop = '20px'
    } else if (windowTop >= 1659 && windowTop < 2600) {
        scroll.style.marginTop = '35px'
    } else if (windowTop > 2600 && windowTop < 3500) {
        scroll.style.marginTop = '50px'
    } else if (windowTop <= 759) {
        scroll.style.marginTop = '0px'
    } else if (windowTop > 3500) {
        scroll.style.marginTop = '68px'
    }
}

window.addEventListener('scroll', function() {
    animeScroll()
})