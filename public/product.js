// Logic for the universal product page (product.html)

(function() {
  // Read product id from URL, e.g. product.html?id=tshirt
  var params = new URLSearchParams(window.location.search);
  var productId = params.get("id") || "tshirt";

  // Lookup product data
  var product = typeof findProductById === "function"
    ? findProductById(productId)
    : null;

  if (!product) {
    var section = document.querySelector(".sproduct");
    if (section) section.innerHTML = "<p>Product not found.</p>";
    return;
  }

  // Main page elements
  var titleEl = document.querySelector(".product-title");
  var priceEl = document.querySelector(".price");
  var descEl  = document.querySelector(".description");
  var mainImg = document.getElementById("mainImg");
  var thumbs  = document.querySelector(".small-img-group");
  var breadcrumb = document.querySelector(".product-breadcrumb");

  // Fill main info
  if (titleEl) titleEl.textContent = product.name;
  if (priceEl) priceEl.textContent = product.priceText || ("$" + product.price.toFixed(2));
  if (descEl && product.description) descEl.textContent = product.description;
  if (breadcrumb) breadcrumb.textContent = "Home / " + product.name;

  // Build images array
  var allImages = (product.images && product.images.length)
    ? product.images
    : (product.mainImage ? [product.mainImage] : []);

  if (mainImg && allImages.length) {
    mainImg.src = allImages[0];
  }

  // Thumbnails
  if (thumbs) {
    thumbs.innerHTML = "";

    allImages.forEach(function(src) {
      var col = document.createElement("div");
      col.className = "small-img-col";
      col.innerHTML = '<img src="' + src + '" width="100%" class="small-img" alt="">';
      thumbs.appendChild(col);
    });

    // thumbnail click -> change main image
    thumbs.addEventListener("click", function(e) {
      var img = e.target.closest(".small-img");
      if (img && mainImg) {
        mainImg.src = img.src;

        // update index for arrows/swipe
        var newIndex = allImages.indexOf(img.src);
        if (newIndex === -1) {
          // if browser gives full URL, match by ending
          for (var i = 0; i < allImages.length; i++) {
            if (img.src.includes(allImages[i])) {
              newIndex = i;
              break;
            }
          }
        }
        currentIndex = (newIndex >= 0 ? newIndex : 0);
      }
    });
  }

  // === ARROWS + SWIPE LOGIC ===
  var currentIndex = 0;
  var leftArrow  = document.querySelector(".arrow-left");
  var rightArrow = document.querySelector(".arrow-right");
  var wrapper    = document.querySelector(".main-img-wrapper");

  function showImage(index) {
    if (mainImg && allImages[index]) {
      mainImg.src = allImages[index];
    }
  }

  function nextImage() {
    currentIndex++;
    if (currentIndex >= allImages.length) currentIndex = 0;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex--;
    if (currentIndex < 0) currentIndex = allImages.length - 1;
    showImage(currentIndex);
  }

  // Arrow events
  if (leftArrow) {
    leftArrow.addEventListener("click", prevImage);
  }

  if (rightArrow) {
    rightArrow.addEventListener("click", nextImage);
  }

  // Touch swipe support
  if (wrapper && allImages.length > 1) {
    var startX = 0;

    wrapper.addEventListener("touchstart", function(e) {
      if (e.changedTouches && e.changedTouches.length) {
        startX = e.changedTouches[0].clientX;
      }
    }, { passive: true });

    wrapper.addEventListener("touchend", function(e) {
      if (!e.changedTouches || !e.changedTouches.length) return;

      var endX = e.changedTouches[0].clientX;
      var diff = endX - startX;

      if (Math.abs(diff) > 50) {
        if (diff < 0) nextImage(); // swipe left
        else prevImage();         // swipe right
      }
    }, { passive: true });
  }

})();
