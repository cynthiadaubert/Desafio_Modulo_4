function footerComponent(elem) {
  const footerElem = document.createElement("div");
  footerElem.className = "null";
  footerElem.querySelector("footer__in");
  footerElem.innerHTML = `
    <div class="footer__container">
          <h1 class="footer__title">Cynthia</h1>
          <div class="links__container">
            <a class="links" href="./index.html">Instagram<img class="footer__logo" src="./icons/instagram.png" alt=""></a>
            <a class="links" href="./index.html">Linkedin<img class="footer__logo" src="./icons/linkedin.png" alt=""></a>
            <a class="links" href="./index.html">Github<img class="footer__logo" src="./icons/github.png" alt=""></a>
          </div>
    </div>
  `;

  elem.appendChild(footerElem);
}
