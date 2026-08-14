const products = [

  {
    id: 1,
    title: "Midnight Frequency",
    artist: "The Velvet Lines",
    genre: "Rock",
    year: 2026,
    price: 34.90,
    rating: 4.9,
    cover: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=900&q=85",
    description: "A cinematic rock record built around warm guitars, analog textures and late-night energy.",
    tracks: [
      "After Hours",
      "Neon Hearts",
      "Midnight Frequency",
      "Slow Motion",
      "Last Light"
    ]
  },

  {
    id: 2,
    title: "Golden Hour",
    artist: "Maya Sol",
    genre: "Pop",
    year: 2026,
    price: 29.90,
    rating: 4.8,
    cover: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=900&q=85",
    description: "Dreamy modern pop with intimate vocals and shimmering production.",
    tracks: [
      "Golden Hour",
      "Stay Awhile",
      "Satellite",
      "Paper Moon",
      "Home"
    ]
  },

  {
    id: 3,
    title: "Blue Notes",
    artist: "Elias Reed Quartet",
    genre: "Jazz",
    year: 2025,
    price: 38.50,
    rating: 4.9,
    cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=85",
    description: "A sophisticated quartet session inspired by classic Blue Note recordings.",
    tracks: [
      "First Take",
      "Blue Notes",
      "Autumn Walk",
      "Corner Club",
      "Dawn"
    ]
  },

  {
    id: 4,
    title: "Concrete Dreams",
    artist: "NOVA//88",
    genre: "Hip-Hop",
    year: 2025,
    price: 32.00,
    rating: 4.7,
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=85",
    description: "Sharp production, dusty drums and reflective storytelling from the city.",
    tracks: [
      "Concrete Dreams",
      "Southbound",
      "No Signal",
      "Late Train",
      "Tomorrow"
    ]
  },

  {
    id: 5,
    title: "Afterglow",
    artist: "Kinetic Bloom",
    genre: "Electronic",
    year: 2026,
    price: 36.90,
    rating: 4.8,
    cover: "https://images.unsplash.com/photo-1571266028243-d220c9c3b3e5?auto=format&fit=crop&w=900&q=85",
    description: "A luminous electronic journey that moves between ambient space and club rhythm.",
    tracks: [
      "Afterglow",
      "Pulse",
      "Glass Houses",
      "Orbit",
      "Soft Landing"
    ]
  },

  {
    id: 6,
    title: "Nocturne No. 7",
    artist: "Clara Voss",
    genre: "Classical",
    year: 2024,
    price: 41.00,
    rating: 4.9,
    cover: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=900&q=85",
    description: "A beautifully recorded piano interpretation with intimate room ambience.",
    tracks: [
      "Nocturne No. 7",
      "Prelude",
      "Intermezzo",
      "Elegy",
      "Finale"
    ]
  },

  {
    id: 7,
    title: "Electric Bloom",
    artist: "Satellite Kids",
    genre: "Rock",
    year: 2025,
    price: 27.90,
    rating: 4.5,
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=85",
    description: "Bright riffs and restless melodies from a new generation of indie rock.",
    tracks: [
      "Bloom",
      "Static",
      "Young Again",
      "Runaway",
      "Electric"
    ]
  },

  {
    id: 8,
    title: "Parallel Hearts",
    artist: "Luna Park",
    genre: "Pop",
    year: 2025,
    price: 31.50,
    rating: 4.6,
    cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=85",
    description: "A polished pop collection about connection, distance and finding your way home.",
    tracks: [
      "Parallel Hearts",
      "Call Me",
      "Mirage",
      "Twenty Four",
      "Home Again"
    ]
  },

  {
    id: 9,
    title: "Night Shift",
    artist: "Miles Carter Trio",
    genre: "Jazz",
    year: 2024,
    price: 35.00,
    rating: 4.8,
    cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=85",
    description: "Late-night jazz with a relaxed groove and beautifully understated arrangements.",
    tracks: [
      "Night Shift",
      "Blue Room",
      "Three AM",
      "Crossfade",
      "Morning"
    ]
  },

  {
    id: 10,
    title: "Golden Era",
    artist: "Northside",
    genre: "Hip-Hop",
    year: 2023,
    price: 26.90,
    rating: 4.7,
    cover: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=900&q=85",
    description: "A nostalgic but forward-looking hip-hop record built on soulful samples.",
    tracks: [
      "Golden Era",
      "Northside",
      "Replay",
      "Corner Store",
      "Outro"
    ]
  },

  {
    id: 11,
    title: "Signal / Noise",
    artist: "Vector Field",
    genre: "Electronic",
    year: 2024,
    price: 43.00,
    rating: 4.5,
    cover: "https://images.unsplash.com/photo-1499415479124-43c32433a620?auto=format&fit=crop&w=900&q=85",
    description: "Minimal electronic compositions that explore rhythm, space and repetition.",
    tracks: [
      "Signal",
      "Noise",
      "Threshold",
      "Current",
      "Transmission"
    ]
  },

  {
    id: 12,
    title: "The Four Seasons",
    artist: "Aria Chamber",
    genre: "Classical",
    year: 2022,
    price: 39.90,
    rating: 4.9,
    cover: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=900&q=85",
    description: "A fresh chamber recording of a timeless orchestral favorite.",
    tracks: [
      "Spring",
      "Summer",
      "Autumn",
      "Winter",
      "Coda"
    ]
  }

];


