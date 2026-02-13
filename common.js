// Load common header and footer
document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) {
                headerPlaceholder.outerHTML = data;
                // Set active navigation link
                const currentPage = window.location.pathname.split('/').pop() || 'index.html';
                if (currentPage === 'index.html' || currentPage === '') {
                    const homeLink = document.getElementById('nav-home');
                    if (homeLink) homeLink.classList.add('active');
                } else if (currentPage === 'terms-of-service.html') {
                    const termsLink = document.getElementById('nav-terms');
                    if (termsLink) termsLink.classList.add('active');
                } else if (currentPage === 'privacy-policy.html') {
                    const privacyLink = document.getElementById('nav-privacy');
                    if (privacyLink) privacyLink.classList.add('active');
                }
            }
        })
        .catch(error => console.error('Error loading header:', error));

    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.outerHTML = data;
            }
        })
        .catch(error => console.error('Error loading footer:', error));
});
