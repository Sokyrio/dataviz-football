# Dashboard Ligue 1

Petit site statique de datavisualisation des matchs de Ligue 1 entre 2021-2022 et 2025-2026.

## Voir le site

Ouvrir `index.html` dans un navigateur. Une connexion Internet est nécessaire pour charger Chart.js depuis son CDN.

Le site peut aussi être publié tel quel avec GitHub Pages, sans étape de compilation.

## Pages

- `index.html` : résultats par lieu et évolution des tirs et des taux de victoire.
- `statistiques.html` : tirs cadrés, relation entre tirs cadrés et résultats, buts et corners.
- `prediction.html` : conclusion.
- `methode.html` : sources et méthode de calcul.

Les données des graphiques sont dans `donnees.js`. Le CSV source est conservé dans `data/`.

## Source des données

Les résultats et statistiques proviennent de [Football-Data](https://football-data.co.uk/francem.php). Les taux de victoire sont calculés par saison en divisant les victoires à domicile ou à l’extérieur par le nombre de matchs de la saison.
