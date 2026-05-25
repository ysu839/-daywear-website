const products = [
  {
    slug: "mocha-faded-jeans",
    name: "Mocha Faded Jeans",
    price: 89.95,
    category: "jeans",
    crop: "crop-3",
    strip: "strip-3",
    galleryFrame: "landscape",
    photos: [
      {
        src: "assets/mocha-faded-jeans.png",
        alt: "Mocha Faded Jeans front and back product photo",
      },
    ],
    colors: [
      {
        name: "Mocha Fade",
        hex: "linear-gradient(135deg, #2d2119 0 45%, #80634d 45% 60%, #3b2a20 60% 100%)",
      },
    ],
    detail:
      "Vintage-inspired denim reworked through the DAYWEAR lens. The Mocha Faded Jeans feature a rich washed mocha finish with a relaxed straight-leg silhouette designed for everyday wear.",
    accordions: [
      {
        title: "Product Details",
        content:
          "<p>Vintage-inspired denim reworked through the DAYWEAR lens. Crafted from premium heavyweight denim, the fit delivers a structured drape with natural stacking over sneakers.</p><ul><li>Relaxed straight-leg fit</li><li>Premium heavyweight denim</li><li>Vintage mocha faded wash</li><li>Soft worn-in texture</li><li>Clean minimal construction</li><li>Natural stacked silhouette</li><li>Tonal stitching throughout</li><li>Classic 5-pocket design</li><li>Button & zip closure</li><li>Subtle DAYWEAR branding</li></ul>",
      },
      {
        title: "Fit",
        content:
          "<ul><li>Relaxed fit</li><li>True to size</li><li>Slight stacking at the ankle</li><li>Model is 184cm wearing size L</li></ul>",
      },
      {
        title: "Material",
        content:
          "<ul><li>100% Cotton Denim</li><li>Heavyweight fabric</li><li>Washed finish</li></ul>",
      },
      {
        title: "Colorway",
        content: "<p>Mocha Fade</p>",
      },
      {
        title: "Styling",
        content:
          "<p>Pairs best with Cream Chrome Longsleeve, Mocha Veil Tech Pack, Future Classics Tee, and Retro Rugby Polo.</p>",
      },
      {
        title: "Shipping & Returns",
        content:
          "<ul><li>Free shipping on orders over €75</li><li>30-day returns</li><li>Worldwide shipping available</li></ul>",
      },
      {
        title: "Care",
        content:
          "<ul><li>Wash inside out at 30°C</li><li>Do not tumble dry</li><li>Air dry recommended</li><li>Avoid bleach products</li></ul>",
      },
    ],
  },
  {
    slug: "dw-mocha-veil-tech-pack",
    name: "DW MOCHA VEIL TECH PACK",
    price: 109.95,
    category: "tracksuits",
    crop: "crop-2",
    strip: "strip-2",
    photos: [
      {
        src: "assets/mocha-veil-front.png",
        alt: "DW MOCHA VEIL TECH PACK primary product photo",
      },
      {
        src: "assets/mocha-veil-back.png",
        alt: "DW MOCHA VEIL TECH PACK secondary product photo",
      },
    ],
    colors: [
      {
        name: "Cream / Mocha",
        hex: "linear-gradient(135deg, #f2e8d8 0 50%, #5a3420 50% 100%)",
      },
    ],
    detail:
      "Minimal lines, premium fleece, and an easy silhouette made for daily rotation.",
  },
  {
    slug: "dw-contrast-tracksuit",
    name: "DW Contrast Tracksuit",
    price: 114.95,
    category: "tracksuits",
    crop: "crop-3",
    strip: "strip-3",
    colors: [
      { name: "Cream", hex: "#f0e9dc" },
      { name: "Navy", hex: "#111b2d" },
      { name: "Black", hex: "#070707" },
    ],
    detail:
      "Sharp contrast blocking with a clean athletic profile and premium everyday finish.",
  },
  {
    slug: "dw-signature-tracksuit",
    name: "DW Signature Tracksuit",
    price: 124.95,
    category: "tracksuits",
    crop: "crop-4",
    strip: "strip-4",
    colors: [
      { name: "Cloud", hex: "#f2f0ea" },
      { name: "Mocha", hex: "#51311f" },
      { name: "Graphite", hex: "#30302d" },
    ],
    detail:
      "The elevated signature set with embroidered DAYWEAR® marks and a polished drape.",
  },
  {
    slug: "dw-minimal-tracksuit",
    name: "DW Minimal Tracksuit",
    price: 109.95,
    category: "tracksuits",
    crop: "crop-5",
    strip: "strip-5",
    colors: [
      { name: "Ivory", hex: "#f5eee1" },
      { name: "Sand", hex: "#a5927b" },
      { name: "Olive", hex: "#202817" },
    ],
    detail:
      "Clean, understated, and warm. A quiet luxury essential for off-duty days.",
  },
  {
    slug: "dw-performance-tracksuit",
    name: "DW Performance Tracksuit",
    price: 129.95,
    category: "tracksuits",
    crop: "crop-6",
    strip: "strip-6",
    colors: [
      { name: "Silver", hex: "#d7d2c9" },
      { name: "Charcoal", hex: "#2b2926" },
      { name: "Black", hex: "#050505" },
    ],
    detail:
      "Technical stretch, structured panels, and a premium feel built for motion.",
  },
  {
    slug: "dw-heavyweight-hoodie",
    name: "DW Heavyweight Hoodie",
    price: 79.95,
    category: "hoodies",
    crop: "crop-2",
    strip: "strip-2",
    colors: [
      { name: "Cream", hex: "#f0eadf" },
      { name: "Mocha", hex: "#54341f" },
      { name: "Ink", hex: "#111111" },
    ],
    detail:
      "A dense fleece hoodie with dropped shoulders and a soft luxury hand feel.",
  },
  {
    slug: "dw-logo-tee",
    name: "DW Logo T-Shirt",
    price: 44.95,
    category: "t-shirts",
    crop: "crop-4",
    strip: "strip-4",
    colors: [
      { name: "White", hex: "#f7f3eb" },
      { name: "Clay", hex: "#8f6748" },
      { name: "Black", hex: "#060606" },
    ],
    detail:
      "Compact cotton jersey with a crisp DAYWEAR® chest mark and premium neckline.",
  },
  {
    slug: "dw-tech-jacket",
    name: "DW Tech Jacket",
    price: 149.95,
    category: "jackets",
    crop: "crop-5",
    strip: "strip-5",
    colors: [
      { name: "Stone", hex: "#b9aa93" },
      { name: "Mocha", hex: "#4d2e1d" },
      { name: "Black", hex: "#050505" },
    ],
    detail:
      "A light shell jacket with a cinematic streetwear shape and clean utility details.",
  },
  {
    slug: "dw-embroidered-cap",
    name: "DW Embroidered Cap",
    price: 34.95,
    category: "accessories",
    crop: "crop-6",
    strip: "strip-6",
    colors: [
      { name: "Black", hex: "#050505" },
      { name: "Taupe", hex: "#81725f" },
      { name: "Cream", hex: "#f1eadc" },
    ],
    detail:
      "Six-panel cap with tonal embroidery and a premium curved brim.",
  },
];

