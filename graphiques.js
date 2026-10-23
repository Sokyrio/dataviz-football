// Graphiques de la page d'accueil
if (document.getElementById("graphResultats")) {
    new Chart(document.getElementById("graphResultats"), {
        type: "doughnut",
        data: {
            labels: resultats,
            datasets: [{ label: "Nombre de matchs", data: nombreMatchs }]
        },
        options: {
            maintainAspectRatio: false,
            plugins: { legend: { position: "bottom" } }
        }
    });

    new Chart(document.getElementById("graphSaisons"), {
        type: "line",
        data: {
            labels: saisons,
            datasets: [{
                label: "Tirs à domicile (par match)", data: tirsDomicileSaison,
                borderColor: "#36a2eb", backgroundColor: "rgba(54, 162, 235, 0.2)", yAxisID: "yTirs"
            }, {
                label: "Tirs à l’extérieur (par match)", data: tirsExterieurSaison,
                borderColor: "#ff6384", backgroundColor: "rgba(255, 99, 132, 0.2)", yAxisID: "yTirs"
            }, {
                label: "Victoire à domicile (%)", data: pourcentageDomicile,
                borderColor: "#36a2eb", backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderDash: [6, 4], yAxisID: "yTaux"
            }, {
                label: "Victoire à l’extérieur (%)", data: pourcentageExterieur,
                borderColor: "#ff6384", backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderDash: [6, 4], yAxisID: "yTaux"
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                yTirs: { type: "linear", position: "left", min: 8, max: 16, title: { display: true, text: "Tirs par match" } },
                yTaux: { type: "linear", position: "right", beginAtZero: true, max: 60, title: { display: true, text: "Victoires (%)" }, ticks: { callback: value => value + "%" }, grid: { drawOnChartArea: false } }
            }
        }
    });
}

// Graphiques de la page Statistiques
if (document.getElementById("graphTirs")) {
    new Chart(document.getElementById("graphTirs"), {
        type: "bar",
        data: {
            labels: resultatsEquipe,
            datasets: [{ label: "Tirs cadrés moyens par équipe", data: moyenneTirsCadres, backgroundColor: ["#36a2eb", "#ffce56", "#ff6384"] }]
        },
        options: { maintainAspectRatio: false, scales: { y: { beginAtZero: true } } }
    });

    const compteur = new Map();
    pointsMatchs.forEach(point => {
        const cle = point.x + "," + point.y;
        compteur.set(cle, (compteur.get(cle) || 0) + 1);
    });
    const casesHeatmap = [];
    compteur.forEach((nombre, cle) => {
        const coordonnees = cle.split(",");
        casesHeatmap.push({ x: Number(coordonnees[0]), y: Number(coordonnees[1]), v: nombre });
    });
    const nombreMax = Math.max.apply(null, casesHeatmap.map(c => c.v));
    const xMin = Math.min.apply(null, pointsMatchs.map(p => p.x));
    const xMax = Math.max.apply(null, pointsMatchs.map(p => p.x));
    const yMin = Math.min.apply(null, pointsMatchs.map(p => p.y));
    const yMax = Math.max.apply(null, pointsMatchs.map(p => p.y));
    const nbColonnes = xMax - xMin + 1;
    const nbLignes = yMax - yMin + 1;

    new Chart(document.getElementById("graphEcarts"), {
        type: "matrix",
        data: {
            datasets: [{
                label: "Nombre de matchs", data: casesHeatmap,
                backgroundColor: context => {
                    const valeur = context.dataset.data[context.dataIndex].v;
                    const opacite = 0.15 + 0.85 * (valeur / nombreMax);
                    return "rgba(36, 93, 134, " + opacite.toFixed(2) + ")";
                },
                borderColor: "#ffffff", borderWidth: 1,
                width: context => context.chart.chartArea ? context.chart.chartArea.width / nbColonnes : 10,
                height: context => context.chart.chartArea ? context.chart.chartArea.height / nbLignes : 10
            }]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: { callbacks: { label: context => context.raw.v + " matchs" } }
            },
            scales: {
                x: { min: xMin - 0.5, max: xMax + 0.5, offset: false, title: { display: true, text: "Écart de tirs cadrés (dom. - ext.)" }, grid: { display: false }, ticks: { stepSize: 4 } },
                y: { min: yMin - 0.5, max: yMax + 0.5, offset: false, reverse: false, title: { display: true, text: "Écart de buts (dom. - ext.)" }, grid: { display: false }, ticks: { stepSize: 2 } }
            }
        }
    });

    new Chart(document.getElementById("graphButsSaison"), {
        type: "line",
        data: { labels: saisonsButs, datasets: [{ label: "Buts moyens par match", data: moyenneButsSaison }] },
        options: { maintainAspectRatio: false, scales: { y: { min: 1, max: 4, ticks: { stepSize: 1 }, title: { display: true, text: "Buts par match" } } } }
    });

    new Chart(document.getElementById("graphButsResultat"), {
        type: "bar",
        data: { labels: libellesResultats, datasets: [{ label: "Buts moyens par match", data: moyenneButsParResultat, backgroundColor: ["#36a2eb", "#ffce56", "#ff6384"] }] },
        options: { maintainAspectRatio: false, scales: { y: { beginAtZero: true, title: { display: true, text: "Buts par match" } } } }
    });

    new Chart(document.getElementById("graphCorners"), {
        type: "bar",
        data: { labels: libellesResultats, datasets: [{ label: "Corners moyens par match", data: moyenneCornersParResultat, backgroundColor: ["#36a2eb", "#ffce56", "#ff6384"] }] },
        options: { indexAxis: "y", maintainAspectRatio: false, scales: { x: { beginAtZero: true, title: { display: true, text: "Corners par match" } } } }
    });
}
