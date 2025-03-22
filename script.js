document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');

    slides.forEach(slide => {
        slide.addEventListener('click', function() {
            const profileId = slide.id;
            window.location.href = `${profileId}.html`;
        });
    });

    document.addEventListener('scroll', function(event) {
        slides.forEach(slide => {
            const rect = slide.getBoundingClientRect();
            if (rect.left >= 0 && rect.right <= window.innerWidth) {
                slide.style.transform = 'scale(1.1)';
            } else {
                slide.style.transform = 'scale(0.9)';
            }
        });
    });
});
