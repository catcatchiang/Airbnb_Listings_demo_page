async function loadListings() {
  const response = await fetch("airbnb_sf_listings_500.json");
  const data = await response.json();
  console.log(data);
  
  const fifty = data.slice(0,50);
  console.log(fifty.length);
  const container = document.querySelector("#listings");

fifty.forEach((item) => {
  const col = document.createElement("div");
  col.classList.add("col-md-4", "mb-4");  // 3 cards per row

  const card = document.createElement("div");
  card.classList.add("card");

  // IMAGE
  if (item.picture_url) {
    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = item.picture_url;
    col.appendChild(img);
  }

  // CARD BODY
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // Title
  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = item.name;
  cardBody.appendChild(title);

  // Description
  const desc = document.createElement("p");
  desc.classList.add("card-text");
  desc.innerHTML = item.description;
  cardBody.appendChild(desc);

  // Price
  const price = document.createElement("p");
  price.classList.add("card-text");
  price.textContent = `Price: ${item.price}`;
  cardBody.appendChild(price);

  // Host
  const host = document.createElement("p");
  host.classList.add("card-text");
  host.innerHTML = `<b>Host:</b> ${item.host_name}`;
  cardBody.appendChild(host);

  // Amenities
  const amenities = JSON.parse(item.amenities);
  const amenTitle = document.createElement("h6");
  amenTitle.textContent = "Amenities";
  cardBody.appendChild(amenTitle);

  const amenList = document.createElement("ul");
  amenities.slice(0, 5).forEach((amen) => {
    const li = document.createElement("li");
    li.textContent = amen;
    amenList.appendChild(li);
  });
  cardBody.appendChild(amenList);

  card.appendChild(cardBody);
  col.appendChild(card);      // put card inside column
  container.appendChild(col); // put column inside row
});

}

loadListings();

