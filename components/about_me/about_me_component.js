function aboutMeComponent(elem) {
  const aboutMeElem = document.createElement("div");
  aboutMeElem.querySelector(".about-me");
  aboutMeElem.innerHTML = `
        
 
    <template id="about-me__container">
            <img src="" alt="">  
        <div class="about-me__texts">
            <h3 class="about-me__title">Sobre mí</h3>
            <p class="about-me__description">
                Algo interesante sobre mí.Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam ullam debitis quis, repellendus magni dicta repudiandae quisquam quod culpa placeat commodi fugit, obcaecati id! Optio minus libero iusto explicabo? Temporibus ipsam ullam debitis quis, repellendus magni dicta repudiandae quisquam quod culpa placeat commodi fugit, obcaecati id! Optio minus libero iusto explicabo?
            </p>
        </div>
    </template>


      `;

  elem.appendChild(aboutMeElem);
}
