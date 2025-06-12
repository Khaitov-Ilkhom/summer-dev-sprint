const accordionTitles = document.querySelectorAll('.accordion-title');

accordionTitles.forEach(title => {
  title.addEventListener('click', () => {
    const content = title.nextElementSibling;
    const icon = title.querySelector('img');

    document.querySelectorAll('.accordion-content').forEach(c => {
      if (c !== content) {
        c.classList.remove('open');
        const otherIcon = c.previousElementSibling.querySelector('img');
        if (otherIcon) {otherIcon.src = './img/icon-plus.svg';}
      }
    });

    if (content.classList.contains('open')) {
      content.classList.remove('open');
      icon.src = './img/icon-plus.svg';
    } else {
      content.classList.add('open');
      icon.src = './img/icon-minus.svg';
    }
  });
});
