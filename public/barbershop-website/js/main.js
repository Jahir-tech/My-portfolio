// =========================
// File: js/main.js
// Vintage Barbershop Project
// =========================
// ---- DOM Elements ----
const yearEl = document.getElementById("year");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const ctaBtn = document.getElementById("ctaBtn");
const callBtn = document.getElementById("callBtn");
const phoneLink = document.getElementById("phoneLink"); // We won't be using an actual phone feature
const heading = document.getElementById("heroHeading");
const featureGrid = document.getElementById("featureGrid");
const nav = document.getElementById("nav");
const siteHeader = document.querySelector(".site-header");
const heroSubtext = document.getElementById("heroSubtext");
const ctaText = document.getElementById("ctaText");
const hoursList = document.getElementById("hoursList");

// ------ Modal Elements ------
const serviceModal = document.getElementById("serviceModal");
const serviceModalOverlay = document.getElementById("serviceModalOverlay");
const serviceModalClose = document.getElementById("serviceModalClose");
const serviceModalTitle = document.getElementById("serviceModalTitle");
const serviceModalPrice = document.getElementById("serviceModalPrice");
const serviceModalList = document.getElementById("serviceModalList");
// ------ Services Data (Array of Objects) ----
const services = [
    {
        id: 1,
        title: "Classic Haircut",
        image: "assets/images/feature-7.jpg",
        alt: "Classic haircut",
        description: "Timeless cuts with modern precision-tailered to your style.",
        price: 25,
        popular: true,
        details: [
            "Consultation with your barber before the cut begins.",
            "Hair sectioning and shape-up based on your preferred style.",
            "Professional clippers, trimmers, and shears used for precision.",
            "Neckline cleanup and finishing touches included.",
            "Light styling product applied for a clean final look.",
        ],
    },
    {
        id: 2,
        title: "Beard Trim",
        image: "assets/images/feature-1.jpg",
        alt: "Beard trim",
        description: "Shape, line-up, and refine your beard for a clean finish.",
        price: 15,
        popular: false,
        details: [
            "Beard assessment and shaping based on face structure.",
            "Line-up around the cheeks, jawline, and neckline.",
            "Trimmers and detail tools used for crisp edges.",
            "Conditioning beard product may be applied for softness.",
            "Final symmetry check for a polished finish.",
        ],
    },
    {
        id: 3,
        title: "Straight Razor Shave",
        image: "assets/images/feature-3.jpg",
        alt: "Straight razor shave",
        description: "Hot towel, smooth shave, and classic barbershop experience.",
        price: 30,
        popular: true,
        details: [
            "Hot towel prep to soften facial hair and open pores.",
            "Premium shaving cream or lather applied to protect the skin.",
            "Straight razor shave performed with careful detailing.",
            "Second hot towel may be used for comfort and cleanup.",
            "Aftershave or soothing skin product applied after service.",
        ],
    },
    {
        id: 4,
        title: "Fade & Style",
        image: "assets/images/feature-4.jpeg",
        alt: "Fade haircut",
        description: "A clean fade with finishing detail for a sharp, modern look.",
        price: 35,
        popular: false,
        details: [
            "Styling consultation before clipper work begins.",
            "Fade blended to your preferred level and finish.",
            "Detailing around temples, neckline, and beard area if needed.",
            "Scissors and clipper-over-comb may be used for texture.",
            "Styling product added to complete the final look.",
        ],
    },
    {
        id: 5,
        title: "Kids Cut",
        image: "assets/images/feature-5.jpg",
        alt: "Kids haircut",
        description: "Clean, comfortable haircut service for younger clients.",
        price: 20,
        popular: false,
        details: [
            "Simple consultation with child and parent if needed.",
            "Age-appropriate haircut with comfort in mind.",
            "Careful clipper and scissor work for a clean finish.",
            "Light cleanup around the neckline and ears.",
            "Styled neatly before leaving the chair.",
        ],
    },
    {
        id: 6,
        title: "Head Shave",
        image: "assets/images/feature-6.jpg",
        alt: "Head shave",
        description: "Smooth head shave with classic barbershop treatment",
        price: 28,
        popular: true,
        details: [
            "Scalp prep with warm towel treatment",
            "Protective shave product applied before razor work.",
            "Close shave performed for a smooth finish.",
            "Scalp cleaned and checked for even consistency",
            "Moisturizing scalp product applied after the shave",
        ],
    },
];
/* const services = [
    {
        title: "Classic Haircut",
        text: "Timeless cuts with modern precision tailored to your style.",
        image: "assets/images/feature-1.jpg"
    },
    {
        title: "Beard Trim",
        text: "Shape and line-up your beard for a clean, sharp finish.",
        image: "assets/images/feature-2.jpg"
    },
    {
        title: "Straight Razor Shave",
        text: "Hot towel treatment with a smooth traditional shave.",
        image: "assets/images/feature-3.jpg"
    }
]; */

