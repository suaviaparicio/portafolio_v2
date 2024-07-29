document.addEventListener('DOMContentLoaded', () => {
    const skillsTableWrapper = document.getElementById('skillsTableWrapper');
    const gradientOverlay = document.getElementById('gradientOverlay');
    const arrowIndicator = document.getElementById('arrowIndicator');
    let isScrolling;

    const checkScroll = () => {
        const maxScrollLeft = skillsTableWrapper.scrollWidth - skillsTableWrapper.clientWidth;

        // Clear our timeout throughout the scroll
        window.clearTimeout(isScrolling);

        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(() => {
            if (skillsTableWrapper.scrollLeft <= 10) {
                gradientOverlay.style.display = 'block';
                arrowIndicator.style.display = 'block';
            } else if (skillsTableWrapper.scrollLeft >= maxScrollLeft - 2) {
                gradientOverlay.style.display = 'none';
                arrowIndicator.style.display = 'none';
            }
        }, 10); // Timeout in milliseconds (e.g., 100ms)

        // Immediately hide arrow and gradient overlay when scrolling starts
        if (skillsTableWrapper.scrollLeft > 10) {
            gradientOverlay.style.display = 'none';
            arrowIndicator.style.display = 'none';
        }
    };

    skillsTableWrapper.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    return () => {
        skillsTableWrapper.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
    };
});






// document.addEventListener('DOMContentLoaded', () => {
//     const skillsTableWrapper = document.getElementById('skillsTableWrapper');
//     const gradientOverlay = document.getElementById('gradientOverlay');
//     const arrowIndicator = document.getElementById('arrowIndicator');

//     const checkScroll = () => {
//         const maxScrollLeft = skillsTableWrapper.scrollWidth - skillsTableWrapper.clientWidth;

//         if (skillsTableWrapper.scrollLeft <= 10) {

//             gradientOverlay.style.display = 'block';
//             arrowIndicator.style.display = 'block';
//         } else if (skillsTableWrapper.scrollLeft >= maxScrollLeft - 10) {

//             gradientOverlay.style.display = 'none';
//             arrowIndicator.style.display = 'none';
//         }
//     };

//     checkScroll();
//     skillsTableWrapper.addEventListener('scroll', checkScroll);
//     window.addEventListener('resize', checkScroll);

//     return () => {
//         skillsTableWrapper.removeEventListener('scroll', checkScroll);
//         window.removeEventListener('resize', checkScroll);
//     };
// });
