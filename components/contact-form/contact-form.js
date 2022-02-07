// COMPONENTE FORM //

function formComponent(elem) {
  const formElem = document.createElement("div");
  formElem.querySelector(".form__container");
  formElem.innerHTML = `
    <div class="contact">

        <div class="contact__title">
            <h2 class="form__title">Escribime</h2>
        </div>

        <form class="form">
            <div class="fieldset">
                <label class="label__text" for="name">Nombre</label>
                <input class="input-text" name="name">
            </div>
            <div class="fieldset">
                <label class="label__text" for="email">Email</label>
                <input id="email" class="input-text" name="email">
            </div>
            <div class="fieldset">
                <label class="label__text" for="message">Mensaje</label>
                <textarea class="textarea" name="message"></textarea>
            </div>

            <div class="button__container">
                <button class="button">Enviar</button>
            </div>
        </form>
    </div>
 `;

  elem.appendChild(formElem);
  formEvent();
}

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
