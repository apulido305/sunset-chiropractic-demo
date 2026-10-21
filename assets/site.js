// Shared behaviour: mobile menu, demo form handling, blog search.
(function () {
  var es = document.documentElement.lang === 'es';

  // Mobile menu toggle
  var btn = document.getElementById('menu-button');
  var menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    var setOpen = function (open) {
      btn.setAttribute('aria-expanded', String(open));
      menu.hidden = !open;
      btn.querySelector('[data-icon]').textContent = open ? 'close' : 'menu';
    };
    btn.addEventListener('click', function () { setOpen(menu.hidden); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.hidden) { setOpen(false); btn.focus(); }
    });
  }

  // Demo forms: nothing is sent anywhere. Replace with a HIPAA-eligible endpoint before launch (see README).
  document.querySelectorAll('form[data-demo-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = form.querySelector('[role="status"]');
      if (status) {
        status.textContent = form.getAttribute('data-demo-message') || (es
          ? 'Gracias. Este es un formulario de demostración: no se envió ningún dato. Para agendar, llame al (305) 275-7474.'
          : 'Thank you. This is a demo form, so nothing was sent. To book, please call (305) 275-7474.');
        status.hidden = false;
      }
    });
  });

  // Blog listing: search filter + "show more"
  var list = document.getElementById('post-list');
  if (list) {
    var cards = Array.prototype.slice.call(list.children);
    var search = document.getElementById('post-search');
    var more = document.getElementById('show-more');
    var count = document.getElementById('post-count');
    var PAGE = 24, shown = PAGE;
    var render = function () {
      var q = (search.value || '').trim().toLowerCase();
      var matches = cards.filter(function (c) { return !q || c.getAttribute('data-search').indexOf(q) !== -1; });
      cards.forEach(function (c) { c.hidden = true; });
      matches.slice(0, q ? matches.length : shown).forEach(function (c) { c.hidden = false; });
      more.hidden = !!q || shown >= matches.length;
      count.textContent = es
        ? matches.length + (matches.length === 1 ? ' artículo' : ' artículos')
        : matches.length + (matches.length === 1 ? ' article' : ' articles');
    };
    search.addEventListener('input', render);
    more.addEventListener('click', function () {
      var first = shown; shown += PAGE; render();
      var next = cards[first] && cards[first].querySelector('a');
      if (next) next.focus();
    });
    render();
  }
})();
