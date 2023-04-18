const burgerEl = document.querySelector('.burger');
const menuEl = document.querySelector('.menu');
burgerEl.addEventListener('click', function () {
    burgerEl.classList.toggle('active');
    menuEl.classList.toggle('active');
});


const menuLink = document.querySelector('.menu');
menuLink.addEventListener('click', function () {
    menuLink.classList.toggle('active');
    burgerEl.classList.toggle('active');
});


const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = e.target.getAttribute('href').substr(1);
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

document.addEventListener("DOMContentLoaded", () => {
    const topBtn = document.querySelector(".goUp");
    window.onscroll = function () {
        if (window.pageYOffset > 580) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    }
    topBtn.addEventListener("click", function () {
        window.scrollBy({
            top: -document.documentElement.scrollHeight,
            behavior: "smooth"
        });
    });
});