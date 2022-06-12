function fetchProducts() {
  fetch("/trending")
    .then((response) => {
      if (!response.ok) throw Error(ERROR);
      return response.json();
    })
    .then((data) => {
      const html = data
        .map((product) => {
          var image;
          if (!product.image) {
            image = "photos/defaultImages/defaultProduct.png";
          } else {
            image = product.image;
          }

          var type;
          if (!product.type) type = "Not Found";
          else type = product.type;

          var price;
          if (!product.price) price = "Not Found";
          else price = product.price;

          var title;
          if (!product.title) title = "Not Found";
          else title = product.title;

          var origin;
          if (!product.origin) origin = "Not Found";
          else origin = product.origin;

          var utilisation;
          if (!product.utilisation) utilisation = "Not Found";
          else utilisation = product.utilisation;

          var label;
          if (!product.label) label = "Without Label";
          else {
            if (product.label == false) label = "Without Label";
            else label = "With Label";
          }
          var views;
          if (!product.views) views = "0";
          else views = product.views;
          return `
            
            <div class="column">
            <div class="card">
                <div class="card__side card__side--front">
                    <div class="card__details">
                        <img src="${image}" alt="">
                    </div>
                </div>
                <div class="card__side card__side--back card__side--back">
                    <div class="card__cta">
                        <div class="cardBackText">
                            <p class="cardText">${title}</p>
                            <p class="cardText">Type :${type}</p>
                            <p class="cardText">Price : ${price} </p>
                            <p class="cardText">Origin : ${origin}</p>
                            <p class="cardText">State : ${utilisation}</p>
                            <p class="cardText">${label}</p>
                            <p class="cardText">Likes : ${views}</p>
                            <a class="voteClass" href="productPage.html" onclick="localStorage.setItem('product_id',${product.id})">Like</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>`;
        })
        .join("");
      document.querySelector(".row").innerHTML = html;
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchProducts();
