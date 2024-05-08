document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('nav ul');

    // Function to toggle navigation menu
    function toggleMenu() {
        navMenu.classList.toggle('show');
    }

    // Event listener for menu icon click
    menuIcon.addEventListener('click', toggleMenu);

    // Show menu icon when the page is loaded on smaller screens
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
        menuIcon.style.display = 'block';
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update footer with current year
    const year = new Date().getFullYear();
    document.querySelector('footer p').textContent += ` ${year}`;

    // Mouseover and mouseout effects for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#ff6f61';
        });

        link.addEventListener('mouseout', function() {
            this.style.color = '#333';
        });
    });
});
