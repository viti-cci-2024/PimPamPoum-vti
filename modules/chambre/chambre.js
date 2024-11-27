let chambres = [];

// Charger les chambres depuis le fichier JSON
fetch('./liste-chambre.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Erreur lors du chargement du fichier JSON');
    }
    return response.json();
  })
  .then((data) => {
    chambres = data; // Stocker les chambres dans la variable globale
    console.log('Chambres chargées :', chambres);
  })
  .catch((error) => {
    console.error('Erreur :', error);
  });

// Réservations simulées
const reservations = [
    { chambre: "ME01", date_entree: "2024-11-25", date_sortie: "2024-11-27" },
    { chambre: "ME02", date_entree: "2024-11-26", date_sortie: "2024-11-28" },
    { chambre: "ME03", date_entree: "2024-11-30", date_sortie: "2024-12-02" },
    { chambre: "ME04", date_entree: "2024-12-01", date_sortie: "2024-12-03" },
    { chambre: "ME05", date_entree: "2024-11-30", date_sortie: "2024-12-01" },
    { chambre: "ME01", date_entree: "2024-12-03", date_sortie: "2024-12-07" },
    { chambre: "ME02", date_entree: "2024-12-05", date_sortie: "2024-12-08" },
    { chambre: "ME03", date_entree: "2024-12-08", date_sortie: "2024-12-10" },
    { chambre: "ME04", date_entree: "2024-12-09", date_sortie: "2024-12-12" },
    { chambre: "ME05", date_entree: "2024-12-10", date_sortie: "2024-12-15" },
    { chambre: "ME01", date_entree: "2024-12-15", date_sortie: "2024-12-20" },
    { chambre: "ME02", date_entree: "2024-12-16", date_sortie: "2024-12-18" },
    { chambre: "ME03", date_entree: "2024-12-20", date_sortie: "2024-12-26" },
    { chambre: "ME04", date_entree: "2024-12-23", date_sortie: "2024-12-27" },
    { chambre: "ME05", date_entree: "2024-12-24", date_sortie: "2024-12-28" },
    { chambre: "JA01", date_entree: "2024-11-25", date_sortie: "2024-11-28" },
    { chambre: "JA02", date_entree: "2024-11-30", date_sortie: "2024-12-01" },
    { chambre: "JA03", date_entree: "2024-11-26", date_sortie: "2024-11-29" },
    { chambre: "JA04", date_entree: "2024-11-27", date_sortie: "2024-11-30" },
    { chambre: "JA05", date_entree: "2024-12-01", date_sortie: "2024-12-05" },
    { chambre: "JA06", date_entree: "2024-12-02", date_sortie: "2024-12-07" },
    { chambre: "JA07", date_entree: "2024-12-03", date_sortie: "2024-12-06" },
    { chambre: "JA08", date_entree: "2024-12-06", date_sortie: "2024-12-10" },
    { chambre: "JA09", date_entree: "2024-12-08", date_sortie: "2024-12-12" },
    { chambre: "JA10", date_entree: "2024-12-09", date_sortie: "2024-12-13" },
    { chambre: "JA01", date_entree: "2024-12-10", date_sortie: "2024-12-15" },
    { chambre: "JA02", date_entree: "2024-12-12", date_sortie: "2024-12-16" },
    { chambre: "JA03", date_entree: "2024-12-15", date_sortie: "2024-12-20" },
    { chambre: "JA04", date_entree: "2024-12-16", date_sortie: "2024-12-21" },
    { chambre: "JA05", date_entree: "2024-12-20", date_sortie: "2024-12-26" },
    { chambre: "JA06", date_entree: "2024-12-22", date_sortie: "2024-12-27" },
    { chambre: "JA07", date_entree: "2024-12-23", date_sortie: "2024-12-28" },
    { chambre: "JA08", date_entree: "2024-12-26", date_sortie: "2024-12-30" },
    { chambre: "JA09", date_entree: "2024-12-27", date_sortie: "2024-12-31" },
    { chambre: "JA10", date_entree: "2024-12-28", date_sortie: "2025-01-02" },
  ];
  

// Fonction pour vérifier la disponibilité des chambres
function isAvailable(chambre, checkin, checkout) {
  return !reservations.some((resa) => {
    return (
      resa.chambre === chambre &&
      !(new Date(resa.date_sortie) <= new Date(checkin) || new Date(resa.date_entree) >= new Date(checkout))
    );
  });
}

// Écouter le bouton Rechercher
document.getElementById("btn-recherche").addEventListener("click", () => {
  const checkin = document.getElementById("checkin-date").value;
  const checkout = document.getElementById("checkout-date").value;
  const guests = parseInt(document.getElementById("invités").value);

  if (!checkin || !checkout) {
    alert("Veuillez sélectionner des dates valides !");
    return;
  }


  // Filtrer les chambres disponibles
  const results = chambres.filter(
    (chambre) =>
      chambre.capacite >= guests && isAvailable(chambre.id, checkin, checkout)
  );

  // Afficher les résultats
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = results.length
    ? results
        .map(
          (chambre) =>
            `<div class="card my-2">
              <div class="card-body">
                <h5 class="card-title">Chambre ${chambre.id} - Vue ${chambre.vue}</h5>
                <p class="card-text">Capacité : ${chambre.capacite} personnes</p>
              </div>
            </div>`
        )
        .join("")
    : "<p>Aucune chambre disponible pour cette période.</p>";
});
