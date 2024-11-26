// Surcharge d'un élément HTML.
class Footer extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
			<footer>
				Contact
				<br>
				Carte
			</footer>
		`;
	}
}

// On définit la balise avec la classe.
customElements.define('pied-de-page', Footer);