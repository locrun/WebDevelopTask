function navigation() {
  const listenContainer = document.querySelector('#navigation');
  const links = document.querySelectorAll('.nav-item-link');

  listenContainer.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-nav-link')) {
      links.forEach(item => {
        item.classList.remove('active');
      });
    }
    event.target.classList.add('active');
  });
}
navigation();