// ---- Navigation Data (Array of Objects) ----
const navLinks = [
    {label: "Home", href: "#hero"}, // #'s are a placeholder since we don't have anywhere for these links to go
    {label: "Services", href: "#features"},
    {label: "Book", href: "#cta"},
    {label: "Contact", href:"#footer"},
];
/* ---- Render Features using forEach ----
 const renderFeatures = () => {
     if(!featureGrid) return; // if the feature grid is not found don't return anything. This prevents errors from crashing the whole site.
     services.forEach((service) => {
         const card = document.createElement("article"); // Creation of the article element
         card.classList.add("feature-card");
         card.innerHTML = `
         <img src="${service.image}" alt="${service.title}" class="feature-img"
         />
         <h3 class="feature-title">${service.title}</h3>
         <p class="feature-text">${service.text}</p>
         `;
         featureGrid.appendChild(card);
     });
 }; */
 const renderServices = () => {
    if (!featureGrid) return;
    const servicesHTML = services.map((service) => {
        const badgeHTML = service.popular ? `<p class="service-badge">Popular Choice</p>` : `<p class="service-badge alt-badge">Barber 
        Favorite</p>`;
        return `
        <article class="feature-card">
        <img
        src="${service.image}"
        alt="${service.alt}"
        class="feature-img"
        />
        <h3 class="feature-title">${service.title}</h3>
        <p class="feature-text">${service.description}</p>
        ${badgeHTML}
        <p class="service-price">$${service.price}</p>
        <div class="service-actions">
        <button
        class="service-details-btn"
        type="button"
        data-service-id="${service.id}"
        >
        View Details
        </button>
        </div>
        </article>
        `;
    })
    .join("");
    featureGrid.innerHTML = servicesHTML;
 };

 // ---- Render Business Hours ----
 const renderHours = () => {
    if (!hoursList) return;
    hoursList.innerHTML = businessHours.map((item) => {
        if (item.open === 0 && item.close === 0) {
            return `<li>${item.day}: Closed</li>`;
        }
        return `<li>${item.day}: ${formatHour(item.open)} -
        ${formatHour(item.close)}</li>`;
    })
    .join("");
 };

 const renderContactInfo = () => {
    if (phoneLink) {
        phoneLink.textContent = shopInfo.phoneDisplay;
        phoneLink.href = `tel:${shopInfo.phoneRaw}`;
    }
    if (addressLink) {
        addressLink.textContent = shopInfo.address;
        addressLink.href = "#";
    }
    if (emailLink) {
        emailLink.textContent = shopInfo.email;
        emailLink.href = `mailto:${shopInfo.email}`;
    }
 };

// ---- Render Features using map() ----
/*const renderFeaturesMap = () => {
    const cardsHTML = services.map((service) => {
        return `
        <article class="feature-card">
        <img src="${service.image}" alt="${service.title}" class="feature-img" />
        <h3 class="feature-title">${service.title}</h3>
        <p class="feature-text">${service.text}</p>
        </article>
        `;
    }).join("");
    featureGrid.innerHTML = cardsHTML; // The new array cardsHTML will hold the cards
}; // innerHTML removes the quotation marks and adds the elements into the div with the featureGrid id */

