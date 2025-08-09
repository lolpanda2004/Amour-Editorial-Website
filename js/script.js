const current = location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
  if (link.getAttribute("href") === current) {
    link.style.color = "#ffcc00";
  }
});
// ==== TESTIMONIAL FILTERS ====
const filterButtons = document.querySelectorAll('.filter-btn');
const testimonialCards = document.querySelectorAll('.testimonial-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.getAttribute('data-filter');
    testimonialCards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ==== MODAL FUNCTIONALITY ====
const modal = document.getElementById('testimonial-modal');
const modalBody = modal.querySelector('.modal-body');
const closeModal = modal.querySelector('.close-modal');

testimonialCards.forEach(card => {
  card.addEventListener('click', () => {
    modal.style.display = 'flex';
    if (card.classList.contains('video')) {
      const videoURL = card.getAttribute('data-video');
      modalBody.innerHTML = `<iframe src="${videoURL}" allowfullscreen></iframe>`;
    } else {
      modalBody.innerHTML = `<p>${card.querySelector('p').textContent}</p><span>${card.querySelector('span').textContent}</span>`;
    }
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  modalBody.innerHTML = '';
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
    modalBody.innerHTML = '';
  }
});
