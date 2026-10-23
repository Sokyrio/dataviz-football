# Guide simple du projet

## Lancer le site
1. Décompresser le dossier.
2. Ouvrir `index.html` dans ton navigateur.
3. Une connexion Internet est nécessaire pour charger Chart.js depuis le CDN.

## Les fichiers importants
- `index.html` : les graphiques sur les résultats et les saisons.
- `statistiques.html` : les graphiques sur les tirs cadrés, les buts et les corners.
- Le site contient 7 graphiques au total : 2 sur l’accueil et 5 sur la page Statistiques.
- `donnees.js` : les valeurs utilisées par les graphiques.
- `dataviz_main.css` : l'apparence du site.
- `prediction.html` : la conclusion.
- `methode.html` : les sources et les calculs.

```

- `getElementById` récupère le canvas où le graphique sera dessiné.
- `new Chart(...)` crée le graphique.
- `type` choisit la forme : `bar`, `line`, `doughnut`, `scatter` ou `matrix` (heatmap).
- La heatmap utilise le plugin `chartjs-chart-matrix`, chargé depuis le CDN comme Chart.js.
- `indexAxis: "y"` transforme un graphique en barres verticales en barres horizontales.
- `labels` contient les catégories affichées.
- `data` contient les valeurs.
- `beginAtZero: true` fait commencer l'axe vertical à zéro.
