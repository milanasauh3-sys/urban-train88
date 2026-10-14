document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.nav-icon, .cta-journey-btn');
  const pages = document.querySelectorAll('.page');
  const themeBtn = document.getElementById('theme-toggle');
  const themeIcon = themeBtn.querySelector('.theme-icon');

  function switchPage(targetId) {
    btns.forEach(btn => {
      if (btn.classList.contains('nav-icon')) {
        btn.classList.toggle('active', btn.getAttribute('data-target') === targetId);
      }
    });
    pages.forEach(page => {
      page.classList.toggle('active', page.id === targetId);
    });
  }

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      if (target) switchPage(target);
    });
  });

  // Переключение темы
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    themeIcon.textContent = isLight ? '☀️' : '🌙';
  });
});