function servicesComponent(elem) {
  const servicesElem = document.createElement("div");
  servicesElem.querySelector(".services");
  servicesElem.innerHTML = `
  
        <div class="services__container">  
            
            <h2 class="services__title">Servicios</h2>
            
        </div>    
        <template id="services__template">
            <div class="services__card">
                <div class="services__card__content">
                    <img src="https://i.picsum.photos/id/1012/250/250.jpg?hmac=GLgbvPbEH0U0sMn90Ik3esvMT84HVyUE7hJohwessRE" alt="" class="services__img">
                    <h4 class="services__card__title">Un trabajo que hice</h4>
                    <p class="services__card__description">Te cuento un poco más sobre este trabajo y cómo la rompí en este proyecto. Si el texto se hace...</p>
                </div>
            </div>
        </template> 

    `;

  elem.appendChild(servicesElem);
}
