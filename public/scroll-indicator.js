document.addEventListener('DOMContentLoaded', () => {
    const skillsTableWrapper = document.getElementById('skillsTableWrapper');
    const gradientOverlay = document.getElementById('gradientOverlay');
    const arrowIndicator = document.getElementById('arrowIndicator');

    const checkScroll = () => {
        const maxScrollLeft = skillsTableWrapper.scrollWidth - skillsTableWrapper.clientWidth;

        if (skillsTableWrapper.scrollLeft <= 10) {
            // Near the start
            gradientOverlay.style.display = 'block';
            arrowIndicator.style.display = 'block';
        } else if (skillsTableWrapper.scrollLeft >= maxScrollLeft - 10) {
            // Near the end
            gradientOverlay.style.display = 'none';
            arrowIndicator.style.display = 'none';
        } else {
            // In the middle
            gradientOverlay.style.display = 'block';
            arrowIndicator.style.display = 'block';
        }
    };

    checkScroll();
    skillsTableWrapper.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    return () => {
        skillsTableWrapper.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
    };
});
