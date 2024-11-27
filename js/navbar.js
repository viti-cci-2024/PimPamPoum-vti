class NavBar extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
			<header>
				<!-- Barre de navigation Bootstrap -->
				<nav class="navbar navbar-expand-lg navbar-light bg-light">
					<div class="container-fluid">
						<a class="navbar-brand" href="../../index.html">
							<img src="../../public/logo.ico" alt="Accueil" title="Accueil" width="30" class="d-inline-block align-text-top">
							Accueil
						</a>
						<!-- Bouton burger pour les mobiles -->
						<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<!-- Contenu de la navigation -->
						<div class="collapse navbar-collapse" id="navbarNav">
							<ul class="navbar-nav ms-auto">
								<li class="nav-item">
									<a class="nav-link" href="../chambre/chambre-index.html">Nos chambres</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="../repas/repas-index.html">Notre restaurant</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="../cheval/cheval-index.html">Randonnée équestre</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="../kayak/kayak-index.html">Sortie en kayak</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="../bagne/bagne-index.html">Visite du bagne</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="../garderie/garderie-index.html">La garderie</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		`;
	}
}

// Enregistrement de la balise personnalisée
customElements.define('menu-top', NavBar);
