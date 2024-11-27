class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer class="footer bg-dark text-light py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <h5>Gîte Pim</h5>
                            <p>Évasion au naturel : vivez l'authenticité de l'île de Pam.</p>
                        </div>
                        <div class="col-md-4">
                            <h5>Navigation</h5>
                            <ul class="list-unstyled">
                                <li><a href="./index.html" class="text-light">Accueil</a></li>
                                <li><a href="./modules/chambre/chambre-index.html" class="text-light">Nos chambres</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <h5>Suivez-nous</h5>
                            <a href="#" class="text-light">Facebook</a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('pied-de-page', Footer);
