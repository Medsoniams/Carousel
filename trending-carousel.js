(function () {
  const products = [
    {
      id: "1",
      title: "DORA Metal Pet Brush",
      imageURL: "trending/metal_pet_brush.png",
      price: 15,
    },
    {
      id: "2",
      title: "Kitten's Heaven Set",
      imageURL: "trending/heaven_set.png",
      price: 12,
    },
    {
      id: "3",
      title: "OPTY Pet Carrier",
      imageURL: "trending/opty_pet_carrier.png",
      price: 8,
    },
    {
      id: "4",
      title: "AGA Rope Toy",
      imageURL: "trending/rope_toy.png",
      price: 5,
    },
    {
      id: "5",
      title: "DORA Pet Carrier",
      imageURL: "trending/dora_pet_carrier.png",
      price: 23,
    },
  ];

  const getProductCardHTML = ({ id, title, imageURL, price }) => `
    <article class="trending__card-item">
    <a class="trending__img-link" href="#">
        <img class="trending__img" src="${imageURL}"
            alt="${title}">
    </a>
    <h4 class="trending__name">
        <a class="trending__link-name" href="#">${title}</a>
    </h4>
    <span class="trending__price">&#36;${price},00</span>
    <button class="trending__card-btn">Add to card</button>
    </article>
    `;


  const initProducts = (products) => {
    const $productsContainer = document.querySelector(
      ".trending__cards-wrapper"
    );

    $productsContainer.innerHTML = products.map(getProductCardHTML).join("");

    let currentActiveIndex = 0;

    const $trendingArrowRight = document.querySelector("trending__arrow-right");
    const $trendingArrowLeft = document.querySelector("trending__arrow-left");

    const changeActiveItem = (activeIndex) => {
      const $trendingCardItems = $productsContainer.querySelectorAll(
        ".trending__card-item"
      );
      $trendingCardItems.forEach(($card, index) => {
        $card.classList[index === currentActiveIndex ? "add" : "remove"](
          "active-item"
        );
      });
    };

    $trendingArrowRight.addEventListener("click", () => {
      currentActiveIndex += 1;

      if (currentActiveIndex > products.length - 1) {
        currentActiveIndex = 0;
      }

      changeActiveItem(currentActiveIndex);
    });

    $trendingArrowLeft.addEventListener("click", () => {
      currentActiveIndex -= 1;

      if (currentActiveIndex > products.length - 1) {
        currentActiveIndex = 0;
      }

      changeActiveItem(currentActiveIndex);
    });
  };

  initProducts(products);
})();
