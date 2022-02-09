function addComponents() {
  const navElem = document.querySelector(".nav__section");
  navComponent(navElem);

  const portfolioElem = document.querySelector(".works__container");
  portfolioComponent(portfolioElem);

  const footerElem = document.querySelector(".footer__in");
  footerComponent(footerElem);
}

addComponents();

/* addWorkCard va a recibir los parámetros en forma de objeto (los datos de contentful) */
function addWorkCard(params = {}) {
  const template = document.querySelector("#portfolio__card__template");
  const container = document.querySelector(".contenedor__portf");

  template.content.querySelector(".card__title").textContent = params.title;

  template.content.querySelector(".card__text__content").textContent =
    params.description;

  template.content.querySelector(".portf__img").src = params.img;

  template.content.querySelector(".card__link").href = params.url;

  var cloned = document.importNode(template.content, true);
  container.appendChild(cloned);
}

function imageData(id, data) {
  const img = data.includes.Asset.find((asset) => {
    return asset.sys.id == id;
  });
  return img;
}

function getContentfulData() {
  return fetch(
    "https://cdn.contentful.com/spaces/zo7euwrtovoc/environments/master/entries?access_token=bm_FCTa7YGpnFNbn-4rRu8bQ9wtpSpRSEBPPp6NDWh0&content_type=works&order=sys.createdAt"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fields = data.items.map((item) => {
        const imgId = item.fields.image.sys.id;
        const image = imageData(imgId, data);
        const imgLink = image.fields.file.url;

        return {
          title: item.fields.titulo,
          description: item.fields.description,
          url: item.fields.url,
          img: imgLink,
        };
      });

      return fields;
    });
}

function main() {
  /* getContentfulData va a ser asincrónico porque tiene que hacer el request */
  getContentfulData().then(function (works) {
    for (const w of works) {
      addWorkCard(w);
    }
  });
}

main();