const collections = [
  {
    slug: "tracksuits",
    title: "Tracksuits",
    crop: "crop-1",
    copy: "Complete premium sets.",
  },
  {
    slug: "hoodies",
    title: "Hoodies",
    crop: "crop-2",
    copy: "Heavyweight everyday layers.",
  },
  {
    slug: "t-shirts",
    title: "T-Shirts",
    crop: "crop-4",
    copy: "Clean cotton essentials.",
  },
  {
    slug: "jeans",
    title: "Jeans",
    crop: "crop-3",
    copy: "Washed denim essentials.",
  },
  {
    slug: "jackets",
    title: "Jackets",
    crop: "crop-5",
    copy: "Structured outerwear.",
  },
  {
    slug: "accessories",
    title: "Accessories",
    crop: "crop-6",
    copy: "Finishing details.",
  },
];

const state = {
  cart: JSON.parse(localStorage.getItem("daywear-cart") || "[]"),
  wishlist: new Set(JSON.parse(localStorage.getItem("daywear-wishlist") || "[]")),
  selected: {},
  galleryIndex: 0,
};

const app = document.querySelector("#app");
const nav = document.querySelector("[data-nav]");
const cartDrawer = document.querySelector("[data-cart-drawer]");
const cartItems = document.querySelector("[data-cart-items]");
const cartCount = document.querySelector("[data-cart-count]");
const cartTotal = document.querySelector("[data-cart-total]");
const toast = document.querySelector("[data-toast]");
const searchModal = document.querySelector("[data-search-modal]");
const accountModal = document.querySelector("[data-account-modal]");

