function addComponents() {
  const navElem = document.querySelector(".nav__section");

  navComponent(navElem);

  const servicesElem = document.querySelector(".services");
  servicesComponent(servicesElem);

  const footerElem = document.querySelector(".footer__in");
  footerComponent(footerElem);
}

addComponents();

function addServiceCard(params = {}) {
  const template = document.querySelector("#services__template");
  const container = document.querySelector(".services");

  template.content.querySelector(".services__card__title").textContent =
    params.title;

  template.content.querySelector(".services__card__description").textContent =
    params.description;

  template.content.querySelector(".services__img").src = params.img;

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
    "https://cdn.contentful.com/spaces/zo7euwrtovoc/environments/master/entries?access_token=bm_FCTa7YGpnFNbn-4rRu8bQ9wtpSpRSEBPPp6NDWh0&content_type=services&order=sys.createdAt"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fields = data.items.map((item) => {
        const imgId = item.fields.preview.sys.id;
        const image = imageData(imgId, data);
        const imgLink = image.fields.file.url;

        return {
          title: item.fields.title,
          description: item.fields.description,
          img: imgLink,
        };
      });

      return fields;
    });
}

function main() {
  getContentfulData().then(function (services) {
    for (const s of services) {
      addServiceCard(s);
    }
  });
}

main();
