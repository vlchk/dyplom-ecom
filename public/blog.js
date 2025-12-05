// blog.js — логіка універсальної сторінки блогу

(function () {
  const params = new URLSearchParams(window.location.search);
  const postId = params.get("id") || "summer-freedom";

  const post =
    typeof findPostById === "function" ? findPostById(postId) : null;

  const article = document.querySelector("#blog-article");

  if (!post || !article) {
    if (article) {
      article.innerHTML = "<p>Blog post not found.</p>";
    }
    return;
  }

  const titleEl = article.querySelector(".blog-title");
  const titleSmallEl = article.querySelector(".blog-title-small");
  const dateEl = article.querySelector(".blog-date");
  const categoryEl = article.querySelector(".blog-category");
  const readingTimeEl = article.querySelector(".blog-reading-time");
  const heroImgEl = article.querySelector(".blog-hero-img");
  const introEl = article.querySelector(".blog-intro");
  const contentEl = article.querySelector(".blog-content");
  const quoteEl = article.querySelector(".blog-quote");

  if (titleEl) titleEl.textContent = post.title;
  if (titleSmallEl) titleSmallEl.textContent = post.title;
  if (dateEl) dateEl.textContent = post.date;
  if (categoryEl) categoryEl.textContent = post.category;
  if (readingTimeEl) readingTimeEl.textContent = post.readingTime;

  if (heroImgEl) {
    heroImgEl.src = post.hero || post.cover;
    heroImgEl.alt = post.title;
  }

  if (introEl) introEl.textContent = post.intro || "";

  if (contentEl && Array.isArray(post.content)) {
    contentEl.innerHTML = "";
    post.content.forEach((block) => {
      const p = document.createElement("p");
      // якщо рядок починається з "<" – вважаємо це HTML
      if (block.trim().startsWith("<")) {
        p.innerHTML = block;
      } else {
        p.textContent = block;
      }
      contentEl.appendChild(p);
    });
  }

  if (quoteEl && post.quote) {
    quoteEl.textContent = post.quote;
  } else if (quoteEl) {
    quoteEl.style.display = "none";
  }
})();
