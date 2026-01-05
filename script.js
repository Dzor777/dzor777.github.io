document.addEventListener('DOMContentLoaded', () => {
    const triggers = document.querySelectorAll('.email-trigger');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            // Find the specific dropdown for this button
            const wrapper = trigger.closest('.email-wrapper');
            const options = wrapper.querySelector('.email-options');

            // Optional: Close any other open dropdowns
            document.querySelectorAll('.email-options').forEach(opt => {
                if (opt !== options) opt.classList.remove('active');
            });

            options.classList.toggle('active');
        });
    });

    // Close all dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.email-wrapper')) {
            document.querySelectorAll('.email-options').forEach(opt => {
                opt.classList.remove('active');
            });
        }
    });
});