// ---- Render Navigation using map() ----
const renderNavigation = () => {
    // Desktop Navigation links
    if (nav) {
        const navHTML = navLinks.map((link) => {
            return `
            <a href="${link.href}" class="nav-link">
            ${link.label}
            </a>
            `;
        }).join("");
        nav.innerHTML= navHTML;
    }

    // ---- Mobile Nav ----
    if (mobileMenu) {
        const mobileHTML = navLinks.map((link) => {
            return `
            <a href="${link.href}" class="mobile-link">
            ${link.label}
            </a>
            `;
        }).join("");
        mobileMenu.innerHTML = mobileHTML;
    }
};
// Skills               Concept
// Object Arrays        Data Structure
// map()                Transforms Data
// Template Literals    Dynamic HTML
// DOM Rendering        UI Generation

// ---- Main Shop Object ----
const shopInfo = {
    name: "Vintage Barbershop",
    address: "123 Main St, Your City",
    phoneDisplay: "(555) 123-4567",
    phoneRaw: "5551234567",
    email: "hello@vintagebarbershop.com",
};

// ---- Hours Data ----
const businessHours = [
    {day: "Monday", open: 9, close: 19},
    {day: "Tuesday", open: 9, close: 19},
    {day: "Wednesday", open: 9, close: 19},
    {day: "Thursday", open: 9, close: 19},
    {day: "Friday", open: 9, close: 19},
    {day: "Saturday", open: 10, close: 17},
    {day: "Sunday", open: 0, close: 0},
];

// ---- Helpers / Functions ----

const handleHeaderOnScroll =() => {
    if (!siteHeader) return;
    if(window.scrollY > 10) {
        siteHeader.classList.add("is-scrolled"); // classList adds/removes a class from an element via a variable
        // like siteHeader, featureGrid, etc...
    } else {
        siteHeader.classList.remove("is-scrolled");
    }
};

// Update footer year automatically
const setCurrentYear = () => {
    const now = new Date();
    yearEl.textContent = now.getFullYear();
};

// Display Hours
const formatHour = (hour) => {
    if (hour === 0) return "Closed"; // Safety net. Never seen by user
    if (hour === 12) return "12pm";
    if (hour >12) return `${hour -12}pm`;
    return `${hour}am`;
};

// Toggle mobile menu open /close
let isMenuOpen = false;
const toggleMobileMenu = () => { // Opens and closes the mobile menu
if (!mobileMenu) return; // Stop clause
if (isMenuOpen === false) {
    mobileMenu.classList.add("is-open");
    isMenuOpen = true;
} else {
    mobileMenu.classList.remove("is-open");
    isMenuOpen = false;
}
}; 

// Close mobile menu (used when a link is clicked)
const closeMobileMenu = () => { // When the user clicks a link in the navbar the mobileMenu will close
    if (!mobileMenu) return;
    mobileMenu.classList.remove("is-open");
    isMenuOpen = false;
};

// Reusable function with parameters (practice pattern)
const updateHeadingText = (newText) => {
    if (!heading) return;
    heading.textContent = newText;
};
const updateSubtext = (newText) => {
    if (!heroSubtext) return;
    heroSubtext.textContent = newText;
};

// ----- Modal Logic ------
const openServiceModal = (serviceId) => {
    if (
        !serviceModal ||
        !serviceModalTitle ||
        !serviceModalPrice ||
        !serviceModalList
    )
    return;
    
    // find() iterates through the array and grabs the first matching object in this case it's based on the service.id number
    const selectedService = services.find(
        (service) => service.id === Number(serviceId),/* Number() takes the string that is returned from the serviceId(line 410) and
        converts it back to the number */
    );
    if (!selectedService) return;
    serviceModalTitle.textContent = selectedService.title;
    serviceModalPrice.textContent = `$${selectedService.price}`;
    serviceModalList.innerHTML = selectedService.details.map((detail) => `<li>${detail}</li>`)
    .join("");
    serviceModal.classList.add("is-open");
    serviceModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
};
const closeServiceModal = () => {
    if (!serviceModal) return;
    serviceModal.classList.remove("is-open");
    serviceModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
};