const formatPrice = (value) =>
  new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
  }).format(value);

const productBySlug = (slug) => products.find((product) => product.slug === slug);

function saveState() {
  localStorage.setItem("daywear-cart", JSON.stringify(state.cart));
  localStorage.setItem("daywear-wishlist", JSON.stringify([...state.wishlist]));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function icon(name) {
  return `<svg aria-hidden="true"><use href="#icon-${name}"></use></svg>`;
}

function renderNoPhotoPanel(title, label = "DAYWEAR®") {
  return `<span class="no-photo-panel" aria-label="${title}">
    <span class="panel-glow" aria-hidden="true"></span>
    <span class="panel-mark">DW</span>
    <span class="panel-title">${title}</span>
    <span class="panel-label">${label}</span>
  </span>`;
}

function renderNoPhotoThumb(label) {
  return `<span class="no-photo-thumb" aria-hidden="true">
    <span>DW</span>
    <small>${label}</small>
  </span>`;
}

function renderDecorPanel(title) {
  return `<span class="no-photo-panel decorative-panel" aria-hidden="true" data-panel="${title}">
    <span class="panel-glow" aria-hidden="true"></span>
    <span class="panel-mark">DW</span>
  </span>`;
}

function renderProductVisual(product, className = "") {
  if (product.photos?.length) {
    const photo = product.photos[0];
    return `<img class="product-photo ${className}" src="${photo.src}" alt="${photo.alt}" loading="lazy" />`;
  }

  return renderNoPhotoPanel(product.name, "No product photo");
}

function renderProductThumb(product) {
  if (product.photos?.length) {
    const photo = product.photos[0];
    return `<img class="product-photo thumb-photo" src="${photo.src}" alt="${photo.alt}" loading="lazy" />`;
  }

  return renderNoPhotoThumb(product.name);
}

function renderColorDots(colors) {
  return `<div class="color-dots" aria-label="Available colors">
    ${colors.map((color) => `<span class="dot" style="background:${color.hex}" title="${color.name}"></span>`).join("")}
  </div>`;
}

function renderProductCard(product) {
  const saved = state.wishlist.has(product.slug) ? " saved" : "";

  return `<article class="product-card" data-product-card="${product.slug}">
    <button class="wishlist-button${saved}" data-wishlist="${product.slug}" aria-label="Save ${product.name}">
      ${icon("heart")}
    </button>
    <a class="product-card-image" href="#product/${product.slug}" aria-label="Open ${product.name}">
      ${renderProductVisual(product, "card-photo")}
    </a>
    <div class="product-card-info">
      <a class="product-name" href="#product/${product.slug}">${product.name}</a>
      <span class="price">${formatPrice(product.price)}</span>
      <div class="card-bottom">
        ${renderColorDots(product.colors)}
        <button class="quick-add" data-quick-add="${product.slug}" aria-label="Quick add ${product.name}">
          ${icon("plus")}
        </button>
      </div>
    </div>
  </article>`;
}

function renderHome() {
  const featured = products.slice(0, 6);

  app.innerHTML = `<div class="page">
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">Built for Tomorrow</p>
        <h1>Premium Essentials Designed for Life</h1>
        <p class="hero-subtitle">
          Timeless design. Premium materials. Made to move with you, every day.
        </p>
        <div class="button-row">
          <a class="primary-button" href="#tracksuits">Shop Collection</a>
          <a class="secondary-button" href="#shop">New Arrivals</a>
        </div>
        <div class="review-line">
          <span class="stars">★★★★★</span>
          <span>4.9/5 from 1200+ reviews</span>
        </div>
      </div>
    </section>

    <section class="benefits-bar" aria-label="Shopping benefits">
      ${renderBenefit("crown", "Premium Quality", "Built to last.")}
      ${renderBenefit("globe", "Worldwide Shipping", "Fast & reliable delivery.")}
      ${renderBenefit("return", "Easy Returns", "14-day return policy.")}
      ${renderBenefit("shield", "Secure Payments", "100% safe checkout.")}
    </section>

    <section class="section section-panel">
      <div class="section-head">
        <h2 class="section-title">Our Top Products</h2>
        <a class="view-link" href="#tracksuits">View all</a>
      </div>
      <div class="carousel-wrap">
        <button class="carousel-arrow prev" data-carousel-prev aria-label="Previous products">
          ${icon("chevron-left")}
        </button>
        <div class="product-track" data-product-track>
          ${featured.map(renderProductCard).join("")}
        </div>
        <button class="carousel-arrow next" data-carousel-next aria-label="Next products">
          ${icon("chevron-right")}
        </button>
      </div>
    </section>

    <section class="section section-panel">
      <div class="section-head">
        <h2 class="section-title">Shop by Collection</h2>
        <a class="view-link" href="#collections">View all collections</a>
      </div>
      <div class="collection-grid">
        ${collections.map(renderCollectionCard).join("")}
      </div>
    </section>
  </div>`;
}

function renderBenefit(iconName, title, copy) {
  return `<article class="benefit">
    <span class="benefit-icon">${icon(iconName)}</span>
    <div>
      <h3>${title}</h3>
      <p>${copy}</p>
    </div>
  </article>`;
}

function renderCollectionCard(collection) {
  return `<a class="collection-card" href="#collection/${collection.slug}" aria-label="Shop ${collection.title}">
    ${renderDecorPanel(collection.title)}
    <span class="collection-copy">
      <h3>${collection.title}</h3>
      <span>Shop Now</span>
    </span>
  </a>`;
}

function renderListing(route, collectionSlug = "") {
  const isTracksuits = route === "tracksuits";
  const activeCollection =
    collectionSlug || (isTracksuits ? "tracksuits" : route === "shop" ? "" : route);
  const collection = collections.find((item) => item.slug === activeCollection);
  const visibleProducts = activeCollection
    ? products.filter((product) => product.category === activeCollection)
    : products;
  const heading = collection ? collection.title : isTracksuits ? "Tracksuits" : "New Arrivals";

  app.innerHTML = `<div class="page">
    <section class="listing-hero">
      <p class="eyebrow">${collection ? "Collection" : "DAYWEAR® Shop"}</p>
      <h1>${heading}</h1>
      <p>
        Luxury everyday essentials built with soft structure, premium material,
        and a clean streetwear silhouette.
      </p>
    </section>

    <section class="section section-panel">
      <div class="section-head">
        <h2 class="section-title">${heading}</h2>
        <a class="view-link" href="#collections">All collections</a>
      </div>
      <div class="product-grid">
        ${visibleProducts.map(renderProductCard).join("")}
      </div>
    </section>
  </div>`;
}

function renderCollectionsPage() {
  app.innerHTML = `<div class="page">
    <section class="listing-hero">
      <p class="eyebrow">DAYWEAR® collections</p>
      <h1>Built around the everyday uniform</h1>
      <p>
        Shop complete sets, heavyweight layers, clean cotton staples, structured
        outerwear, and premium accessories.
      </p>
    </section>
    <section class="section section-panel">
      <div class="section-head">
        <h2 class="section-title">Shop by Collection</h2>
      </div>
      <div class="collection-grid">
        ${collections.map(renderCollectionCard).join("")}
      </div>
    </section>
  </div>`;
}

function defaultSelection(product) {
  if (!state.selected[product.slug]) {
    state.selected[product.slug] = {
      color: product.colors[0].name,
      colorHex: product.colors[0].hex,
      size: "M",
      qty: 1,
    };
  }

  return state.selected[product.slug];
}

function renderProductPage(slug) {
  const product = productBySlug(slug) || products[0];
  const selection = defaultSelection(product);
  const gallery =
    product.photos?.length
      ? product.photos
      : [
          "Product view",
          "Alternate view",
          "Profile view",
          "Detail close-up",
          "Fabric/logo close-up",
          "Model fit reference",
        ];
  const active = gallery[state.galleryIndex % gallery.length];
  const saved = state.wishlist.has(product.slug) ? " saved" : "";
  const hasPhotos = Boolean(product.photos?.length);
  const hasGalleryControls = gallery.length > 1;
  const galleryFrame = product.galleryFrame || "portrait";
  const accordions =
    product.accordions || [
      { title: "Product Details", content: product.detail },
      {
        title: "Shipping & Returns",
        content:
          "Worldwide shipping with tracked delivery. Returns are accepted within 14 days when items are unworn and tags remain attached.",
      },
      {
        title: "Materials & Care",
        content:
          "Premium cotton blend fleece. Wash cold with similar colors, dry flat, and avoid bleach to preserve the finish.",
      },
    ];

  app.innerHTML = `<div class="page product-page">
    <section class="product-gallery ${hasPhotos ? "has-product-photos" : ""} gallery-frame-${galleryFrame}">
      <div class="gallery-main ${hasPhotos ? "" : "gallery-placeholder"}">
        ${
          hasPhotos
            ? `<img class="product-photo gallery-photo" src="${active.src}" alt="${active.alt}" />`
            : renderNoPhotoPanel(product.name, active)
        }
        ${
          hasGalleryControls
            ? `<button class="gallery-arrow left" data-gallery-prev="${product.slug}" aria-label="Previous image">
                ${icon("chevron-left")}
              </button>
              <button class="gallery-arrow right" data-gallery-next="${product.slug}" aria-label="Next image">
                ${icon("chevron-right")}
              </button>`
            : ""
        }
        ${hasPhotos ? "" : `<span class="gallery-caption">${active}</span>`}
      </div>
      ${
        hasGalleryControls
          ? `<div class="thumb-row">
              ${gallery
                .map(
                  (item, index) => `<button class="thumb ${index === state.galleryIndex ? "active" : ""}" data-gallery-thumb="${index}" aria-label="${hasPhotos ? item.alt : item}">
                    ${
                      hasPhotos
                        ? `<img class="product-photo thumb-photo" src="${item.src}" alt="" loading="lazy" />`
                        : renderNoPhotoThumb(item)
                    }
                  </button>`,
                )
                .join("")}
            </div>`
          : ""
      }
    </section>

    <aside class="product-buy-box">
      <button class="wishlist-button${saved}" data-wishlist="${product.slug}" aria-label="Save ${product.name}">
        ${icon("heart")}
      </button>
      <p class="eyebrow">DAYWEAR® essentials</p>
      <h1>${product.name}</h1>
      <p class="price">${formatPrice(product.price)}</p>
      <div class="rating-row">
        <span class="stars">★★★★★</span>
        <span>4.9/5 · 214 reviews</span>
      </div>

      <div class="selector-group">
        <div class="selector-label">
          <span>Color: ${selection.color}</span>
        </div>
        <div class="color-selectors">
          ${product.colors
            .map(
              (color) => `<button class="color-button ${selection.color === color.name ? "active" : ""}" style="background:${color.hex}" data-select-color="${product.slug}" data-color="${color.name}" data-hex="${color.hex}" aria-label="${color.name}"></button>`,
            )
            .join("")}
        </div>
      </div>

      <div class="selector-group">
        <div class="selector-label">
          <span>Size</span>
          <a class="size-guide" href="#size-guide" data-size-guide>Size Guide</a>
        </div>
        <div class="size-selectors">
          ${["XS", "S", "M", "L", "XL", "XXL"]
            .map(
              (size) => `<button class="size-button ${selection.size === size ? "active" : ""}" data-select-size="${product.slug}" data-size="${size}">${size}</button>`,
            )
            .join("")}
        </div>
      </div>

      <div class="selector-group">
        <div class="selector-label">
          <span>Quantity</span>
        </div>
        <div class="quantity">
          <button class="qty-button" data-qty-minus="${product.slug}" aria-label="Decrease quantity">${icon("minus")}</button>
          <span class="qty-value">${selection.qty}</span>
          <button class="qty-button" data-qty-plus="${product.slug}" aria-label="Increase quantity">${icon("plus")}</button>
        </div>
      </div>

      <div class="button-row">
        <button class="primary-button full-width" data-add-selected="${product.slug}">Add to Cart</button>
        <button class="secondary-button full-width" data-buy-now="${product.slug}">Buy Now</button>
      </div>

      <div class="checkout-badges">
        <span>Visa</span>
        <span>Mastercard</span>
        <span>PayPal</span>
        <span>Apple Pay</span>
      </div>

      ${accordions.map((accordion) => renderAccordion(accordion.title, accordion.content)).join("")}
    </aside>
  </div>`;
}

function renderAccordion(title, copy) {
  return `<div class="accordion">
    <button data-accordion type="button">
      <span>${title}</span>
      <span>+</span>
    </button>
    <div class="accordion-panel">${copy}</div>
  </div>`;
}

function renderAbout() {
  app.innerHTML = `<div class="page">
    <section class="editorial-page">
      <p class="eyebrow">About DAYWEAR®</p>
      <h1>Built for Tomorrow</h1>
      <p>
        DAYWEAR® creates premium essentials designed for life. The brand sits
        between streetwear utility and quiet luxury, with silhouettes made to
        move from weekday routines to night city energy.
      </p>
      <div class="editorial-grid">
        ${renderEditorialCard("Premium Materials", "Soft hand feel, durable construction, and a refined weight that makes every piece feel considered.")}
        ${renderEditorialCard("Everyday Movement", "Clean shapes with enough structure for presence and enough ease for daily wear.")}
        ${renderEditorialCard("Cinematic Minimalism", "Mocha, cream, taupe, black, and soft gold details create a serious luxury streetwear world.")}
      </div>
    </section>
  </div>`;
}

function renderEditorialCard(title, copy) {
  return `<article class="editorial-card">
    <h3>${title}</h3>
    <p>${copy}</p>
  </article>`;
}

function renderLookbook() {
  const scenes = [
    ["The Showroom", "Warm light, mocha shadow, cream essentials.", "crop-1"],
    ["Off-Duty Uniform", "Layered fleece and relaxed precision.", "crop-2"],
    ["Night Movement", "Premium sets built for motion.", "crop-3"],
    ["Logo Details", "Minimal branding with a luxury finish.", "crop-6"],
    ["Structured Layers", "Streetwear shapes with polished restraint.", "crop-5"],
    ["Tomorrow Fit", "Clean silhouettes for every day.", "crop-4"],
  ];

  app.innerHTML = `<div class="page">
    <section class="listing-hero">
      <p class="eyebrow">Lookbook</p>
      <h1>Cinematic everyday essentials</h1>
      <p>
        A campaign world of soft shadow, glass reflections, warm light, and
        premium streetwear built around the daily uniform.
      </p>
    </section>
    <section class="section section-panel">
      <div class="section-head">
        <h2 class="section-title">DAYWEAR® Lookbook</h2>
      </div>
      <div class="lookbook-grid">
        ${scenes
          .map(
            ([title, copy, crop]) => `<article class="lookbook-card">
              ${renderNoPhotoPanel(title, copy)}
              <span class="collection-copy">
                <h3>${title}</h3>
                <span>${copy}</span>
              </span>
            </article>`,
          )
          .join("")}
      </div>
    </section>
  </div>`;
}

function renderCheckout() {
  const subtotal = cartSubtotal();
  const shipping = subtotal > 0 ? 0 : 0;
  const total = subtotal + shipping;

  app.innerHTML = `<div class="page checkout-page">
    <p class="eyebrow">Secure checkout</p>
    <h1>Complete your order</h1>
    <div class="checkout-layout">
      <section class="checkout-card">
        <h2>Delivery</h2>
        <form class="checkout-form">
          <label>Email<input type="email" placeholder="you@example.com" /></label>
          <div class="two-col">
            <label>First name<input placeholder="Alex" /></label>
            <label>Last name<input placeholder="Morgan" /></label>
          </div>
          <label>Address<input placeholder="Street and house number" /></label>
          <div class="two-col">
            <label>City<input placeholder="Amsterdam" /></label>
            <label>Postal code<input placeholder="1012 AB" /></label>
          </div>
          <label>Payment<input placeholder="Card number" inputmode="numeric" /></label>
          <button class="primary-button" type="button" data-place-order>
            Place Order
          </button>
        </form>
      </section>
      <aside class="checkout-card">
        <h2>Order Summary</h2>
        <div data-checkout-lines>
          ${renderCheckoutLines()}
        </div>
        <div class="summary-line">
          <span>Subtotal</span>
          <strong>${formatPrice(subtotal)}</strong>
        </div>
        <div class="summary-line">
          <span>Shipping</span>
          <strong>${subtotal > 0 ? "Free" : formatPrice(shipping)}</strong>
        </div>
        <div class="summary-line">
          <span>Total</span>
          <strong>${formatPrice(total)}</strong>
        </div>
      </aside>
    </div>
  </div>`;
}

function renderCheckoutLines() {
  if (!state.cart.length) {
    return `<div class="empty-state">Your cart is ready for premium essentials.</div>`;
  }

  return state.cart
    .map((item) => {
      const product = productBySlug(item.slug);
      if (!product) return "";

      return `<div class="summary-line">
        <span>${product.name} × ${item.qty}</span>
        <strong>${formatPrice(product.price * item.qty)}</strong>
      </div>`;
    })
    .join("");
}

function cartSubtotal() {
  return state.cart.reduce((sum, item) => {
    const product = productBySlug(item.slug);
    return product ? sum + product.price * item.qty : sum;
  }, 0);
}

function renderCart() {
  const count = state.cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = count;
  cartTotal.textContent = formatPrice(cartSubtotal());

  if (!state.cart.length) {
    cartItems.innerHTML = `<div class="empty-state">Your cart is empty. Add a tracksuit and the checkout will wake up.</div>`;
    return;
  }

  cartItems.innerHTML = state.cart
    .map((item, index) => {
      const product = productBySlug(item.slug);
      if (!product) return "";

      return `<article class="cart-item">
        ${renderProductThumb(product)}
        <div class="cart-meta">
          <h3>${product.name}</h3>
          <p>${item.color} · ${item.size} · Qty ${item.qty}</p>
          <div class="cart-line">
            <strong>${formatPrice(product.price * item.qty)}</strong>
            <button class="cart-remove" data-remove-cart="${index}" type="button">Remove</button>
          </div>
        </div>
      </article>`;
    })
    .join("");
}

function addToCart(slug, override = {}) {
  const product = productBySlug(slug);
  if (!product) return;

  const selection = {
    ...defaultSelection(product),
    ...override,
  };
  const existing = state.cart.find(
    (item) =>
      item.slug === slug &&
      item.size === selection.size &&
      item.color === selection.color,
  );

  if (existing) {
    existing.qty += selection.qty;
  } else {
    state.cart.push({
      slug,
      size: selection.size,
      color: selection.color,
      qty: selection.qty,
    });
  }

  saveState();
  renderCart();
  showToast(`${product.name} added to cart`);
}

function toggleWishlist(slug) {
  const product = productBySlug(slug);
  if (!product) return;

  if (state.wishlist.has(slug)) {
    state.wishlist.delete(slug);
    showToast(`${product.name} removed from wishlist`);
  } else {
    state.wishlist.add(slug);
    showToast(`${product.name} saved to wishlist`);
  }

  saveState();
  renderRoute();
}

function openCart() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function openSearch() {
  searchModal.showModal();
  renderSearchResults("");
  window.setTimeout(() => document.querySelector("[data-search-input]")?.focus(), 0);
}

function renderSearchResults(query) {
  const results = products.filter((product) =>
    product.name.toLowerCase().includes(query.trim().toLowerCase()),
  );
  const target = document.querySelector("[data-search-results]");

  target.innerHTML = results.length
    ? results
        .map(
          (product) => `<a class="search-result" href="#product/${product.slug}" data-close-search>
            ${renderProductThumb(product)}
            <span>
              <strong>${product.name}</strong><br />
              <small>${product.category.replace("-", " ")}</small>
            </span>
            <strong class="price">${formatPrice(product.price)}</strong>
          </a>`,
        )
        .join("")
    : `<div class="empty-state">No essentials found for that search.</div>`;
}

function renderRoute() {
  const [route = "home", detail = ""] = location.hash.replace("#", "").split("/");
  state.galleryIndex = route === "product" ? state.galleryIndex : 0;

  document.querySelectorAll("[data-route]").forEach((link) => {
    link.classList.toggle("active", link.dataset.route === route);
  });

  if (route === "home" || route === "") renderHome();
  else if (route === "shop") renderListing("shop");
  else if (route === "collections") renderCollectionsPage();
  else if (route === "collection") renderListing("collection", detail);
  else if (route === "tracksuits") renderListing("tracksuits", "tracksuits");
  else if (route === "about") renderAbout();
  else if (route === "lookbook") renderLookbook();
  else if (route === "product") renderProductPage(detail);
  else if (route === "checkout") renderCheckout();
  else renderHome();

  nav.classList.remove("open");
  app.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button, a");
  if (!target) return;

  if (target.matches("[data-menu-toggle]")) {
    nav.classList.toggle("open");
  }

  if (target.matches("[data-open-cart]")) {
    openCart();
  }

  if (target.matches("[data-close-cart]")) {
    closeCart();
  }

  if (target.matches("[data-open-search]")) {
    openSearch();
  }

  if (target.matches("[data-open-account]")) {
    accountModal.showModal();
  }

  if (target.matches("[data-login-demo]")) {
    showToast("Signed in demo account");
    accountModal.close();
  }

  if (target.matches("[data-quick-add]")) {
    event.preventDefault();
    event.stopPropagation();
    addToCart(target.dataset.quickAdd, { size: "M", qty: 1 });
  }

  if (target.matches("[data-add-selected]")) {
    addToCart(target.dataset.addSelected);
    openCart();
  }

  if (target.matches("[data-buy-now]")) {
    addToCart(target.dataset.buyNow);
    location.hash = "#checkout";
  }

  if (target.matches("[data-wishlist]")) {
    event.preventDefault();
    event.stopPropagation();
    toggleWishlist(target.dataset.wishlist);
  }

  if (target.matches("[data-carousel-prev], [data-carousel-next]")) {
    const track = document.querySelector("[data-product-track]");
    const direction = target.matches("[data-carousel-next]") ? 1 : -1;
    track.scrollBy({ left: direction * 340, behavior: "smooth" });
  }

  if (target.matches("[data-gallery-prev], [data-gallery-next]")) {
    const product = productBySlug(target.dataset.galleryPrev || target.dataset.galleryNext);
    const direction = target.matches("[data-gallery-next]") ? 1 : -1;
    const galleryLength = product.photos?.length || 6;
    state.galleryIndex = (state.galleryIndex + direction + galleryLength) % galleryLength;
    renderProductPage(product.slug);
  }

  if (target.matches("[data-gallery-thumb]")) {
    state.galleryIndex = Number(target.dataset.galleryThumb);
    const slug = location.hash.split("/")[1];
    renderProductPage(slug);
  }

  if (target.matches("[data-select-color]")) {
    const product = productBySlug(target.dataset.selectColor);
    const selection = defaultSelection(product);
    selection.color = target.dataset.color;
    selection.colorHex = target.dataset.hex;
    renderProductPage(product.slug);
  }

  if (target.matches("[data-select-size]")) {
    const product = productBySlug(target.dataset.selectSize);
    defaultSelection(product).size = target.dataset.size;
    renderProductPage(product.slug);
  }

  if (target.matches("[data-qty-minus], [data-qty-plus]")) {
    const slug = target.dataset.qtyMinus || target.dataset.qtyPlus;
    const product = productBySlug(slug);
    const selection = defaultSelection(product);
    const direction = target.matches("[data-qty-plus]") ? 1 : -1;
    selection.qty = Math.max(1, selection.qty + direction);
    renderProductPage(slug);
  }

  if (target.matches("[data-accordion]")) {
    target.parentElement.classList.toggle("open");
  }

  if (target.matches("[data-remove-cart]")) {
    state.cart.splice(Number(target.dataset.removeCart), 1);
    saveState();
    renderCart();
  }

  if (target.matches("[data-size-guide]")) {
    event.preventDefault();
    showToast("Size guide: choose your regular size for a relaxed DAYWEAR fit");
  }

  if (target.matches("[data-place-order]")) {
    showToast("Order placed in demo checkout");
    state.cart = [];
    saveState();
    renderCart();
    renderCheckout();
  }

  if (target.matches("[data-close-search]")) {
    searchModal.close();
  }
});

document.addEventListener("input", (event) => {
  if (event.target.matches("[data-search-input]")) {
    renderSearchResults(event.target.value);
  }
});

window.addEventListener("hashchange", renderRoute);

if (!location.hash) {
  history.replaceState(null, "", "#home");
}

renderCart();
renderRoute();
