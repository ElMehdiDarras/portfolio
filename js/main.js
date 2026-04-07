/* ============================================
   ELMEHDI DARRAS — MAIN JS
   ============================================ */

/* --- Trilingual System --- */
const SUPPORTED_LANGS = ['en', 'fr', 'ar'];
const RTL_LANGS = ['ar'];

var CV_URLS = {
  en: 'media/resume/resume_english.pdf',
  fr: 'media/resume/resume_french.pdf',
  ar: 'media/resume/resume_arabic.pdf'
};

function applyLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = 'en';
  document.documentElement.lang = lang;
  document.documentElement.dir = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-' + lang + ']').forEach(function(el) {
    el.textContent = el.getAttribute('data-' + lang);
  });
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  var cvBtn = document.getElementById('cvBtn');
  if (cvBtn) {
    cvBtn.href = CV_URLS[lang] || CV_URLS['en'];
  }
  try { localStorage.setItem('lang', lang); } catch(e) {}
}

document.addEventListener('DOMContentLoaded', function() {
  /* Restore saved language */
  var saved;
  try { saved = localStorage.getItem('lang'); } catch(e) {}
  applyLang(saved || 'en');

  /* Language buttons */
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      applyLang(btn.dataset.lang);
    });
  });

  /* --- Mobile Menu --- */
  var hamburger = document.querySelector('.hamburger');
  var mobileMenu = document.getElementById('mobileMenu');
  var mobileClose = document.getElementById('mobileClose');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function() {
      mobileMenu.classList.add('open');
      mobileMenu.setAttribute('aria-hidden', 'false');
      hamburger.setAttribute('aria-expanded', 'true');
    });
    if (mobileClose) {
      mobileClose.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        mobileMenu.setAttribute('aria-hidden', 'true');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    }
  }

});
