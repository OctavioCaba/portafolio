const themeToggle = document.getElementById('theme-toggle');
const themeIconToggle = themeToggle.childNodes[1].classList;
const mailBtn = document.querySelectorAll('#mail-btn');

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('checked')) {
        document.body.setAttribute('data-theme', 'dark');
        iconChanger();
    }

    themeToggle.addEventListener('click', () => {
        if (themeIconToggle.contains('fa-sun')) {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('checked', true);
        } else {
            document.body.removeAttribute('data-theme', 'dark');
            localStorage.removeItem('checked');
        }
        iconChanger();
    });

    for (let i = 0; i < mailBtn.length; i++) {
        mailBtn[i].addEventListener('click', () => {
            let text = mailBtn[i].previousElementSibling.childNodes[3].textContent;
            copyToClipboard(text);
            alert('Correo electrónico copiado');
        });
    }
});

const iconChanger = () => {
    if (themeIconToggle.contains('fa-sun')) {
        themeIconToggle.remove('fa-sun');
        themeIconToggle.add('fa-moon');
    } else {
        themeIconToggle.remove('fa-moon');
        themeIconToggle.add('fa-sun');
    }
}

const copyToClipboard = text => {
    const listener = e => {
        e.preventDefault();
        e.clipboardData.setData('text/plain', text);
    };
    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
}