let cart =
  JSON.parse(localStorage.getItem("vinylhub-cart")) || [];

let wishlist =
  JSON.parse(localStorage.getItem("vinylhub-wishlist")) || [];


const $ = selector =>
  document.querySelector(selector);


function money(value) {
  return `$${value.toFixed(2)}`;
}


function saveState() {

  localStorage.setItem(
    "vinylhub-cart",
    JSON.stringify(cart)
  );

  localStorage.setItem(
    "vinylhub-wishlist",
    JSON.stringify(wishlist)
  );

  updateCounts();
}


function updateCounts() {

  $("#cartCount").textContent =
    cart.reduce(
      (total, item) => total + item.qty,
      0
    );

  $("#wishlistCount").textContent =
    wishlist.length;
}


/* PRODUCT CARD */

function productCard(product) {

  const wished =
    wishlist.includes(product.id);

  return `

    <article class="product-card">

      <div class="cover-wrap">

        <img
          src="${product.cover}"
          alt="${product.title} by ${product.artist}"
          loading="lazy"
        >

        <button
          class="heart ${wished ? "active" : ""}"
          data-wish="${product.id}"
        >
          ${wished ? "♥" : "♡"}
        </button>

      </div>


      <div class="product-info">

        <h3>
          ${product.title}
        </h3>

        <div class="artist">
          ${product.artist}
        </div>


        <div class="meta">

          <span>
            ${product.genre} · ${product.year}
          </span>

          <span class="rating">
            ★ ${product.rating}
          </span>

        </div>


        <div class="meta">

          <span></span>

          <span class="price">
            ${money(product.price)}
          </span>

        </div>


        <div class="card-actions">

          <button
            class="small-btn"
            data-detail="${product.id}"
          >
            Details
          </button>

          <button
            class="small-btn add"
            data-add="${product.id}"
          >
            Add to Cart
          </button>

        </div>

      </div>

    </article>
  `;
}


function renderProducts(selector, productsList) {

  $(selector).innerHTML =
    productsList.map(productCard).join("");

  bindProductButtons($(selector));
}


function bindProductButtons(container) {

  container
    .querySelectorAll("[data-add]")
    .forEach(button => {

      button.onclick = () =>
        addToCart(
          Number(button.dataset.add)
        );

    });


  container
    .querySelectorAll("[data-wish]")
    .forEach(button => {

      button.onclick = () =>
        toggleWishlist(
          Number(button.dataset.wish)
        );

    });


  container
    .querySelectorAll("[data-detail]")
    .forEach(button => {

      button.onclick = () =>
        showDetails(
          Number(button.dataset.detail)
        );

    });

}


