// ...existing code...
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('onebtn');
    const nav = document.querySelector('.navlinks');

    if (btn && nav) {
        btn.addEventListener('click', function (e) {
            nav.classList.toggle('open');
            document.body.classList.toggle('nav-open');
        });

        // close nav when clicking outside
        document.addEventListener('click', function (e) {
            if (!nav.classList.contains('open')) return;
            if (btn.contains(e.target) || nav.contains(e.target)) return;
            nav.classList.remove('open');
            document.body.classList.remove('nav-open');
            // also close any open dropdowns
            document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
        });
    }

    // Enable click-to-toggle for dropdowns on mobile
    document.querySelectorAll('.dropdown').forEach(function (dropdown) {
        // find the first link inside the dropdown (the Shop trigger)
        const trigger = dropdown.querySelector('a');
        if (!trigger) return;

        trigger.addEventListener('click', function (e) {
            // only intercept on small screens (mobile)
            if (window.matchMedia('(max-width: 768px)').matches) {
                e.preventDefault();   // prevent jump/navigation
                e.stopPropagation();  // avoid document click closing it immediately
                // toggle this dropdown
                dropdown.classList.toggle('open');
                // close others
                document.querySelectorAll('.dropdown.open').forEach(d => {
                    if (d !== dropdown) d.classList.remove('open');
                });
            }
        });
    });
});
// ...existing code...