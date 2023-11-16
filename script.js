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
