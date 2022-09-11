/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== FEATURES ACCORDION ===============*/

const accordionItems = document.querySelectorAll(".features__accordion-item");

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".features__accordion-header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".features__accordion-content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

/*=============== FAQ ACCORDION ===============*/

const accordionFaqItems = document.querySelectorAll(".faq__accordion-item");

accordionFaqItems.forEach((item) => {
  const accordionHeader = item.querySelector(".faq__accordion-header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleFaqItem(item);

    if (openItem && openItem !== item) {
      toggleFaqItem(openItem);
    }
  });
});

const toggleFaqItem = (item) => {
  const accordionContent = item.querySelector(".faq__accordion-content");
  const arrow = item.querySelector(".bx-chevron-down");
  console.log(arrow);
  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    arrow.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    arrow.style.transform = "rotateX(180deg)";
    item.classList.add("accordion-open");
  }
};

/*=============== INPUT JS ===============*/

const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message"),
  contactUser = document.getElementById("contact-user");

const sendEmail = (e) => {
  e.preventDefault();

  if (contactUser.value === "") {
    contactMessage.classList.add("color-red");
    contactUser.classList.add("contact__form-inputred");

    contactMessage.textContent = "Please check your email ☝️";

    setTimeout(() => {
      contactMessage.textContent = "";
      contactMessage.classList.remove("color-red");
      contactUser.classList.remove("contact__form-inputred");
    }, 3000);
  }
};

contactForm.addEventListener("submit", sendEmail);
