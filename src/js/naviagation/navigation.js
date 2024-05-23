function navigation() {
  const listenContainer = document.querySelector('#navigation');

  listenContainer.addEventListener(
    'click',
    function (event) {
      const target = event.target.closest('[data-nav-link]');
      if (!target) return;

      const link = target.closest('a');
      if (!link) return;

      const links = listenContainer.querySelectorAll('a[data-nav-link]');
      links.forEach(item => {
        item.classList.remove('active');
      });
      link.classList.add('active');
    },
    true
  );
}
navigation();
