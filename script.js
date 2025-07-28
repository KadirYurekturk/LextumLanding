document.addEventListener('DOMContentLoaded', () => {

    // --- Dil Değiştirme Fonksiyonu ---
    const langButtons = {
        tr: document.getElementById('lang-tr'),
        en: document.getElementById('lang-en')
    };

    const allLangElements = {
        tr: document.querySelectorAll('[lang="tr"]'),
        en: document.querySelectorAll('[lang="en"]')
    };

    function switchLanguage(lang) {
        // Dil seçimi HTML tag'ine eklenir
        document.documentElement.lang = lang;

        // Butonların aktiflik durumu ayarlanır
        langButtons.tr.classList.toggle('active', lang === 'tr');
        langButtons.en.classList.toggle('active', lang === 'en');

        // İlgili dildeki elementler gösterilir, diğerleri gizlenir
        allLangElements.tr.forEach(el => el.style.display = (lang === 'tr' ? '' : 'none'));
        allLangElements.en.forEach(el => el.style.display = (lang === 'en' ? '' : 'none'));
    }

    // Butonlara event listener eklenir
    langButtons.tr.addEventListener('click', () => switchLanguage('tr'));
    langButtons.en.addEventListener('click', () => switchLanguage('en'));
    
    // Tarayıcı diline göre başlangıç dili ayarlanabilir (isteğe bağlı)
    // const userLang = navigator.language.split('-')[0];
    // if (userLang === 'en') {
    //     switchLanguage('en');
    // } else {
    //     switchLanguage('tr');
    // }
    
    // Başlangıç dili TR olarak ayarlı
    switchLanguage('tr');


    // --- Scroll Animasyonu ---
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animasyon bir kere çalışsın
            }
        });
    }, {
        threshold: 0.1 // Elementin %10'u göründüğünde çalış
    });

    revealElements.forEach(el => {
        observer.observe(el);
    });

    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Contact Form ---
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Burada form verilerini bir sunucuya gönderebilirsiniz.
        // Örnek olarak, sadece bir başarı mesajı gösteriyoruz.
        alert('Mesajınız için teşekkürler! En kısa sürede geri döneceğiz.');
        contactForm.reset();
    });

});