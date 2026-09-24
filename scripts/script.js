const CATEGORY_TREE_DATA = [
  { name: "Начало", url: "#" },
  { name: "Каталог", url: "#" },
  { name: "Улун", url: "#" },
  { name: "Ароматизированный улун", url: "#" },
  { name: "Китайский ароматизированный улун", url: "#" },
  { name: "Китайский светлый ароматизированный улун", url: "#" },
  { name: "Ананасовый улун", url: "#" },
];

const SPECIFICATION_DATA = [
  {
    weight: "100 г",
    article: "01306",
    oldPrice: 349.2,
    newPrice: 326.4,
  },
  {
    weight: "500 г",
    article: "01307",
    oldPrice: 1646,
    newPrice: 1432,
  },
  {
    weight: "1000 г",
    article: "01308",
    oldPrice: 2592,
    newPrice: 2064,
  },
  {
    weight: "5000 г",
    article: "01309",
    oldPrice: 8710,
    newPrice: 6320,
  },
];

function renderCategoryTree(items) {
  const categoryTree = document.querySelector(".category-tree");

  if (!categoryTree) {
    console.error("Элемент .category-tree не найден");
    return;
  }

  categoryTree.innerHTML = items
    .map((item, index) => {
      const link = `<a class="category-tree__link" href="${item.url}">${item.name}</a>`;
      return index < items.length - 1 ? `${link} - ` : link;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", function () {
  renderCategoryTree(CATEGORY_TREE_DATA);
});

function formatPrice(value) {
  return (
    value
      .toFixed(2)
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽"
  );
}

function renderSpecification(items, containerSelector = ".specification") {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = "";

  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    const row = document.createElement("div");
    row.className = "specification__row";

    row.innerHTML = `
      <div class="specification__container">
        <div class="specification__info">
          <div class="specification__info-weight">${item.weight}</div>
          <div class="specification__info-article">арт. ${item.article}</div>
        </div>
        <div class="specification__buy">
          <div class="specification__buy-price">
            <div class="specification__buy-price-new">${formatPrice(item.newPrice)}</div>
            <div class="specification__buy-price-old">${formatPrice(item.oldPrice)}</div>
          </div>
          <div class="specification__buy-button">
            <button href="#"><i class="fa fa-shopping-cart"></i></button>
          </div>
          <div class="specification__buy-availability">
            <span style="font-weight: bold; font-size: 9.8px; color: #808080; margin-bottom: 2px">наличие:</span>
            <span style="font-weight: bold; font-size: 12px; color: #dc3545">Много</span>          
          </div>
        </div>
      </div>
    `;

    fragment.appendChild(row);
  });

  container.appendChild(fragment);
}

renderSpecification(SPECIFICATION_DATA);
