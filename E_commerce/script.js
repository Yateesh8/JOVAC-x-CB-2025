function filterProducts() {
  const input = document.getElementById("searchBar").value.toLowerCase();
  const products = document.querySelectorAll(".product-card");
  let found = false;

  products.forEach((card) => {
    const altText = card.querySelector("img").alt.toLowerCase();
    if (altText.includes(input)) {
      card.style.display = "";
      found = true;
    } else {
      card.style.display = "none";
    }
  });

  document.getElementById("noResults").style.display = found ? "none" : "block";
}

function applyFilter() {
  alert("Filter functionality can be customized later.");
}
