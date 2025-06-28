// SEARCH BAR

document.addEventListener("DOMContentLoaded", () => {
  const data = [
    { name: "Stainless Steel", link: "pdp.html", category: "supplier" },
    { name: "Manila Hardware", link: "manila-hardware.html", category: "supplier" },
  ];
  

  const input = document.querySelector(".search-input");
  const suggestionsList = document.getElementById("suggestions-list");
  const form = document.getElementById("search-form");

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase();
    suggestionsList.innerHTML = "";

    input.addEventListener("input", () => {
      const query = input.value.toLowerCase();
      const category = form.getAttribute("data-category");
      suggestionsList.innerHTML = "";
    
      if (query.trim() !== "") {
        // filter by both query and category
        const suggestions = data.filter(
          (item) =>
            item.name.toLowerCase().includes(query) &&
            (!category || item.category === category)
        );
    
        if (suggestions.length > 0) {
          suggestionsList.style.display = "block";
          suggestions.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item.name;
            li.dataset.link = item.link;
            suggestionsList.appendChild(li);
          });
        } else {
          const noMatch = document.createElement("li");
          noMatch.textContent = "No matches found";
          noMatch.style.color = "#888";
          suggestionsList.appendChild(noMatch);
        }
      } else {
        suggestionsList.style.display = "none";
      }
    });
    

  suggestionsList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI" && e.target.dataset.link) {
      window.location.href = e.target.dataset.link;
    }
  });

  input.addEventListener("blur", () => {
    setTimeout(() => {
      suggestionsList.style.display = "none";
      suggestionsList.innerHTML = "";
    }, 200);
  });

  suggestionsList.addEventListener("mouseover", () => {
    suggestionsList.style.display = "block";
  });

  // handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = input.value.trim();
    const category = form.getAttribute("data-category");
    if (searchTerm) {
      let queryString = `results.html?search=${encodeURIComponent(searchTerm)}`;
      if (category) {
        queryString += `&category=${encodeURIComponent(category)}`;
      }
      window.location.href = queryString;
    }
  });  
});
})