(function () {
  const products = [
    {
      id: "1",
      title: "DORA Metal Pet Brush",
      imageName: "metal_pet_brush",
      price: 15,
    },
    {
      id: "2",
      title: "Kitten's Heaven Set",
      imageName: "heaven_set",
      price: 12,
    },
    {
      id: "3",
      title: "OPTY Pet Carrier",
      imageName: "opty_pet_carrier",
      price: 8,
    },
    {
      id: "4",
      title: "AGA Rope Toy",
      imageName: "rope_toy",
      price: 5,
    },
    {
      id: "5",
      title: "DORA Pet Carrier",
      imageName: "dora_pet_carrier",
      price: 23,
    },
  ];

  const getProductCardHTML = (activeIndex) => ({ id, title, imageName, price }, index) => `
    <article class="trending__card-item ${activeIndex === index ? 'active-item' : ''}">
    <a class="trending__img-link" href="#">
        <img class="trending__img" src="trending/${imageName}.png"
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
    let currentActiveIndex = 0;

    const $productsContainer = document.querySelector(
      ".trending__cards-wrapper"
    );

    $productsContainer.innerHTML = products.map(getProductCardHTML(currentActiveIndex)).join("");


    const $trendingArrowRight = document.querySelector(".trending__arrow-right");
    const $trendingArrowLeft = document.querySelector(".trending__arrow-left");

    const changeActiveItem = (activeIndex) => {
      const $trendingCardItems = $productsContainer.querySelectorAll(
        ".trending__card-item"
      );
      $trendingCardItems.forEach(($card, index) => {
        $card.classList[index === activeIndex ? "add" : "remove"](
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

      if (currentActiveIndex < 0) {
        currentActiveIndex = products.length - 1;
      }

      changeActiveItem(currentActiveIndex);
    });
  };

  initProducts(products);
})();
