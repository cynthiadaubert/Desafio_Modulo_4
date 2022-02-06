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
}

formComponent();
