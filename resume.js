document.addEventListener('DOMContentLoaded', function () {
    const collapsibleHeaders = document.querySelectorAll('.collapsible-header');

    collapsibleHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;

            if (content.classList.contains('open')) {
                content.classList.remove('open');
            } else {
                content.classList.add('open');
            }
        });
    });
});
