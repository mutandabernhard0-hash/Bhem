class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background-color: #111827;
          color: white;
          padding: 4rem 2rem 2rem;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .footer-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        
        .footer-logo span {
          color: #d4af37;
        }
        
        .footer-description {
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-links a {
          color: white;
          background-color: rgba(255, 255, 255, 0.1);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s;
        }
        
        .social-links a:hover {
          background-color: #d4af37;
        }
        
        .footer-heading {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.5rem;
        }
        
        .footer-heading::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 2px;
          background-color: #d4af37;
        }
        
        .footer-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.75rem;
        }
        
        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .footer-links a:hover {
          color: #d4af37;
        }
        
        .footer-bottom {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          color: rgba(255, 255, 255, 0.7);
        }
        
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      
      <footer>
        <div class="footer-container">
          <div class="footer-about">
            <div class="footer-logo">Bernhard<span>Mutanda</span></div>
            <p class="footer-description">Entrepreneur, économiste et leader engagé pour le développement de l'Afrique.</p>
            <div class="social-links">
              <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i data-feather="linkedin"></i></a>
              <a href="mailto:mutandabernhard0@gmail.com" aria-label="Email"><i data-feather="mail"></i></a>
            </div>
          </div>
          
          <div class="footer-links">
            <h3 class="footer-heading">Navigation</h3>
            <ul>
              <li><a href="index.html">Accueil</a></li>
              <li><a href="biographie.html">Biographie</a></li>
              <li><a href="projets.html">Projets</a></li>
              <li><a href="citations.html">Citations</a></li>
              <li><a href="publications.html">Publications</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          
          <div class="footer-links">
            <h3 class="footer-heading">Entreprises</h3>
            <ul>
              <li><a href="#">AQUILA Holding</a></li>
              <li><a href="#">Bintu Food Express</a></li>
              <li><a href="#">HL Couture</a></li>
              <li><a href="#">Fondation Mutanda</a></li>
            </ul>
          </div>
          
          <div class="footer-links">
            <h3 class="footer-heading">Contact</h3>
            <ul>
              <li><i data-feather="mail" class="inline mr-2"></i> mutandabernhard0@gmail.com</li>
              <li><i data-feather="phone" class="inline mr-2"></i> +243 854 480 263</li>
              <li><i data-feather="phone" class="inline mr-2"></i> +243 826 358 017</li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2025 Bernhard Mutanda. Tous droits réservés.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);