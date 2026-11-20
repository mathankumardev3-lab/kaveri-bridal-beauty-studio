/**
 * KAVERI BRIDAL & BEAUTY STUDIO - APPLICATION LOGIC (script.js)
 */

/**
 * 1. CURATED SOUTH INDIAN SERVICES DATA (10 Luxury Services)
 */
const SERVICES_DATA = [
  {
    title: "Traditional Bridal Makeup",
    category: "Bridal Artistry",
    duration: "3.5 Hours • From ₹18,000",
    description: "Luminous HD & airbrush bridal makeup tailored for Kanchipuram silk drapes, temple gold jewellery, and sacred wedding rituals.",
    image: "https://images.pexels.com/photos/12006824/pexels-photo-12006824.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Engagement Makeup",
    category: "Ceremonial",
    duration: "2.5 Hours • From ₹10,500",
    description: "Soft, radiant complexion with defined eyes and delicate floral hair styling ideal for betrothal and ring ceremonies.",
    image: "https://images.pexels.com/photos/33608796/pexels-photo-33608796.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Reception Makeup",
    category: "Evening Glam",
    duration: "2.5 Hours • From ₹12,000",
    description: "Regal evening glamour featuring sculpted highlights, rich velvet lip tones, and statement jewellery coordination.",
    image: "https://images.pexels.com/photos/30572412/pexels-photo-30572412.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Facial & Skin Care",
    category: "Radiance Rituals",
    duration: "75 Mins • From ₹2,800",
    description: "Saffron, sandalwood, and golden honey brightening facials designed to restore natural luminosity before your big day.",
    image: "https://images.pexels.com/photos/6977987/pexels-photo-6977987.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Hair Styling",
    category: "Floral & Braids",
    duration: "90 Mins • From ₹2,500",
    description: "Classical South Indian long floral braids, temple hair ornaments, and fragrant fresh jasmine flower arrangements.",
    image: "https://images.pexels.com/photos/7234533/pexels-photo-7234533.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Saree Draping",
    category: "Silk Couture",
    duration: "45 Mins • From ₹1,500",
    description: "Precision box-pleating and secure pinning for heavy handloom Kanchipuram silk sarees and traditional half-sarees.",
    image: "https://images.pexels.com/photos/30458515/pexels-photo-30458515.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Mehndi Design",
    category: "Bridal Henna",
    duration: "2 - 4 Hours • From ₹3,500",
    description: "Intricate South Indian bridal motifs, temple pillars, and peacock patterns using 100% organic dark-stain henna.",
    image: "https://images.pexels.com/photos/40994337/pexels-photo-40994337.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Hair Spa",
    category: "Botanical Care",
    duration: "60 Mins • From ₹2,200",
    description: "Warm herbal oil infusion, hibiscus scalp therapy, and deep conditioning steam for lustrous, silky hair.",
    image: "https://images.pexels.com/photos/23349908/pexels-photo-23349908.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Threading & Waxing",
    category: "Essential Grooming",
    duration: "45 Mins • From ₹850",
    description: "Gentle brow sculpting and soothing organic aloe-vera waxing for smooth, event-ready skin.",
    image: "https://images.pexels.com/photos/4632905/pexels-photo-4632905.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Traditional Beauty Treatments",
    category: "Heritage Wellness",
    duration: "90 Mins • From ₹3,200",
    description: "Authentic pre-bridal turmeric body polishing, rosewater bathing rituals, and herbal aromatic skin therapy.",
    image: "https://images.pexels.com/photos/35500957/pexels-photo-35500957.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

/**
 * 2. CURATED MASONRY GALLERY DATA
 */
const GALLERY_DATA = [
  {
    src: "https://images.pexels.com/photos/12006824/pexels-photo-12006824.jpeg?auto=compress&cs=tinysrgb&w=1000",
    title: "Crimson Kanchipuram Tamil Bridal Portrait",
    category: "bridal",
    label: "Bridal Portraits"
  },
  {
    src: "https://images.pexels.com/photos/19891849/pexels-photo-19891849.jpeg?auto=compress&cs=tinysrgb&w=1000",
    title: "Heirloom Gold Temple Necklace & Choker",
    category: "jewellery",
    label: "Temple Jewellery"
  },
  {
    src: "https://images.pexels.com/photos/7234533/pexels-photo-7234533.jpeg?auto=compress&cs=tinysrgb&w=1000",
    title: "Classical Jasmine Adorned Bridal Hair",
    category: "floral",
    label: "Floral & Hair"
  },
  {
    src: "https://images.pexels.com/photos/40994337/pexels-photo-40994337.jpeg?auto=compress&cs=tinysrgb&w=1000",
    title: "Intricate Ceremonial Bridal Mehndi Art",
    category: "mehndi",
    label: "Mehndi"
  },
  {
    src: "https://images.pexels.com/photos/30458515/pexels-photo-30458515.jpeg?auto=compress&cs=tinysrgb&w=1000",
    title: "Handwoven Kanchipuram Silk Saree Draping",
    category: "silk",
    label: "Silk Sarees"
  },
  {
    src: "https://images.pexels.com/photos/33608796/pexels-photo-33608796.jpeg?auto=compress&cs=tinysrgb&w=1000",
    title: "Luminous South Indian Engagement Look",
    category: "bridal",
    label: "Bridal Portraits"
  },
  {
    src: "https://images.pexels.com/photos/30458510/pexels-photo-30458510.jpeg?auto=compress&cs=tinysrgb&w=1000",
    title: "Traditional Silk & Temple Gold Ensemble",
    category: "silk",
    label: "Silk Sarees"
  },
  {
    src: "https://images.pexels.com/photos/30572412/pexels-photo-30572412.jpeg?auto=compress&cs=tinysrgb&w=1000",
    title: "Antique Gold Bridal Ornaments & Styling",
    category: "jewellery",
    label: "Temple Jewellery"
  },
  {
    src: "https://images.pexels.com/photos/17454229/pexels-photo-17454229.jpeg?auto=compress&cs=tinysrgb&w=1000",
    title: "Detailed Bridal Henna & Gold Bangles",
    category: "mehndi",
    label: "Mehndi"
  }
];

/**
 * 3. CLIENT TESTIMONIALS DATA
 */
const TESTIMONIALS_DATA = [
  {
    name: "Meenakshi Sundaram",
    role: "Wedding Bride • Chennai",
    service: "Traditional Bridal Makeup & Silk Draping",
    avatar: "https://images.pexels.com/photos/12006824/pexels-photo-12006824.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "Kaveri Bridal Studio made me feel like royalty on my wedding morning. My Kanchipuram saree pleats stayed crisp through five hours of rituals, and the makeup looked completely natural and luminous in every photograph."
  },
  {
    name: "Ananya Krishnamurthy",
    role: "Engagement & Reception Bride • Adyar",
    service: "Engagement & Reception Bridal Package",
    avatar: "https://images.pexels.com/photos/33608796/pexels-photo-33608796.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "From the pre-bridal saffron facials to the jasmine floral braid for my wedding, every detail was handled with such patience and cultural authenticity. My entire family loved their saree draping too!"
  },
  {
    name: "Divya Raghavan",
    role: "Wedding Bride • Mylapore",
    service: "Royal Temple Jewellery Bridal Look",
    avatar: "https://images.pexels.com/photos/30458515/pexels-photo-30458515.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "I wanted a classic South Indian look that honored our family traditions without feeling heavy. The artists matched my skin tone flawlessly and arranged my temple jewellery with remarkable precision."
  }
];

// Render 10 Service Cards
function renderServices() {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;

  grid.innerHTML = SERVICES_DATA.map((service) => `
    <article class="group bg-ivory rounded-3xl overflow-hidden border border-gold/30 shadow-sm hover:shadow-luxury transition-all duration-500 flex flex-col justify-between reveal">
      <div>
        <div class="img-zoom-container aspect-[4/3] relative">
          <img
            src="${service.image}"
            alt="${service.title}"
            loading="lazy"
            class="w-full h-full object-cover object-center"
          />
          <span class="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-ivory/95 backdrop-blur-sm text-maroon text-[11px] font-semibold uppercase tracking-wider border border-gold/30">
            ${service.category}
          </span>
        </div>
        <div class="p-6">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">${service.duration}</p>
          <h3 class="font-editorial text-2xl font-bold text-maroon mb-2.5">${service.title}</h3>
          <p class="text-sm text-espressoLight leading-relaxed">
            ${service.description}
          </p>
        </div>
      </div>

      <div class="px-6 pb-6 pt-2">
        <button
          type="button"
          onclick="selectServiceAndScroll('${service.title}')"
          class="w-full py-2.5 px-4 rounded-full border border-maroon text-maroon text-xs font-bold uppercase tracking-widest hover:bg-maroon hover:text-ivory transition-colors"
        >
          Book Service
        </button>
      </div>
    </article>
  `).join("");
}

// Pre-select service and scroll smoothly to Appointment section
window.selectServiceAndScroll = function(serviceName) {
  const selectEl = document.getElementById("serviceSelect");
  const appointmentSection = document.getElementById("appointment");
  if (selectEl) {
    selectEl.value = serviceName;
  }
  if (appointmentSection) {
    appointmentSection.scrollIntoView({ behavior: "smooth" });
  }
};

// Render Filterable Masonry Gallery
let currentFilteredGallery = [...GALLERY_DATA];
let currentLightboxIndex = 0;

function renderGallery(filter = "all") {
  const container = document.getElementById("masonryGallery");
  if (!container) return;

  currentFilteredGallery = filter === "all"
    ? [...GALLERY_DATA]
    : GALLERY_DATA.filter(item => item.category === filter);

  container.innerHTML = currentFilteredGallery.map((item, idx) => `
    <div
      onclick="openLightbox(${idx})"
      class="masonry-item group relative rounded-3xl overflow-hidden border border-gold/30 shadow-sm hover:shadow-luxury cursor-pointer bg-ivoryDark"
    >
      <img
        src="${item.src}"
        alt="${item.title}"
        loading="lazy"
        class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-maroon/85 via-maroon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span class="text-[11px] uppercase tracking-[0.2em] text-goldLight font-semibold">${item.label}</span>
        <h3 class="font-editorial text-2xl text-ivory font-semibold mt-1">${item.title}</h3>
        <span class="text-xs text-ivory/80 mt-2 inline-flex items-center gap-1">View Full Portrait &rarr;</span>
      </div>
    </div>
  `).join("");
}

// Lightbox Functions
window.openLightbox = function(index) {
  currentLightboxIndex = index;
  updateLightboxUI();
  const modal = document.getElementById("lightboxModal");
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
};

function updateLightboxUI() {
  const item = currentFilteredGallery[currentLightboxIndex];
  if (!item) return;
  document.getElementById("lightboxImage").src = item.src;
  document.getElementById("lightboxImage").alt = item.title;
  document.getElementById("lightboxCategory").textContent = item.label;
  document.getElementById("lightboxTitle").textContent = item.title;
}

function closeLightboxModal() {
  document.getElementById("lightboxModal").classList.add("hidden");
  document.body.style.overflow = "";
}

// Testimonial Carousel Logic
let activeTestimonial = 0;

function renderTestimonial(index) {
  const container = document.getElementById("testimonialContent");
  const dotsContainer = document.getElementById("testimonialDots");
  if (!container || !dotsContainer) return;

  const t = TESTIMONIALS_DATA[index];
  container.style.opacity = "0";

  setTimeout(() => {
    container.innerHTML = `
      <div class="flex justify-center gap-1 text-gold mb-5" aria-label="5 out of 5 stars">
        ${Array(5).fill('<svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>').join("")}
      </div>
      <p class="font-editorial text-2xl sm:text-3xl italic text-espresso leading-relaxed max-w-3xl mx-auto mb-8">
        "${t.quote}"
      </p>
      <div class="flex flex-col items-center">
        <img src="${t.avatar}" alt="${t.name}" class="w-16 h-16 rounded-full object-cover object-top border-2 border-gold shadow-md mb-3" />
        <h4 class="font-editorial text-2xl font-bold text-maroon">${t.name}</h4>
        <p class="text-xs uppercase tracking-widest text-espressoLight font-semibold mt-0.5">${t.role}</p>
        <span class="mt-2 px-3.5 py-1 rounded-full bg-roseSoft/70 text-maroon text-xs font-medium">${t.service}</span>
      </div>
    `;
    container.style.opacity = "1";
  }, 150);

  dotsContainer.innerHTML = TESTIMONIALS_DATA.map((_, i) => `
    <button
      onclick="goToTestimonial(${i})"
      aria-label="Go to review ${i + 1}"
      class="h-2.5 rounded-full transition-all ${i === index ? 'w-8 bg-maroon' : 'w-2.5 bg-gold/40 hover:bg-gold'}"
    ></button>
  `).join("");
}

window.goToTestimonial = function(idx) {
  activeTestimonial = idx;
  renderTestimonial(activeTestimonial);
};

// Initialize Interactive Features on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderGallery("all");
  renderTestimonial(0);

  // Set minimum date on appointment picker to today
  const dateInput = document.getElementById("appointmentDate");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
  }

  // Mobile Menu Drawer Toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenuDrawer = document.getElementById("mobileMenuDrawer");
  const menuIconOpen = document.getElementById("menuIconOpen");
  const menuIconClose = document.getElementById("menuIconClose");

  mobileMenuBtn.addEventListener("click", () => {
    const isHidden = mobileMenuDrawer.classList.contains("hidden");
    mobileMenuDrawer.classList.toggle("hidden");
    menuIconOpen.classList.toggle("hidden", isHidden);
    menuIconClose.classList.toggle("hidden", !isHidden);
  });

  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenuDrawer.classList.add("hidden");
      menuIconOpen.classList.remove("hidden");
      menuIconClose.classList.add("hidden");
    });
  });

  // Gallery Category Filter Listeners
  document.querySelectorAll(".gallery-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".gallery-filter-btn").forEach(b => {
        b.classList.remove("bg-maroon", "text-ivory", "border-maroon");
        b.classList.add("bg-ivoryDark", "text-espresso", "border-gold/40");
      });
      btn.classList.remove("bg-ivoryDark", "text-espresso", "border-gold/40");
      btn.classList.add("bg-maroon", "text-ivory", "border-maroon");
      renderGallery(btn.dataset.filter);
    });
  });

  // Lightbox Controls
  document.getElementById("closeLightbox").addEventListener("click", closeLightboxModal);
  document.getElementById("prevLightbox").addEventListener("click", () => {
    currentLightboxIndex = (currentLightboxIndex - 1 + currentFilteredGallery.length) % currentFilteredGallery.length;
    updateLightboxUI();
  });
  document.getElementById("nextLightbox").addEventListener("click", () => {
    currentLightboxIndex = (currentLightboxIndex + 1) % currentFilteredGallery.length;
    updateLightboxUI();
  });
  document.getElementById("lightboxModal").addEventListener("click", (e) => {
    if (e.target.id === "lightboxModal") closeLightboxModal();
  });
  document.addEventListener("keydown", (e) => {
    const modal = document.getElementById("lightboxModal");
    if (modal.classList.contains("hidden")) return;
    if (e.key === "Escape") closeLightboxModal();
    if (e.key === "ArrowLeft") document.getElementById("prevLightbox").click();
    if (e.key === "ArrowRight") document.getElementById("nextLightbox").click();
  });

  // Testimonial Prev / Next Controls
  document.getElementById("prevTestimonial").addEventListener("click", () => {
    activeTestimonial = (activeTestimonial - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length;
    renderTestimonial(activeTestimonial);
  });
  document.getElementById("nextTestimonial").addEventListener("click", () => {
    activeTestimonial = (activeTestimonial + 1) % TESTIMONIALS_DATA.length;
    renderTestimonial(activeTestimonial);
  });

  // Appointment Form Validation & Confirmation
  const bookingForm = document.getElementById("bookingForm");
  const bookingFeedback = document.getElementById("bookingFeedback");

  function getBookingValues() {
    return {
      name: document.getElementById("fullName").value.trim(),
      mobile: document.getElementById("mobileNumber").value.trim(),
      service: document.getElementById("serviceSelect").value,
      date: document.getElementById("appointmentDate").value,
      time: document.getElementById("preferredTime").value,
      message: document.getElementById("bookingMessage").value.trim()
    };
  }

  function showFeedback(isError, htmlMessage) {
    bookingFeedback.classList.remove("hidden", "bg-roseSoft", "text-maroon", "border", "border-maroon/30", "bg-[#E7F5EE]", "text-[#145333]", "border-[#1F7A4C]/30");
    if (isError) {
      bookingFeedback.classList.add("bg-roseSoft", "text-maroon", "border", "border-maroon/30");
    } else {
      bookingFeedback.classList.add("bg-[#E7F5EE]", "text-[#145333]", "border", "border-[#1F7A4C]/30");
    }
    bookingFeedback.innerHTML = htmlMessage;
  }

  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = getBookingValues();

    if (!data.name || !data.mobile || !data.service || !data.date || !data.time) {
      showFeedback(true, "<strong>Please complete all required fields:</strong> Full Name, Mobile Number, Service, Date, and Preferred Time.");
      return;
    }

    showFeedback(
      false,
      `<strong>Appointment Request Confirmed!</strong><br/>Thank you, <strong>${data.name}</strong>. Our bridal concierge has reserved your request for <strong>${data.service}</strong> on <strong>${data.date}</strong> (${data.time}) and will call <strong>${data.mobile}</strong> shortly.`
    );
    bookingForm.reset();
  });

  // Direct WhatsApp Booking Integration
  document.getElementById("whatsappBookBtn").addEventListener("click", () => {
    const data = getBookingValues();
    if (!data.name || !data.service) {
      showFeedback(true, "Please enter at least your <strong>Full Name</strong> and select a <strong>Service</strong> before launching WhatsApp booking.");
      return;
    }

    const whatsappText = [
      "Hello Kaveri Bridal & Beauty Studio, I would like to book an appointment:",
      `• Name: ${data.name}`,
      `• Mobile: ${data.mobile || "Provided on WhatsApp"}`,
      `• Service: ${data.service}`,
      `• Preferred Date: ${data.date || "Flexible"}`,
      `• Preferred Time: ${data.time || "Flexible"}`,
      data.message ? `• Notes: ${data.message}` : ""
    ].filter(Boolean).join("\n");

    const studioPhone = "919840172650";
    const whatsappUrl = `https://wa.me/${studioPhone}?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });

  // IntersectionObserver Scroll Reveal Animations
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
});
