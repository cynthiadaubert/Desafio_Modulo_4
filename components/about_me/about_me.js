function addComponent() {
  const aboutMeElem = document.querySelector(".about-me");

  aboutMeComponent(aboutMeElem);
}

addComponent();

function addData(params = {}) {
  const template = document.querySelector("#about-me__container");
  const container = document.querySelector(".about-me__texts");

  template.content.querySelector(".about-me__title").textContent = params.title;

  template.content.querySelector(".about-me__description").textContent =
    params.description;

  var cloned = document.importNode(template.content, true);
  container.appendChild(cloned);
}

function getContentfulData() {
  return fetch(
    "https://cdn.contentful.com/spaces/zo7euwrtovoc/environments/master/entries?access_token=bm_FCTa7YGpnFNbn-4rRu8bQ9wtpSpRSEBPPp6NDWh0&content_type=presentation&order=sys.createdAt"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fields = data.items.map((item) => {
        return {
          title: item.fields.title,
          description: item.fields.description,
        };
      });

      return fields;
    });
}

function main() {
  getContentfulData().then(function (present) {
    for (const p of present) {
      addData(p);
    }
  });
}

main();
