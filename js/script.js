const current = location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
  if (link.getAttribute("href") === current) {
    link.style.color = "#ffcc00";
  }
});
// ==== TESTIMONIAL FILTERS ====
document.addEventListener("DOMContentLoaded", () => {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  const modal = document.getElementById("testimonial-modal");
  const modalBody = modal.querySelector(".modal-body");
  const closeModal = modal.querySelector(".close-modal");

  // Filter Functionality with Fade Animation
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.dataset.filter;
      testimonialCards.forEach(card => {
        card.style.opacity = 0;
        setTimeout(() => {
          if (filterValue === "all" || card.dataset.category === filterValue) {
            card.style.display = "inline-block";
            setTimeout(() => card.style.opacity = 1, 100);
          } else {
            card.style.display = "none";
          }
        }, 300);
      });
    });
  });

  // Card Click - Open Modal
  testimonialCards.forEach(card => {
    card.addEventListener("click", () => {
      if (card.classList.contains("video")) {
        const videoUrl = card.dataset.video;
        modalBody.innerHTML = `<iframe src="${videoUrl}" allowfullscreen></iframe>`;
      } else {
        const text = card.querySelector("p").innerText;
        const author = card.querySelector("span").innerText;
        modalBody.innerHTML = `<p style="font-size:1.1rem;">${text}</p><strong>${author}</strong>`;
      }
      modal.style.display = "block";
    });
  });

  // Close Modal
  closeModal.addEventListener("click", closeModalFunc);
  window.addEventListener("click", (e) => { if (e.target === modal) closeModalFunc(); });

  function closeModalFunc() {
    modal.style.display = "none";
    modalBody.innerHTML = "";
  }
});
