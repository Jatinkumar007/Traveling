let url = "https://last2-server.onrender.com/";
let btn = document.getElementById("search-button");
let cards = document.getElementById("cards");
let input = document.getElementById("search-box");
let lowToHighBtn = document.getElementById("low-to-high-button");
let highToLowBtn = document.getElementById("high-to-low-button");
let product = JSON.parse(localStorage.getItem("selectedProduct")) || {};
let page = 1;
let pagination = document.getElementById("pagination");

async function getProducts(page) {
  try {
    let response = await fetch(`${url}products?_limit=5&_page=${page}`);
    let totalPost = response.headers.get("X-Total-Count");
    let totalBtn = Math.ceil(totalPost / 10);

    pagination.innerHTML = null;
    cards.innerHTML = null;
    for (let i = 1; i <= totalBtn; i++) {
      pagination.append(domBtn(i));
    }
    let data = await response.json();
    console.log(data);
    renderProducts(data);
  } catch (error) {
    console.log(error);
  }
}
getProducts(page);
function renderProducts(products) {
  cards.innerHTML = "";
  products.forEach((product) => {
    let card = document.createElement("div");
    card.classList.add("card");

    let image = document.createElement("img");
    image.setAttribute("src", product.image);
    card.appendChild(image);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let location = document.createElement("h2");
    location.textContent = `${product.location}, ${product.country}`;
    cardBody.appendChild(location);

    let rating = document.createElement("p");
    rating.classList.add("rating");
    rating.textContent = `Rating: ${product.rating}`;
    cardBody.appendChild(rating);

    let price = document.createElement("p");
    price.classList.add("price");
    price.textContent = `US$${product.price} per night`;
    cardBody.appendChild(price);

    let bookButton = document.createElement("button");
    bookButton.classList.add("button");
    bookButton.textContent = "Book now";
    cardBody.appendChild(bookButton);

    bookButton.addEventListener("click", () => {
      localStorage.setItem("selectedProduct", JSON.stringify(product));
      window.location.href = "../paymentPage.html";
    });
    card.appendChild(cardBody);
    cards.appendChild(card);
  });
}

function domBtn(i) {
  let button = document.createElement("button");
  button.textContent = i;
  button.id = "paginationBtn";
  button.setAttribute("data-id", i);
  button.addEventListener("click", (e) => {
    getProducts(e.target.dataset.id);
  });
  return button;
}

lowToHighBtn.addEventListener("click", sortLtoH);

async function sortLtoH() {
  try {
    let res = await fetch(`${url}products?_sort=price&_order=asce`, {
      method: "GET",
    });
    let data = await res.json();
    console.log(data);
    renderProducts(data);
  } catch (error) {
    console.log(error);
  }
}

highToLowBtn.addEventListener("click", sortHtoL);

async function sortHtoL() {
  try {
    let res = await fetch(`${url}products?_sort=price&_order=desc`, {
      method: "GET",
    });
    let data = await res.json();
    console.log(data);
    renderProducts(data);
  } catch (error) {
    console.log(error);
  }
}

btn.addEventListener("click", searchCountry);

async function searchCountry() {
  const searchValue = input.value.trim();

  try {
    let response = await fetch(`${url}products?country=${searchValue}`, {
      method: "GET",
    });

    if (response.status === 200) {
      let data = await response.json();
      console.log(data);
      renderProducts(data);
    } else {
      alert("No results found for the searched country.");
    }
  } catch (error) {
    console.log(error);
  }
}