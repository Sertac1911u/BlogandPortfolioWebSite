document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".search");
  const articles = document.querySelectorAll(".item");

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();

    articles.forEach((article) => {
      const title = article.querySelector("h2").textContent.toLowerCase();
      const content = article.querySelector("p").textContent.toLowerCase();

      if (title.includes(searchTerm) || content.includes(searchTerm)) {
        article.style.display = "block";
      } else {
        article.style.display = "none";
      }
    });
  });
});
