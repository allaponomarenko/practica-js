document.addEventListener("DOMContentLoaded", function() {
    const decorBg = document.querySelector('.decor-bg');
    
    for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.width = `${Math.random() * 3}px`;
      star.style.height = star.style.width;
      decorBg.appendChild(star);
    }
  });






