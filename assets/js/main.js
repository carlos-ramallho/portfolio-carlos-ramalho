/* =========================================================
   Portfólio — interações
   ========================================================= */
(() => {
  "use strict";
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* ---------- Header: estado ao rolar + barra de progresso ---------- */
  const header = $(".site-header");
  const progress = $(".progress");
  const onScroll = () => {
    const y = window.scrollY;
    header && header.classList.toggle("scrolled", y > 20);
    if (progress) {
      const h = document.documentElement.scrollHeight - innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    }
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Menu mobile ---------- */
  const toggle = $(".menu-toggle");
  toggle && toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", open);
  });
  $$(".nav a").forEach(a => a.addEventListener("click", () => document.body.classList.remove("menu-open")));

  /* ---------- Link ativo conforme a seção ---------- */
  const navLinks = $$('.nav a[href^="#"]');
  if (navLinks.length) {
    const map = new Map(navLinks.map(a => [a.getAttribute("href").slice(1), a]));
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navLinks.forEach(a => a.classList.remove("active"));
          const link = map.get(e.target.id);
          link && link.classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    map.forEach((_, id) => { const s = document.getElementById(id); s && io.observe(s); });
  }

  /* ---------- Revelar ao rolar ---------- */
  const revealIO = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); revealIO.unobserve(e.target); } });
  }, { threshold: 0.12 });
  const observeReveal = root => $$(".reveal", root).forEach(el => revealIO.observe(el));
  observeReveal(document);

  /* ---------- Contadores ---------- */
  const countIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, end = parseFloat(el.dataset.count), dec = (el.dataset.count.split(".")[1] || "").length;
      const t0 = performance.now(), dur = 1400;
      const tick = t => {
        const p = Math.min((t - t0) / dur, 1), v = end * (1 - Math.pow(1 - p, 3));
        el.textContent = v.toLocaleString("pt-BR", { minimumFractionDigits: dec, maximumFractionDigits: dec });
        p < 1 && requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      countIO.unobserve(el);
    });
  }, { threshold: 0.6 });
  $$("[data-count]").forEach(el => countIO.observe(el));

  /* ---------- Hero: mira + coordenadas estilo CAD ---------- */
  const hero = $(".hero");
  if (hero) {
    const cross = $(".crosshair", hero), rx = $("#cad-x"), ry = $("#cad-y");
    hero.addEventListener("mousemove", e => {
      const r = hero.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      cross && (cross.style.setProperty("--cx", x + "px"), cross.style.setProperty("--cy", y + "px"));
      rx && (rx.textContent = (x / 10).toFixed(2));
      ry && (ry.textContent = ((r.height - y) / 10).toFixed(2));
    });
  }

  /* ---------- Projetos: renderização + filtros ---------- */
  const grid = $("[data-projects]");
  const data = grid ? (window[grid.dataset.projects] || []) : [];
  const arrow = '<svg viewBox="0 0 24 24" width="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M8 7h9v9"/></svg>';

  if (grid) {
    grid.innerHTML = data.map((p, i) => `
      <button class="project reveal ${p.featured ? "featured" : ""} ${p.wide ? "wide" : ""}" data-cat="${p.cat}" data-i="${i}" style="--d:${(i % 3) * 0.08}s" aria-label="Abrir projeto ${p.title}">
        <div class="project-media ${p.contain ? "contain" : ""}">
          <img src="${p.cover}" alt="${p.title}" loading="lazy">
          <span class="idx">${String(i + 1).padStart(2, "0")} / ${String(data.length).padStart(2, "0")}</span>
        </div>
        <span class="open">${arrow}</span>
        <div class="project-body">
          <span class="project-cat">${p.cat}</span>
          <h3>${p.title}</h3>
          <span class="project-loc">${p.place}</span>
          ${p.stats ? `<div class="project-stats">${p.stats.map(s => `<span><b>${s[0]}</b> ${s[1]}</span>`).join("")}</div>` : ""}
        </div>
      </button>`).join("");
    observeReveal(grid);

    // filtros
    const fbox = $("[data-filters]");
    if (fbox) {
      const cats = [...new Set(data.map(p => p.cat))];
      fbox.innerHTML = [`<button class="filter active" data-f="*">Todos<span class="count">${data.length}</span></button>`]
        .concat(cats.map(c => `<button class="filter" data-f="${c}">${c}<span class="count">${data.filter(p => p.cat === c).length}</span></button>`)).join("");
      fbox.addEventListener("click", e => {
        const b = e.target.closest(".filter"); if (!b) return;
        $$(".filter", fbox).forEach(x => x.classList.toggle("active", x === b));
        const f = b.dataset.f;
        $$(".project", grid).forEach(card => card.classList.toggle("hide", f !== "*" && card.dataset.cat !== f));
      });
    }

    grid.addEventListener("click", e => {
      const card = e.target.closest(".project"); if (!card) return;
      openModal(data[+card.dataset.i]);
    });
  }

  /* ---------- Modal de projeto com galeria ---------- */
  const modal = $("#modal");
  let gal = [], gi = 0, lastFocus = null;

  function openModal(p) {
    if (!modal) return;
    lastFocus = document.activeElement;
    gal = p.images || [{ src: p.cover, cap: p.title }];
    gi = 0;
    $(".modal-info", modal).innerHTML = `
      <span class="project-cat">${p.cat}${p.year ? " · " + p.year : ""}</span>
      <h2>${p.title}</h2>
      <p class="mono" style="font-size:13px">${p.place}</p>
      <p>${p.desc || ""}</p>
      ${p.specs ? `<table class="spec">${p.specs.map(s => `<tr><td>${s[0]}</td><td>${s[1]}</td></tr>`).join("")}</table>` : ""}
      <div class="modal-actions">
        ${p.pdf ? `<a class="btn btn-primary" href="${p.pdf}" target="_blank" rel="noopener">Ver prancha (PDF)</a>` : ""}
        <button class="btn" data-close>Fechar</button>
      </div>`;
    $(".modal-thumbs", modal).innerHTML = gal.map((g, i) => `<button data-g="${i}" aria-label="Imagem ${i + 1}"><img src="${g.src}" alt=""></button>`).join("");
    $(".modal-thumbs", modal).style.display = gal.length > 1 ? "flex" : "none";
    $$(".modal-nav", modal).forEach(b => b.style.display = gal.length > 1 ? "grid" : "none");
    show(0);
    modal.classList.add("open");
    document.body.classList.add("no-scroll");
    $(".modal-close", modal).focus();
  }
  function show(i) {
    gi = (i + gal.length) % gal.length;
    const stage = $(".modal-stage", modal);
    stage.classList.remove("zoom");
    stage.querySelector("img").src = gal[gi].src;
    stage.querySelector("img").alt = gal[gi].cap || "";
    $(".modal-caption", modal).textContent = gal[gi].cap || "";
    $(".modal-counter", modal).textContent = `${String(gi + 1).padStart(2, "0")} / ${String(gal.length).padStart(2, "0")}`;
    $$(".modal-thumbs button", modal).forEach((b, k) => b.classList.toggle("active", k === gi));
  }
  function closeModal() {
    modal.classList.remove("open");
    document.body.classList.remove("no-scroll");
    lastFocus && lastFocus.focus();
  }
  if (modal) {
    modal.addEventListener("click", e => {
      if (e.target.closest("[data-close]") || e.target.classList.contains("modal-backdrop")) return closeModal();
      const t = e.target.closest("[data-g]"); if (t) return show(+t.dataset.g);
      if (e.target.closest(".modal-nav.prev")) return show(gi - 1);
      if (e.target.closest(".modal-nav.next")) return show(gi + 1);
      if (e.target.closest(".modal-stage")) $(".modal-stage", modal).classList.toggle("zoom");
    });
    addEventListener("keydown", e => {
      if (!modal.classList.contains("open")) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") show(gi + 1);
      if (e.key === "ArrowLeft") show(gi - 1);
    });
  }

  /* ---------- Formulário de contato (WhatsApp ou e-mail, sem backend) ---------- */
  const form = $("#contact-form");
  if (form) {
    const build = () => {
      const f = Object.fromEntries(new FormData(form));
      return `Olá! Meu nome é ${f.nome || "-"}${f.empresa ? " (" + f.empresa + ")" : ""}.\nAssunto: ${f.assunto || "-"}\n\n${f.mensagem || ""}\n\nContato: ${f.email || "-"}`;
    };
    form.addEventListener("submit", e => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const via = e.submitter && e.submitter.dataset.via;
      const msg = build();
      if (via === "email") {
        location.href = `mailto:${form.dataset.email}?subject=${encodeURIComponent("Contato pelo portfólio — " + (new FormData(form).get("assunto") || ""))}&body=${encodeURIComponent(msg)}`;
      } else {
        open(`https://wa.me/${form.dataset.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
      }
    });
  }

  /* ---------- Ano no rodapé ---------- */
  $$("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
})();
