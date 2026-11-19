(() => {
  const cfg = window.WICHOS_CONFIG || {};
  const phone = (cfg.whatsappNumber || '').replace(/\D/g, '');
  const baseMessage = cfg.whatsappMessage || "Hola, quiero conocer más sobre Wicho's Sport.";
  const makeWa = (message) => phone.length >= 11 ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}` : '#contacto';

  document.querySelectorAll('[data-wa]').forEach(link => {
    link.href = makeWa(baseMessage);
    if (phone.length >= 11) { link.target = '_blank'; link.rel = 'noopener'; }
    else link.addEventListener('click', e => { e.preventDefault(); alert('El número de WhatsApp aún no está configurado.'); });
  });

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open'); toggle?.setAttribute('aria-expanded', 'false');
  }));

  const dialog = document.getElementById('productDialog');
  const dialogImage = document.getElementById('dialogImage');
  const dialogTitle = document.getElementById('dialogTitle');
  const dialogWhatsapp = document.getElementById('dialogWhatsapp');
  document.querySelectorAll('.product-card').forEach(card => card.addEventListener('click', () => {
    const product = card.dataset.product || 'este modelo';
    dialogTitle.textContent = product;
    dialogImage.src = card.dataset.image;
    dialogImage.alt = product;
    dialogWhatsapp.href = makeWa(`Hola, quisiera información sobre ${product} de Wicho's Sport. ¿Me pueden compartir materiales, tallas y disponibilidad?`);
    dialog.showModal();
  }));
  document.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  document.getElementById('year').textContent = new Date().getFullYear();

  // Aparición discreta de elementos al entrar en pantalla.
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), {threshold: .12});
    document.querySelectorAll('.timeline article,.product-card,.craft-photo,.values-grid article').forEach(el => observer.observe(el));
  }
})();