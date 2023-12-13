document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  const socialIcons = document.querySelector('.social-icons');

  mobileMenuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('show');
      socialIcons.classList.toggle('show');
  });
});

var dropdown = document.getElementById("dropdown");
var dropdownContent = dropdown.querySelector(".dropdown-content");
var nestedDropdownTrigger = dropdown.querySelector(".nested-dropdown-trigger");
var nestedDropdownContent = dropdown.querySelector(".nested-dropdown-content");

dropdown.addEventListener("click", function (event) {
    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
    event.stopPropagation(); 
});

document.addEventListener("click", function (event) {
    var targetElement = event.target;

    if (!dropdown.contains(targetElement)) {
        dropdownContent.style.display = "none";
    }
});
const MegaMenuList = document.querySelector("#Company-MegaMenu");
const MMListItem = MegaMenuList.querySelectorAll("li");
const MmTabsContent = document.querySelectorAll(".megamenu-tabcontent");

MMListItem.forEach((listItem, i) => {
  listItem.addEventListener("mouseover", function() {
    var divID = listItem.getAttribute('data-href').toString();
    for (let el of MmTabsContent) el.style.display = 'none';
    for (let el of MMListItem) el.classList.remove("active");
    document.getElementById(divID).style.display = "block";
    listItem.classList.add("active");
  })

});

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  const accordionContent = this.nextElementSibling;

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
    items[i].classList.remove('accordion-button-active');
    items[i].nextElementSibling.style.maxHeight = null;
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
    this.classList.add('accordion-button-active');
    accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
