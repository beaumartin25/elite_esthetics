/* =============================================================
   ELITE ESTHETICS ACADEMY — SHARED WEB COMPONENTS
   Nav and footer defined once here; every page uses
   <site-nav> and <site-footer> instead of duplicating HTML.

   Pages at root:        <site-nav></site-nav>
   Pages in subfolders:  <site-nav base="../"></site-nav>
   ============================================================= */

class SiteNav extends HTMLElement {
  connectedCallback() {
    const b = this.getAttribute('base') || '';
    this.innerHTML = `
      <nav class="site-nav" aria-label="Main navigation">
        <div class="site-nav__inner">
          <a href="${b}index.html" class="site-nav__logo">
            <img
              src="${b}assets/images/logo-mark.png"
              alt="Elite Esthetics Academy"
              class="site-nav__logo-mark"
            />
            <span class="site-nav__logo-text">
              Elite Esthetics Academy
              <span>Draper, Utah</span>
            </span>
          </a>

          <ul class="site-nav__links" role="list">
            <li><a href="${b}programs.html">Programs</a></li>
            <li class="site-nav__dropdown">
              <a href="${b}about.html" class="site-nav__dropdown-toggle">
                About
                <svg class="site-nav__chevron" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <ul class="site-nav__submenu" role="list">
                <li><a href="${b}about.html">Our Story</a></li>
                <li><a href="${b}team.html">Meet the Team</a></li>
              </ul>
            </li>
            <li><a href="${b}student-clinic.html">Student Clinic</a></li>
            <li><a href="${b}financial-aid.html">Financial Aid</a></li>
            <li><a href="${b}faq.html">FAQ</a></li>
            <li><a href="${b}contact.html">Contact</a></li>
          </ul>

          <a href="${b}book-a-tour.html" class="btn btn--gold btn--sm">Book a Free Tour</a>
        </div>
      </nav>
    `;

    // Mark the current page link as active
    const page = window.location.pathname.split('/').pop() || 'index.html';
    this.querySelectorAll('.site-nav__links a').forEach(link => {
      const href = link.getAttribute('href').replace(b, '');
      if (href === page) link.setAttribute('aria-current', 'page');
    });
  }
}
customElements.define('site-nav', SiteNav);


class SiteFooter extends HTMLElement {
  connectedCallback() {
    const b = this.getAttribute('base') || '';
    this.innerHTML = `
      <footer class="site-footer" role="contentinfo">
        <div class="site-footer__grid">

          <div>
            <div class="footer-brand__name">Elite Esthetics Academy</div>
            <div class="footer-brand__tag">Draper, Utah</div>
            <p class="footer-brand__desc">
              A luxury esthetics education built for the next generation of
              skincare professionals. Real equipment. Real mentorship. A real career.
            </p>
            <div class="footer-info">
              <a href="tel:4354857546">(435) 485-7546</a>
              <a href="mailto:info@eliteestheticsa.com">info@eliteestheticsa.com</a>
              <p>66 E Wadsworth Park Dr, Suite 140<br>Draper, Utah 84020</p>
            </div>
          </div>

          <div class="footer-col">
            <div class="footer-col__heading">Programs</div>
            <ul role="list">
              <li><a href="${b}programs/master-1200.html">Master Esthetics 1200hr</a></li>
              <li><a href="${b}programs/master-675.html">Master Esthetics 675hr</a></li>
              <li><a href="${b}programs/lash-brow.html">Lash &amp; Brow</a></li>
              <li><a href="${b}programs/instructor.html">Instructor Training</a></li>
              <li><a href="${b}assets/docs/program-guide.pdf">Program Guide (PDF)</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <div class="footer-col__heading">Admissions</div>
            <ul role="list">
              <li><a href="${b}book-a-tour.html">Book a Free Tour</a></li>
              <li><a href="${b}enroll.html">Apply &amp; Enroll</a></li>
              <li><a href="${b}financial-aid.html">Financial Aid</a></li>
              <li><a href="${b}faq.html">FAQ</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <div class="footer-col__heading">About</div>
            <ul role="list">
              <li><a href="${b}about.html">Our Story</a></li>
              <li><a href="${b}team.html">Our Team</a></li>
              <li><a href="${b}student-clinic.html">Student Clinic</a></li>
              <li><a href="${b}career-outcomes.html">Career Outcomes</a></li>
              <li><a href="${b}contact.html">Contact</a></li>
            </ul>
          </div>

        </div>

        <div class="site-footer__bottom">
          <p>&copy; 2026 Elite Esthetics Academy. All rights reserved.</p>
          <p>NACCAS Accredited &middot; Licensed by the Utah Division of Occupational and Professional Licensing</p>
        </div>
      </footer>

      <div class="sticky-cta" role="navigation" aria-label="Mobile quick actions">
        <div class="sticky-cta__grid">
          <a href="tel:4354857546" class="sticky-cta__btn sticky-cta__btn--call">Call Us</a>
          <a href="${b}book-a-tour.html" class="sticky-cta__btn sticky-cta__btn--tour">Book a Tour</a>
        </div>
      </div>
    `;
  }
}
customElements.define('site-footer', SiteFooter);
