// Surcharge d'un élément HTML.
class NavBar extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
			<header>
				<nav class="navbar not-mobile">
					<ul>
						<li>
							<a href="../../index.html">
								<img src="../../public/logo.ico" alt="Accueil" title="Accueil">
							</a>
						</li>
						<li>
							<a href="../chambre/chambre-index.html">
								Nos chambres
							</a>
						</li>
						<li>
							<a href="../repas/repas-index.html">
								Notre restaurant
							</a>
						</li>
						<li>
							<a href="../cheval/cheval-index.html">
								Randonnée équestre
							</a>
						</li>
						<li>
							<a href="../kayak/kayak-index.html">
								Sortie en kayak
							</a>
						</li>
						<li>
							<a href="../bagne/bagne-index.html">
								Visite du bagne
							</a>
						</li>
						<li>
							<a href="../garderie/garderie-index.html">
								La garderie
							</a>
						</li>
					</ul>
				</nav>


				<!-- TODO : burger mobile -->
				<nav class="navbar mobile">

				</nav>
			</header>
		`;
	}
}

// On définit la balise avec la classe.
customElements.define('menu-top', NavBar);