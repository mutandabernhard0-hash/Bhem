class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background-color: rgba(17, 24, 39, 0.95);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .logo {
          color: white;
          font-family: 'Playfair Display', serif;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .logo span {
          color: #d4af37;
        }
        
        .nav-links {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
          position: relative;
        }
        
        .nav-links a:hover {
          color: #d4af37;
        }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #d4af37;
          transition: width 0.3s;
        }
        
        .nav-links a:hover::after {
          width: 100%;
        }
        
        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        
        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: rgba(17, 24, 39, 0.98);
          padding: 1rem;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        }
        
        .mobile-menu ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .mobile-menu li {
          margin-bottom: 1rem;
        }
        
        .mobile-menu a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          display: block;
          padding: 0.5rem 0;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .mobile-menu-button {
            display: block;
          }
          
          .mobile-menu.hidden {
            display: none;
          }
        }
      </style>
      
      <nav>
        <a href="/" class="logo">
          Bernhard<span>Mutanda</span>
        </a>
        
        <ul class="nav-links">
          <li><a href="index.html">Accueil</a></li>
          <li><a href="biographie.html">Biographie</a></li>
          <li><a href="projets.html">Projets</a></li>
          <li><a href="citations.html">Citations</a></li>
          <li><a href="publications.html">Publications</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        
        <button class="mobile-menu-button" id="mobile-menu-button">
          <i data-feather="menu"></i>
        </button>
        
        <div class="mobile-menu hidden" id="mobile-menu">
          <ul>
            <li><a href="index.html">Accueil</a></li>
            <li><a href="biographie.html">Biographie</a></li>
            <li><a href="projets.html">Projets</a></li>
            <li><a href="citations.html">Citations</a></li>
            <li><a href="publications.html">Publications</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </nav>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);