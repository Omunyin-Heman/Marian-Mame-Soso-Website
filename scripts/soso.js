// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling (dummy example)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Dummy AJAX submission (replace with actual form handling)
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log('Form submitted with data:', data);
    alert('Form submitted successfully!');
    this.reset();
});
