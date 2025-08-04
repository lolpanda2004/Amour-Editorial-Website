const current = location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
  if (link.getAttribute("href") === current) {
    link.style.color = "#ffcc00";
  }
});
