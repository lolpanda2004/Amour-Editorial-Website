const mobileToggle = document.getElementById("mobileToggle");
const navMenu = document.getElementById("navMenu");

if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        mobileToggle.classList.toggle("open");
    });
}

document.querySelectorAll('.nav-item, .btn-consultation, .btn-primary, .btn-outline').forEach(link => {
    link.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

const fadeElements = document.querySelectorAll(".about-card, .service-item, .timeline-item, .testimonial-slide, .contact-detail, .booking-form-container");

const fadeInObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            fadeInObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => fadeInObserver.observe(el));

const slides = document.querySelectorAll(".testimonial-slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));
    slides[index].classList.add("active");
    dots[index].classList.add("active");
    currentSlide = index;
}

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
        let next = (currentSlide + 1) % slides.length;
        showSlide(next);
    });

    prevBtn.addEventListener("click", () => {
        let prev = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prev);
    });
}

dots.forEach(dot => {
    dot.addEventListener("click", () => {
        showSlide(parseInt(dot.getAttribute("data-slide")));
    });
});

if (slides.length > 1) {
    setInterval(() => {
        let next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }, 7000);
}

const counters = document.querySelectorAll(".counter");
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target;
        }
    };

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            updateCount();
            observer.disconnect();
        }
    }, { threshold: 0.5 });

    observer.observe(counter);
});

const forms = document.querySelectorAll("form");

forms.forEach(form => {
    form.addEventListener("submit", e => {
        const inputs = form.querySelectorAll("input[required], textarea[required], select[required]");
        let valid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                valid = false;
                input.classList.add("input-error");
                setTimeout(() => input.classList.remove("input-error"), 2000);
            }
        });
        if (!valid) e.preventDefault();
    });
});

const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀️";
}

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        darkModeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("darkMode", "disabled");
        darkModeToggle.textContent = "🌙";
    }
});
