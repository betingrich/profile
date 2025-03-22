document.addEventListener('scroll', function(event) {
    const profiles = document.querySelectorAll('.profile');
    profiles.forEach(profile => {
        const rect = profile.getBoundingClientRect();
        if (rect.left >= 0 && rect.right <= window.innerWidth) {
            profile.style.opacity = '1';
        } else {
            profile.style.opacity = '0.5';
        }
    });
});
