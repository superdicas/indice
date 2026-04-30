class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <style>
          :root {
      --bg: #f7f7f9;
      --card: #fff;
      --accent: #0b76ef;
      --text: #222
    }

    body {
      margin: 0;
      font-family: system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", sans-serif;
      background: var(--bg);
      color: var(--text)
    }

    header {
      background: var(--accent);
      color: #fff;
      padding: 18px 20px
    }

    .container {
      max-width: 960px;
      margin: 28px auto;
      padding: 0 16px
    }

    nav a {
      color: #fff;
      text-decoration: none;
      margin-right: 14px;
      font-weight: 600
    }

    .card {
      background: var(--card);
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 6px 18px rgba(20, 20, 30, 0.06)
    }

    .hero {
      display: flex;
      align-items: center;
      gap: 18px
    }

    .hero h1 {
      margin: 0;
      font-size: 1.6rem
    }

    .links a {
      display: inline-block;
      margin-right: 10px;
      padding: 8px 12px;
      background: var(--accent);
      color: #fff;
      border-radius: 6px;
      text-decoration: none
    }

    img.responsive {
      max-width: 100%;
      height: auto;
      border-radius: 6px;
      margin-top: 12px
    }

    figcaption {
      font-family: system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", sans-serif;
      font-size: 14px;
      text-decoration-style: italic;
    }

    footer {
      color: #666;
      font-size: 0.9rem;
      margin: 24px 0;
      text-align: center
    }
    
    @media (max-width: 600px) {
      .hero {
        flex-direction: column;
        text-align: center
      }

      .hero h1 {
        font-size: 1.4rem
      }

    .contact-list {
      margin: 0;
      padding: 0;
      list-style: none;
      font-size: 1rem
    }

    .contact-list li {
      margin-bottom: 10px
    }

    .contact-list strong {
      display: inline-block;
      width: 85px
    }
    
    .whatsapp-button {
      display: inline-block;
      margin-top: 25px;
      padding: 12px 16px;
      background: #25D366;
      color: #fff;
      border-radius: 5px;
      text-decoration: none;
      font-weight: 700
    }


    }
      </style>
      <header>
          <div class="container" style="display:flex;align-items:center;justify-content:space-between">
      <div style="display:flex;align-items:center;gap:12px">
        <img src="images/dicas.jpg" alt="Logo" style="width:60px;height:60px;border-radius:6px;object-fit:cover">
        <div>
          <div style="font-weight:700">Lista dos guias e manuais disponíveis</div>
          <div style="font-size:0.85rem;opacity:0.95">Guia rápido</div>
        </div>
      </div>
        <nav>
            <!-- <a href="about.html">About</a> -->
            <a href="home.html">Voltar ao início</a>
            <a href="contato.html">Contato</a>
        </nav>
      </header>
    `;
  }
}
customElements.define('header-component', Header);
