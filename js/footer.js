// Surcharge d'un élément HTML.
class Footer extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
			<footer>
				<p>Contact</p>
				<p>Carte</p>
				<p>Copyright</p>
			</footer>
		`;
	}
}

// On définit la balise avec la classe.
customElements.define('pied-de-page', Footer);