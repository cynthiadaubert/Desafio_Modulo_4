function navComponent(elem) {
  const navElem = document.createElement("div");
  navElem.querySelector(".nav__section");
  navElem.innerHTML = ` 
    
  <nav class="nav">

    <img class="nav__button" src="./icons/nav_bar.PNG" alt="">
    <div class="nav__container">
          <a href="./index.html" class="logo__link"><img class="logo" src="./icons/portf-logo.png" alt=""></a>
     
  
      <div class="nav__links"> 
          <img class="nav__button-close" src="./icons/cross.png" alt="">

          <a href="./portfolio.html" class="nav__links-texts">Portfolio</a>
          <a href="./servicios.html" class="nav__links-texts">Servicios</a>
          <a href="./contacto.html" class="nav__links-texts">Contacto</a>
      </div>
    </div> 

  
  </nav>

  `;

  elem.appendChild(navElem);
  navEvent();
}

/// EVENT DEL MENU HAMBURGUESA ///

function navEvent() {
  const openNavElem = document.querySelector(".nav__button");
  const closeNavElem = document.querySelector(".nav__button-close");
  const displayLinksElem = document.querySelector(".nav__links");

  openNavElem.addEventListener("click", () => {
    displayLinksElem.style.display = "inherit";
    closeNavElem.style.display = "inherit";
  });

  closeNavElem.addEventListener("click", () => {
    displayLinksElem.style.display = "";
    closeNavElem.style.display = "";
  });
}
