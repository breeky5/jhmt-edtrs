// Helper function to load HTML content into a placeholder
function loadHTMLContent(filename, placeholderId, callback) {
    fetch(filename)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${filename}: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const placeholder = document.getElementById(placeholderId);
            if (placeholder) {
                placeholder.outerHTML = data;
                if (callback) {
                    callback();
                }
            }
        })
        .catch(error => console.error(`Error loading ${filename}:`, error));
}

// Set active navigation link based on current page
function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navMap = {
        'index.html': 'nav-home',
        '': 'nav-home',
        'terms-of-service.html': 'nav-terms',
        'privacy-policy.html': 'nav-privacy'
    };
    
    const navId = navMap[currentPage];
    if (navId) {
        const navLink = document.getElementById(navId);
        if (navLink) {
            navLink.classList.add('active');
        }
    }
}

// Load common header and footer
document.addEventListener('DOMContentLoaded', function() {
    // Load header with callback to set active navigation
    loadHTMLContent('header.html', 'header-placeholder', setActiveNavigation);
    
    // Load footer
    loadHTMLContent('footer.html', 'footer-placeholder');
});
