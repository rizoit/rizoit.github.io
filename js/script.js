// Smooth scrolling for navigation links
document.querySelectorAll('#navbar a[href^="#"], #header .logo a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Calculate offset for sticky navbar if necessary
            const navbarHeight = document.getElementById('navbar').offsetHeight;
            // Only offset if scrolling to sections below the hero
            let elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            let offsetPosition = elementPosition - (targetId === '#hero' || targetId === '#header' ? 0 : navbarHeight);


            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Optional: Active link highlighting on scroll (more complex, can be added if desired)
// This would involve checking scroll position and updating the 'current' class on nav links.
// For simplicity, this is omitted but can be a future enhancement.

// Optional: Basic mobile navigation toggle (if a hamburger menu was implemented)
// This current design uses a stacked list on mobile, so a toggle isn't strictly needed
// unless you want to hide/show the entire nav list.