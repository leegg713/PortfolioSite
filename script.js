document.addEventListener('DOMContentLoaded', function () {
  const links = ['about-link', 'skills-link', 'port-link'];
  links.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => el.style.opacity = '1', 100);
    }
  });
});