/* CART */

function addToCart(id, quantity = 1) {

  const item =
    cart.find(item => item.id === id);


  if (item) {

    item.qty += quantity;

  } else {

    cart.push({
      id,
      qty: quantity
    });

  }


  saveState();

  renderCart();

  toast("Added to your cart");
}


function changeQuantity(id, amount) {

  const item =
    cart.find(item => item.id === id);

  if (!item) return;


  item.qty += amount;


  if (item.qty <= 0) {

    cart =
      cart.filter(item => item.id !== id);

  }


  saveState();

  renderCart();
}


function removeCart(id) {

  cart =
    cart.filter(item => item.id !== id);

  saveState();

  renderCart();
}


function renderCart() {

  const container =
    $("#cartContent");


  if (!cart.length) {

    container.innerHTML = `

      <div class="panel-empty">

        <div class="empty-icon">
          ◌
        </div>

        <h3>
          Your cart is empty
        </h3>

        <p>
          Start building a collection worth listening to.
        </p>

      </div>

    `;

    return;
  }


  let subtotal = 0;


  container.innerHTML =
    cart.map(item => {

      const product =
        products.find(
          product => product.id === item.id
        );


      subtotal +=
        product.price * item.qty;


      return `

        <div class="cart-item">

          <img
            src="${product.cover}"
            alt="${product.title}"
          >

          <div>

            <p class="item-title">
              ${product.title}
            </p>

            <div class="item-sub">
              ${product.artist}
            </div>

            <div class="item-price">
              ${money(product.price * item.qty)}
            </div>

            <div class="cart-qty">

              <button
                data-minus="${product.id}"
              >
                −
              </button>

              <span>
                ${item.qty}
              </span>

              <button
                data-plus="${product.id}"
              >
                +
              </button>

            </div>

          </div>

          <button
            class="remove"
            data-remove="${product.id}"
          >
            ×
          </button>

        </div>

      `;

    }).join("");


  container
    .querySelectorAll("[data-minus]")
    .forEach(button => {

      button.onclick = () =>
        changeQuantity(
          Number(button.dataset.minus),
          -1
        );

    });


  container
    .querySelectorAll("[data-plus]")
    .forEach(button => {

      button.onclick = () =>
        changeQuantity(
          Number(button.dataset.plus),
          1
        );

    });


  container
    .querySelectorAll("[data-remove]")
    .forEach(button => {

      button.onclick = () =>
        removeCart(
          Number(button.dataset.remove)
        );

    });


  const shipping =
    subtotal >= 75 ? 0 : 6.95;

  const total =
    subtotal + shipping;


  container.insertAdjacentHTML(
    "beforeend",

    `

      <div class="cart-summary">

        <div class="summary-row">
          <span>Subtotal</span>
          <span>${money(subtotal)}</span>
        </div>

        <div class="summary-row">
          <span>Estimated shipping</span>
          <span>
            ${shipping ? money(shipping) : "Free"}
          </span>
        </div>

        <div class="summary-row total">
          <span>Total</span>
          <span>${money(total)}</span>
        </div>

        <button
          class="btn btn-primary checkout"
          id="checkout"
        >
          Checkout
        </button>

      </div>

    `
  );


  $("#checkout").onclick = () => {

    cart = [];

    saveState();

    renderCart();

    toast(
      "Demo checkout complete — no real payment was processed."
    );

  };

}


/* WISHLIST */

function toggleWishlist(id) {

  if (wishlist.includes(id)) {

    wishlist =
      wishlist.filter(
        item => item !== id
      );

    toast("Removed from wishlist");

  } else {

    wishlist.push(id);

    toast("Added to wishlist");

  }


  saveState();

  renderWishlist();

  applyFilters();
}


