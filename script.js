let faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {

    let button = faq.children[0].children[1];

    button.addEventListener('click', (e) => {
        faq.classList.toggle("active");

    })

});