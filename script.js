document.addEventListener('DOMContentLoaded', function () {
    // 1. WhatsApp Contact Form Handler
    const whatsappForm = document.getElementById('whatsappForm');
    
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;

            // Target phone number for Madar Tech WhatsApp
            const madarPhone = "970590000000"; // يمكن استبداله برقم المؤسسة الصحيح

            const fullText = `مرحباً مدار تك، أود التواصل معكم.%0A%0A` +
                             `*الاسم:* ${encodeURIComponent(name)}%0A` +
                             `*البريد الإلكتروني:* ${encodeURIComponent(email)}%0A` +
                             `*رقم الهاتف:* ${encodeURIComponent(phone)}%0A` +
                             `*الرسالة:* ${encodeURIComponent(message)}`;

            const whatsappUrl = `https://wa.me/${madarPhone}?text=${fullText}`;
            
            window.open(whatsappUrl, '_blank');
        });
    }

    // 2. Smooth Scrolling & Active State
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Auto collapse mobile navbar on click
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
});