function headerComponent(elem) {
  const headerElem = document.createElement("div");
  headerElem.querySelector(".header__section");
  headerElem.innerHTML = ` 
  
  <div class="header__container">
    <h1 class="header__title">Hola!</h1>
    <h3 class="header__subtitle">Soy Cynthia</h3>
  </div> 


`;

  elem.appendChild(headerElem);
}
