'use strict';

// Modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// Modal function
const modalCloseFunc = function () {
  if (modal) {
    modal.classList.add('closed');
  } else {
    console.warn('Modal element not found');
  }
};

// Modal event listeners
if (modalCloseOverlay) {
  modalCloseOverlay.addEventListener('click', modalCloseFunc);
} else {
  console.warn('Modal close overlay not found');
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', modalCloseFunc);
} else {
  console.warn('Modal close button not found');
}

// Notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// Notification toast event listener
if (toastCloseBtn) {
  toastCloseBtn.addEventListener('click', function () {
    if (notificationToast) {
      notificationToast.classList.add('closed');
    } else {
      console.warn('Notification toast element not found');
    }
  });
} else {
  console.warn('Toast close button not found');
}

// Mobile menu variables
const mobileMenuOpenBtns = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenus = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtns = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

mobileMenuOpenBtns.forEach((btn, index) => {
  if (mobileMenus[index] && mobileMenuCloseBtns[index]) {
    const mobileMenuCloseFunc = function () {
      mobileMenus[index].classList.remove('active');
      if (overlay) overlay.classList.remove('active');
    };

    btn.addEventListener('click', function () {
      mobileMenus[index].classList.add('active');
      if (overlay) overlay.classList.add('active');
    });

    mobileMenuCloseBtns[index].addEventListener('click', mobileMenuCloseFunc);
    if (overlay) overlay.addEventListener('click', mobileMenuCloseFunc);
  } else {
    console.warn(`Mobile menu elements not found for index ${index}`);
  }
});

// Accordion variables
const accordionBtns = document.querySelectorAll('[data-accordion-btn]');
const accordions = document.querySelectorAll('[data-accordion]');

accordionBtns.forEach((btn, index) => {
  btn.addEventListener('click', function () {
    const isActive = this.nextElementSibling.classList.contains('active');

    accordions.forEach((accordion, i) => {
      if (isActive && index === i) return;
      if (accordion.classList.contains('active')) {
        accordion.classList.remove('active');
        accordionBtns[i].classList.remove('active');
      }
    });

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');
  });
});
