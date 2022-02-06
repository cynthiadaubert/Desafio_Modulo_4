function navComponent(elem) {
  const navElem = document.createElement("div");
  navElem.querySelector(".nav__section");
  navElem.innerHTML = ` 
    
  <nav class="nav">

    <img class="nav__button" src="./icons/nav_bar.png" alt="">
    <div class="nav__container">
        <a href="./index.html" class="logo__link"><img class="logo" src="./icons/portf-logo.png" alt=""></a>
    </div>  
  
    <div class="nav__links"> 
        <img class="nav__button-close" src="./icons/cross.png" alt="">

        <a href="./portfolio.html" class="nav__links-texts">Portfolio</a>
        <a href="./servicios.html" class="nav__links-texts">Servicios</a>
        <a href="./contacto.html" class="nav__links-texts">Contacto</a>
    </div>


  
  </nav>

`;

  elem.appendChild(navElem);
}

navComponent();

/* `
    <nav class="nav">
      <div class="nav__container">
          <a href="./index.html" class="logo__link"><img class="logo" src="./icons/portf-logo.png" alt=""></a>
          
          <div class="nav__button">
              
              <div class="nav__links"> 
                  <div class="nav__button__container"><div class="nav__button-close"></div></div>
                  <a href="./portfolio.html" class="nav__links-texts">Portfolio</a>
                  <a href="./servicios.html" class="nav__links-texts">Servicios</a>
                  <a href="./contacto.html" class="nav__links-texts">Contacto</a>
              </div>
              
          </div>
      
      </div>  
  </nav>

  <div class="header__container">
    <h1 class="header__title">Hola!</h1>
    <h3 class="header__subtitle">Soy Cynthia</h3>
  </div> 

  `; */
