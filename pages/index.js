///COMPONENTES///

function main() {
  const navElem = document.querySelector(".nav__section");
  navComponent(navElem);

  const headerElem = document.querySelector(".header__section");
  headerComponent(headerElem);

  const formElem = document.querySelector(".form__container");
  formComponent(formElem);

  const footerElem = document.querySelector(".footer__in");
  footerComponent(footerElem);
}

main();

/// EVENT DEL FORM ///
function formEvent() {
  const formElem = document.querySelector(".form__container");
  formElem.addEventListener("submit", function (event) {
    event.preventDefault();
    const data = new FormData(event.target);

    const object = Object.fromEntries(data.entries());

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },

      body: JSON.stringify({
        to: "cynthiaperezdaubert@gmail.com",

        message: {
          Nombre: object.userName,
          Mail: object.userEmail,
          Mensaje: object.message,
        },
      }),
    })
      .then(() => {
        alert("Mesaje enviado");
      })
      .catch(() => {
        alert("Ha ocurrido un error");
      });
  });
}

formEvent();

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

navEvent();
