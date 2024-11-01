document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.box');

  const checkVisibility = () => {
    const windowHeight = window.innerHeight;

    boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < windowHeight * 0.75) {
        box.classList.add('show');
      } else {
        box.classList.remove('show');
      }
    });
  };

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); 
});
