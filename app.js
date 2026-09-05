const switcher = document.querySelector('#theme-toggle');

switcher.addEventListener('click', function () {
    const isDark = document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme', !isDark);

    this.textContent = isDark ? 'Light' : 'Dark';
});