// ----- Open / Closed Logic -----
const checkIfOpen = () => {
    const now = new Date();
    const currentDay = now.getDay();
    const currentHour = now.getHours();
    let schedule; /* We can't initialize it in the declaration itself since there's no single expression that covers both branches without
    repeating the conditional. Schedule's value comes as a result of a condition so we didn't give it a value to begin with */
    if (currentDay === 0) {
        schedule = businessHours[6]; // Business hours array lists sunday as the 6th index
    } else {
        schedule = businessHours[currentDay -1]; /* currentDay comes from the now.getDay() which shows monday as 1 but it needs to be 
        shifted to 0 for human understanding */
    }
    if (schedule.open === 0 && schedule.close === 0) { // .open comes from the businessHours array
        updateSubtext("We are closed today. Book now for your next sharp look.");
        return;
    }
    if (currentHour >= schedule.open && currentHour < schedule.close) {
        updateSubtext(
            "we're open right now - walk-ins welcome, appointments recommended.",
        );
    } else {
        updateSubtext(
            "We're currently closed, but you can still book your next appointment.",
        );
    }
};

// ---- Event Listeners ----
// 1) Set year on page load
setCurrentYear();

// 2) Hamburger menu toggle
if (menuBtn) {
    menuBtn.addEventListener("click", () => { // adding eventListeners to the toggle MobileMenu()
        toggleMobileMenu();
    });
}

// 3) Close mobile menu when a mobile link is clicked (event delegation)
if (mobileMenu) {
    mobileMenu.addEventListener("click", (event) => { // adding eventListeners to the closeMobileMenu()
        // If they clicked an <a> inside the menu, close it
        if (event.target.tagName === "A") { // event represents the "what was triggered?" target is the "what was
        // triggered?", tagName is the element name that was targeted
            closeMobileMenu();
        }
    });
}

// 4) CTA Button: "Book Now" (placeholder behavior)
if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
        updateHeadingText("Booking coming next - great choice")
    });
}

// 5) Call Button: try to use the phone number in the footer
if (callBtn) {
    callBtn.addEventListener("click", () => {
        // If you later set phoneLink href to tel; this will work perfectly.
        // For now, this is a beginner-friendly placeholder.
        if (phoneLink) {
            updateHeadingText("Call us at" + phoneLink.textContent);
        } else {
            updateHeadingText("Call feature coming next!");
        }
    });
}
// 6) Modals Button open and close
if (featureGrid) {
    featureGrid.addEventListener ("click", (event) => { /* since featureGrid is the target for the listener we specify with .closest(".
    service-details-btn") so only clicking the btn with the class in the parentheses of the closest() will trigger the modal to open */
        const clickedButton = event.target.closest(".service-details-btn");
        if (!clickedButton) return;
        const serviceId = clickedButton.dataset.serviceId; // All dataset values are strings, no matter what's in the HTML
        openServiceModal (serviceId);
    }); // dataset is a built in property every DOM element has, .dataset accesses the attributes of an element
}
if (serviceModalClose) {
    serviceModalClose.addEventListener("click", closeServiceModal);
} // listens for a click on the btn with the serviceModal id to close the modal
if (serviceModalOverlay) {
    serviceModalOverlay.addEventListener("click", closeServiceModal); /* clicking anywhere outside of the modal will call the
    closeServiceModal() function. Because the css stretches the overlay across the entire scree. See the service-modal class notes */
}
document.addEventListener("keydown", (event) => { // keydown is also triggered by the esc on keyboard
    if (event.key === "Escape") { // specifying that the only key(outside of a click) to close the modal is the esc key on keyboard
        closeServiceModal();
    }
});
// 7) Changes header behavior on scroll
window.addEventListener("scroll", handleHeaderOnScroll);
// Function calls
// renderFeatures();
// renderFeaturesMap();
renderNavigation();
handleHeaderOnScroll(); // runs once on page load in case the user refreshes mid scroll
renderServices();
renderHours(); 
renderContactInfo();
checkIfOpen();