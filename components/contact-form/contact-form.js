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

          
          <button class="button">Enviar</button>
          
      </form>
    </div>
 `;

  elem.appendChild(formElem);
  formEvent();
}

function formEvent() {
  const formElem = document.querySelector(".form__container");
  formElem.addEventListener("submit", function (event) {
    event.preventDefault();

    let data = new FormData(event.target);

    const object = Object.fromEntries(data.entries());
    /* console.log(object) */

    const mensaje = ` 
    user:  ${object.name} 
    email:  ${object.email}       
    mensaje: ${object.message} 
    
    `;

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",

      headers: { "content-type": "application/json" },

      body: JSON.stringify({
        to: "cynthiaperezdaubert@gmail.com",

        message: mensaje,
      }),
    })
      .then(() => {
        /* console.log("soy el mensaje",mensaje) */
        alert("Mensaje enviado");
      })
      .catch(() => {
        alert("Ha ocurrido un error");
      });
  });
}
