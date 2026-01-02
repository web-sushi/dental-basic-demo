// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenuToggle.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = event.target.closest('.nav');
      const isClickOnToggle = event.target.closest('.mobile-menu-toggle');
      
      if (!isClickInsideNav && mobileMenu.classList.contains('active')) {
        mobileMenuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
      }
    });
  }

  // Back to Top Button
  const backToTopButton = document.querySelector('.back-to-top');
  
  if (backToTopButton) {
    // Show/hide button based on scroll position
    function toggleBackToTop() {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    }

    // Smooth scroll to top
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Listen for scroll events
    window.addEventListener('scroll', toggleBackToTop);
    
    // Check initial scroll position
    toggleBackToTop();
  }
});

console.log("Clinic Basic site loaded");
