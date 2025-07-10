// Set theme on page load based on saved setting or system preference
(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
})();

// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const moonButton = document.getElementById('themeToggle');
    const navCollapse = document.getElementById('mainNav');

    if (moonButton && navCollapse) {
        // Reposition moon button depending on screen size or nav state
        function applyMoonPosition() {
            moonButton.style.position = 'absolute';
            moonButton.style.right = '12px';

            if (window.innerWidth >= 576) {
                moonButton.style.top = '15%';
            } else {
                moonButton.style.top = '0';
            }
        }

        navCollapse.addEventListener('shown.bs.collapse', applyMoonPosition);
        navCollapse.addEventListener('hidden.bs.collapse', applyMoonPosition);

        const mq = window.matchMedia("(min-width: 576px)");
        mq.addEventListener("change", applyMoonPosition);

        applyMoonPosition();
    }

    // Theme toggle button
    if (moonButton) {
        moonButton.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
        });
    }
});
