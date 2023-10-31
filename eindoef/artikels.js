"use strict";

        const artikels = [];

        let naam = prompt("Artikelnaam");
        while (naam !== "stop") {
            const aankoopprijs = Number(prompt("Aankoopprijs"));
            const verkoopprijs = Number(prompt("Verkoopprijs"));
            artikels.push({ naam:  naam, aankoopprijs: aankoopprijs, verkoopprijs: verkoopprijs });
            naam = prompt("Artikelnaam");
        }

        if (artikels.length !== 0) {
            const zoekWoord = prompt("Zoekwoord voor artikelnamen");
            artikelsInclusiefWoord(artikels, zoekWoord);

            const getal1 = Number(prompt("Eerste getal"));
            const getal2 = Number(prompt("Tweede getal"));
            toonArtikelsTussenPrijs(artikels, getal1, getal2);

            const gemiddeldePrijs = berekenGemiddeldeVerkoopprijs(artikels);
            console.log("Gemiddelde verkoopprijs:", gemiddeldePrijs);
        }




        function artikelsInclusiefWoord(artikels, zoekWoord) {
            console.log("Artikels met zoekwoord: "+ zoekWoord)
            return artikels.filter(artikel => artikel.naam.includes(zoekWoord))
                .map(artikel => artikel.naam)
                .forEach(artikel => console.log(artikel));
        }

        function toonArtikelsTussenPrijs(artikels, getal1, getal2) {
            if (getal2 < getal1) {
                console.log("Fout: Tweede prijs is kleiner dan de eerste prijs.");
                return;
            }

            const geselecteerdeArtikels = artikels.filter(artikel => artikel.verkoopprijs >= getal1 && artikel.verkoopprijs <= getal2);
            if (geselecteerdeArtikels.length === 0) {
                console.log("Er zijn geen artikels binnen het opgegeven prijsbereik.");
            } else {
                console.log("Artikels tussen de opgegeven prijzen:");
                geselecteerdeArtikels.forEach(artikel => console.log(artikel.naam, artikel.verkoopprijs));
            }
        }

        function berekenGemiddeldeVerkoopprijs(artikels) {
            if (artikels.length === 0) {
                return 0;
            }
            const totalPrijs = artikels.map(artikel => artikel.verkoopprijs)
                .reduce((som, prijs) => som + prijs, 0);
            return totalPrijs / artikels.length;
        }
