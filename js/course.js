function redirectToUpcoming() {
    var upcomingDiv = document.getElementById("upcoming-batches");

    upcomingDiv.style.display = "block";
    upcomingDiv.scrollIntoView({ behavior: 'smooth' });
}

function showData(buttonNumber) {
for (let i = 1; i <= 3; i++) {
document.getElementById('data' + i).classList.add('hidden');
}
document.getElementById('data' + buttonNumber).classList.remove('hidden');

const buttons = document.querySelectorAll('.butt button');
buttons.forEach((button, index) => {
if (index + 1 === buttonNumber) {
    button.classList.add('active');
} else {
    button.classList.remove('active');
}
});
}

var acc = document.getElementsByClassName("accordion");
var j;
for (j = 0; j < acc.length; j++) {
acc[j].addEventListener("click", function() {
this.classList.toggle("active");
var panel = this.nextElementSibling;
if (panel.style.display === "block") {
panel.style.display = "none";
} else {
panel.style.display = "block";
}
});
}

function showFullContent() {
document.getElementById('partialContent').style.display = 'none';
document.getElementById('fullContent').style.display = 'block';
}
function showPartialContent() {
document.getElementById('fullContent').style.display = 'none';
document.getElementById('partialContent').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function () {
const menuItems = document.querySelectorAll('.menu h1, .menu h2, .sec-menu h2');

window.addEventListener('scroll', function () {
const scrollPosition = window.scrollY;

menuItems.forEach(function (menuItem) {
    const targetSectionId = menuItem.innerText.replace(/\s+/g, '-').toLowerCase();
    const targetSection = document.getElementById(targetSectionId);

    if (targetSection) {
        const targetSectionOffset = targetSection.getBoundingClientRect().top + window.scrollY;
        const isInSection = scrollPosition >= targetSectionOffset && scrollPosition < targetSectionOffset + targetSection.offsetHeight;

        if (isInSection) {
            menuItem.classList.add('active');
        } else {
            menuItem.classList.remove('active');
        }
    }
});
});

menuItems.forEach(function (menuItem) {
menuItem.addEventListener('click', function () {
    const targetSectionId = menuItem.innerText.replace(/\s+/g, '-').toLowerCase();
    const targetSection = document.getElementById(targetSectionId);

    if (targetSection) {
        window.scrollTo({
            top: targetSection.getBoundingClientRect().top + window.scrollY - 10,
            behavior: 'smooth'
        });
    }
});
});
})