function renderWishlist() {

  const container =
    $("#wishlistContent");


  const items =
    wishlist
      .map(id =>
        products.find(
          product => product.id === id
        )
      )
      .filter(Boolean);


  if (!items.length) {

    container.innerHTML = `

      <div class="panel-empty">

        <div class="empty-icon">
          ♡
        </div>

        <h3>
          Your wishlist is empty
        </h3>

        <p>
          Save records you want to come back to.
        </p>

      </div>

    `;

    return;
  }


  container.innerHTML =
    items.map(product => `

      <div class="wish-item">

        <img
          src="${product.cover}"
          alt="${product.title}"
        >

        <div>

          <p class="item-title">
            ${product.title}
          </p>

          <div class="item-sub">
            ${product.artist}
          </div>

          <div class="item-price">
            ${money(product.price)}
          </div>

          <button
            class="small-btn add"
            data-wish-cart="${product.id}"
          >
            Add to Cart
          </button>

        </div>

        <button
          class="remove"
          data-wish-remove="${product.id}"
        >
          ×
        </button>

      </div>

    `).join("");


  container
    .querySelectorAll("[data-wish-cart]")
    .forEach(button => {

      button.onclick = () =>
        addToCart(
          Number(button.dataset.wishCart)
        );

    });


  container
    .querySelectorAll("[data-wish-remove]")
    .forEach(button => {

      button.onclick = () =>
        toggleWishlist(
          Number(button.dataset.wishRemove)
        );

    });

}


/* PRODUCT DETAILS */

function showDetails(id) {

  const product =
    products.find(
      product => product.id === id
    );


  $("#productDetails").innerHTML = `

    <div class="product-detail">

      <div class="detail-cover">

        <img
          src="${product.cover}"
          alt="${product.title} by ${product.artist}"
        >

      </div>


      <div class="detail-copy">

        <p class="eyebrow">
          ${product.genre.toUpperCase()}
          ·
          ${product.year}
        </p>

        <h2>
          ${product.title}
        </h2>

        <div class="artist">
          ${product.artist}
        </div>

        <p class="detail-description">
          ${product.description}
        </p>

        <div class="rating">
          ★ ${product.rating} / 5.0
        </div>


        <ul class="tracklist">

          ${product.tracks.map(
            (track, index) => `

              <li>

                <span>
                  ${String(index + 1).padStart(2,"0")}
                  &nbsp;
                  ${track}
                </span>

                <span>
                  Side ${index < 3 ? "A" : "B"}
                </span>

              </li>

            `
          ).join("")}

        </ul>


        <div class="detail-price">
          ${money(product.price)}
        </div>


        <button
          class="btn btn-primary"
          id="detailAdd"
        >
          Add to Cart →
        </button>

      </div>

    </div>

  `;


  $("#productModal")
    .classList
    .remove("hidden");


  document.body.classList.add("locked");


  $("#detailAdd").onclick = () => {

    addToCart(product.id);

    closeModal();

  };

}


function closeModal() {

  $("#productModal")
    .classList
    .add("hidden");

  document.body.classList.remove("locked");

}


/* SEARCH + FILTERS */

function applyFilters() {

  const search =
    $("#searchInput")
      .value
      .trim()
      .toLowerCase();

  const genre =
    $("#genreFilter").value;

  const price =
    $("#priceFilter").value;

  const rating =
    $("#ratingFilter").value;

  const sort =
    $("#sortSelect").value;


  let filtered =
    products.filter(product => {

      const matchesSearch =
        !search ||
        `${product.title}
        ${product.artist}
        ${product.genre}`
          .toLowerCase()
          .includes(search);


      const matchesGenre =
        genre === "all" ||
        product.genre === genre;


      let matchesPrice = true;

      if (price === "under30")
        matchesPrice = product.price < 30;

      if (price === "30to40")
        matchesPrice =
          product.price >= 30 &&
          product.price <= 40;

      if (price === "over40")
        matchesPrice =
          product.price > 40;


      const matchesRating =
        rating === "all" ||
        product.rating >= Number(rating);


      return (
        matchesSearch &&
        matchesGenre &&
        matchesPrice &&
        matchesRating
      );

    });


  if (sort === "priceAsc") {

    filtered.sort(
      (a,b) => a.price - b.price
    );

  }

  if (sort === "priceDesc") {

    filtered.sort(
      (a,b) => b.price - a.price
    );

  }

  if (sort === "rating") {

    filtered.sort(
      (a,b) => b.rating - a.rating
    );

  }

  if (sort === "newest") {

    filtered.sort(
      (a,b) => b.year - a.year
    );

  }


  renderProducts(
    "#catalogGrid",
    filtered
  );


  $("#resultsCount")
    .textContent =
    `${filtered.length} records`;


  $("#noResults")
    .classList
    .toggle(
      "hidden",
      filtered.length > 0
    );

}


