// Example: Toggle visibility of sections
document.querySelectorAll("h3").forEach((sectionTitle) => {
    sectionTitle.addEventListener("click", () => {
      const sectionContent = sectionTitle.nextElementSibling;
      sectionContent.style.display =
        sectionContent.style.display === "none" ? "block" : "none";
    });
  });
  