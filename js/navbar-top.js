class NavBar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <nav class="navbar navbar-dark navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <!-- Logo pointant vers /index.html -->
            <a class="navbar-brand" href="/index.html">
              <img 
                src="/public/logo-gite-BLANC.png" 
                alt="Accueil" 
                width="160" 
                height="60" 
                class="d-inline-block align-text-top" 
                title="Accueil"
              >
            </a>
            <!-- Bouton burger -->
            <button 
              class="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
  
            <!-- Menu -->
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul class="navbar-nav fs-5">
                <li class="nav-item">
                  <a class="nav-link text-white" href="/modules/chambre/chambre-index.html">Nos chambres</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="/modules/repas/repas-index.html">Notre restaurant</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="/modules/cheval/cheval-index.html">Randonnée équestre</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="/modules/kayak/kayak-index.html">Sortie en kayak</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="/modules/bagne/bagne-index.html">Visite du bagne</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="/modules/garderie/garderie-index.html">La garderie</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      `;
  
      // Au chargement de la page, assurez-vous que bootstrap.bundle.min.js
      // est disponible, sinon 'bootstrap.Collapse' ne sera pas défini.
      const navLinks = this.querySelectorAll('.nav-link');
      const navbarToggler = this.querySelector('.navbar-toggler');
      const navbarCollapse = this.querySelector('#navbarNav');
  
      // Instancier l’objet Collapse de Bootstrap (toggle:false => on ne l'ouvre pas tout de suite)
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
  
      // Au clic sur un lien, si le menu est visible (vue mobile), on le referme
      navLinks.forEach((link) => {
        link.addEventListener('click', () => {
          // .offsetParent != null => le toggler est visible (typiquement en mobile)
          if (navbarToggler.offsetParent !== null && navbarCollapse.classList.contains('show')) {
            // Au lieu de .toggle(), on fait .hide() pour être sûr de refermer
            bsCollapse.hide();
          }
        });
      });
    }
  }
  
  // Enregistrement de la balise personnalisée
  customElements.define('menu-top', NavBar);
  