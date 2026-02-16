(function() {
    function injectNav() {
        // Prevent double injection
        if (document.getElementById('platform-nav-container')) return;

        const navHTML = `
            <nav class="platform-nav">
                <a href="/index.html" class="platform-brand">
                    <span>KodNest</span>
                </a>
                <div class="platform-links">
                    <a href="/apps/kodnest/index.html" class="platform-link">Job Tracker</a>
                    <a href="/apps/resume-builder/index.html" class="platform-link">Resume</a>
                    <a href="/apps/placement-platform/index.html" class="platform-link">Placement</a>
                </div>
            </nav>
        `;

        const container = document.createElement('div');
        container.id = 'platform-nav-container';
        container.innerHTML = navHTML;

        // Insert at the very top of body
        document.body.insertBefore(container, document.body.firstChild);

        // Highlight current app
        const currentPath = window.location.pathname;
        const links = container.querySelectorAll('.platform-link');
        links.forEach(link => {
            if (currentPath.includes(link.getAttribute('href'))) {
                link.classList.add('active');
            }
        });
    }

    // Inject styles if not present (simplified version of shared.css just for nav)
    function injectStyles() {
        const styleId = 'platform-nav-styles';
        if (document.getElementById(styleId)) return;

        const css = `
            .platform-nav {
                background: #FFFFFF;
                border-bottom: 1px solid #D4D2CC;
                padding: 10px 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-family: 'Inter', sans-serif;
                position: relative;
                z-index: 10000;
            }
            .platform-brand {
                font-family: 'Crimson Pro', serif;
                font-weight: 600;
                font-size: 18px;
                text-decoration: none;
                color: #111;
            }
            .platform-links {
                display: flex;
                gap: 20px;
            }
            .platform-link {
                text-decoration: none;
                color: #111;
                font-size: 13px;
                opacity: 0.6;
                transition: opacity 0.2s;
            }
            .platform-link:hover, .platform-link.active {
                opacity: 1;
                font-weight: 600;
            }
        `;

        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = css;
        document.head.appendChild(style);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            injectStyles();
            injectNav();
        });
    } else {
        injectStyles();
        injectNav();
    }
})();