/* PANELS */

function openPanel(id) {

  $("#" + id)
    .classList
    .add("open");

  $("#drawerBackdrop")
    .classList
    .remove("hidden");

}


function closePanels() {

  $("#cartPanel")
    .classList
    .remove("open");

  $("#wishlistPanel")
    .classList
    .remove("open");

  $("#drawerBackdrop")
    .classList
    .add("hidden");

  document.body.classList.remove("locked");

}


/* TOAST */

function toast(message) {

  const element =
    $("#toast");

  element.textContent =
    message;

  element.classList.add("show");

  clearTimeout(
    window.toastTimer
  );

  window.toastTimer =
    setTimeout(() => {

      element.classList.remove("show");

    }, 2400);

}


/* INITIALIZATION */

function init() {

  renderProducts(
    "#featuredGrid",
    products.slice(0,4)
  );


  renderProducts(
    "#newReleasesGrid",
    [
      products[1],
      products[4],
      products[0],
      products[6]
    ]
  );


  renderProducts(
    "#bestSellersGrid",
    [
      products[2],
      products[5],
      products[8],
      products[9]
    ]
  );


  applyFilters();

  renderCart();

  renderWishlist();

  updateCounts();


  $("#searchToggle").onclick = () => {

    $("#searchPanel")
      .classList
      .toggle("open");

    if (
      $("#searchPanel")
        .classList
        .contains("open")
    ) {

      $("#searchInput").focus();

    }

  };


  $("#searchInput").oninput =
    applyFilters;


  $("#genreFilter").onchange =
    applyFilters;

  $("#priceFilter").onchange =
    applyFilters;

  $("#ratingFilter").onchange =
    applyFilters;

  $("#sortSelect").onchange =
    applyFilters;


  $("#cartBtn").onclick = () => {

    renderCart();

    openPanel("cartPanel");

  };


  $("#wishlistBtn").onclick = () => {

    renderWishlist();

    openPanel("wishlistPanel");

  };


  $("#closeCart").onclick =
    closePanels;

  $("#closeWishlist").onclick =
    closePanels;

  $("#drawerBackdrop").onclick =
    closePanels;


  $("#productModal").onclick =
    event => {

      if (
        event.target ===
        $("#productModal")
      ) {

        closeModal();

      }

    };


  document
    .querySelectorAll(".genre-card")
    .forEach(button => {

      button.onclick = () => {

        $("#genreFilter").value =
          button.dataset.genre;

        applyFilters();

        $("#shop")
          .scrollIntoView({
            behavior: "smooth"
          });

      };

    });


  $("#clearFilters").onclick = () => {

    $("#searchInput").value = "";

    $("#genreFilter").value = "all";

    $("#priceFilter").value = "all";

    $("#ratingFilter").value = "all";

    $("#sortSelect").value = "featured";

    applyFilters();

  };


  $("#newsletterForm").onsubmit =
    event => {

      event.preventDefault();

      $("#newsletterMessage")
        .textContent =
        "You're on the list. Welcome to VinylHub.";

      event.target.reset();

      toast(
        "You're subscribed to VinylHub."
      );

    };


  $("#mobileMenu").onclick = () => {

    $("#navLinks")
      .classList
      .toggle("open");

  };

}


init();
