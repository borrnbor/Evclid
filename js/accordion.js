const accorionLinks = document.querySelectorAll('.accordion__open')
const body = document.querySelector('body')

let unlock = true;

if(accorionLinks.length > 0) {
  for (let index = 0; index < accorionLinks.length; index++) {
    const accordionLink = accorionLinks[index];
    accordionLink.addEventListener("click",function(e){
      const accordionName = accordionLink.getAttribute('href').replace('#','')
      const curentAccordion = document.getElementById(accordionName);
      AccordionOpen(curentAccordion);
      e.preventDefault();
    });
  }
}

function AccordionOpen(curentAccordion) {
  if (curentAccordion && unlock) {
    const accordionActive = document.querySelector('.accordion__question.open');
    if(accordionActive) {
      popupClose(accordionActive, false);
    }
    curentAccordion.classList.toggle('open');
  }
}