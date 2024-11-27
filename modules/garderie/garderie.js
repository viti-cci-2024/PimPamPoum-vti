window.addEventListener("DOMContentLoaded", function () {
    const resaCheckButton = document.getElementById("resaCheckGa");

    resaCheckButton.addEventListener("click", function (event) {
        event.preventDefault();
        const fullFormGaContainer = document.getElementById("fullFormGa");

        if (fullFormGaContainer.innerHTML.trim() !== "") {
            return;
        }
        const formHTML = `
            <div class="row mb-3">
                <form class="mt-2 border border-info border-top-0">
                    <div class="row mb-3 text-start">    
                        <div class="col-lg-2 col-md-6 col-sm-4 text-center mx-auto">
                            <label for="NbKidGa" class="form-label">Nombre d'enfant</label>
                            <input class="form-control" id="NbKidGa" placeholder="2">
                        </div> 
                    </div>
                    <div class="row mb-3 text-start ">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <label for="StartDateGa" class="form-label">Date de début de garderie</label>
                            <input type="date" class="form-control" id="StarDateGa">
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <label for="StartTimeGa" class="form-label">Heure de début de garderie</label>
                            <input type="time" class="form-control" id="StartTimeGa">
                        </div>
                    </div>
                    <div class="row mb-3 text-start">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <label for="EndtDateGa" class="form-label">Date de fin de garderie</label>
                            <input type="date" class="form-control" id="EndtDateGa">
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <label for="EndTimeGa" class="form-label">Heure de fin de garderie</label>
                            <input type="time" class="form-control" id="EndTimeGa">
                        </div>
                        <button class="btn btn-info col-lg-6 col-sm-12 mx-auto mt-3" id="btn-Meteo" >Voir prévisions ce jour</button>
                    <div class="row my-3  text-center fs-5" id="meteoResa">
                        <div class="col-lg-5 col-sm-12 mx-auto  border-info-subtle border-start border-end">
                            Pas de prévion disponible
                        </div>
                        <div class="col-lg-5 col-sm-12  border-info-subtle border-start border-end">
                            Pas de témpérature disponible
                        </div>
                    </div>   
                    </div>
                    <div class="row mb-3 text-start">
                        <div class="col-12">
                            <label for="Raison" class="form-label">Raconter une histoire pour vos petits, la raison de leur passage à la garderie</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <div class="row text-center m-3 "> 
                        <a class="btn btn-warning col-lg-4 col-sm-12 mx-auto my-2" href="../../index.html">Retour à l'acceuil</a>    
                        <button class="btn btn-primary col-lg-4 col-sm-12 mx-auto my-2">Enregistrer</button>    
                    </div>
                </form>
            </div>
        `;

        // injection HTML dans le conteneur
        fullFormGaContainer.innerHTML = formHTML;

    // Script pour popdepop la météo
        const btnMeteo = document.getElementById("btn-Meteo");
        const meteoResaDiv = document.getElementById("meteoResa");
        //chacher meteo
        meteoResaDiv.classList.add("d-none");

        btnMeteo.addEventListener("click", function (event) {
            event.preventDefault(); 
            if (meteoResaDiv.classList.contains("d-none")) {
                meteoResaDiv.classList.remove("d-none");
            } else {
                meteoResaDiv.classList.add("d-none");
            }
        });
    });
});


    