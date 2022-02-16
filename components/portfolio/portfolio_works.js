function portfolioComponent(elem) {
  const portfolioElem = document.createElement("div");
  portfolioElem.className = "null_portf";
  portfolioElem.querySelector(".works");
  portfolioElem.innerHTML = `
    
  
    <h2 class="portf__title">Portfolio</h2>
             
        <template id="portfolio__card__template">
             
            <div class="portf__card__content">
                <img src="https://i.picsum.photos/id/1012/250/250.jpg?hmac=GLgbvPbEH0U0sMn90Ik3esvMT84HVyUE7hJohwessRE" alt="" class="portf__img">
                <h4 class="card__title">Un trabajo que hice</h4>
                <p class="card__text__content">Te cuento un poco más sobre este trabajo y cómo la rompí en este proyecto. Si el texto se hace...</p>
                <a href="https://lunahayward.carrd.com" class="card__link">Ver más</a>
            </div>
            
                   
        </template>
                 
 
    `;

  elem.appendChild(portfolioElem);
}
