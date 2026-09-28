function aparecer() {
    window.addEventListener('scroll', () => {
        if (window.scrollY < 50) {
            document.getElementsByClassName('animar')[0].style.opacity = 0;
        } else {
            document.getElementsByClassName('animar')[0].style.opacity = 100;
        }
    })
}
