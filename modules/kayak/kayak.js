

// Réservation
$(document).ready(function(){
    $("#rez").click(function(){
		// TODO : erreur si fichier local, nécessite HTTP !
		var chemin = '../../data/liste-chambre.json';
		$.getJSON(chemin, function(data) {
			console.log(data);
		});
    });
});
