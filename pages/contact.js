function addComponentsContact() {
  const navElem = document.querySelector(".nav__section");

  navComponent(navElem);

  const formElem = document.querySelector(".form__container");
  formComponent(formElem);
  formEvent();

  const footerElem = document.querySelector(".footer__in");
  footerComponent(footerElem);
}

addComponentsContact();

navEvent();
