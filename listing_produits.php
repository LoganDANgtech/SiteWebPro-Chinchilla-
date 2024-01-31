<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liste des produits</title>
    <style>
        /* Styles pour la grille des produits */
        .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr); /* Afficher 3 produits par ligne */
            grid-gap: 20px;
            margin: 0 auto; /* Centrer la grille horizontalement */
            max-width: 1000px; /* Largeur maximale de la grille */
        }
        .product {
            border: 1px solid #ccc;
            padding: 10px;
            text-align: center;
            height: 300px; /* Hauteur des produits */
        }
        .product img {
            max-width: 100%;
            max-height: 100%;
            height: auto;
            width: auto;
        }
        .filters {
            margin-bottom: 20px;
            text-align: center; /* Centrer les filtres */
        }
        .separator {
          height : 100px
        }
    </style>
    <link href=css.css rel=stylesheet>
</head>
<body>
<header>
            <div class="topnavbar">
                <a href="(main.html)" class="logo"><img src="./images/snowflak.png" alt="logosnowstorm" class="logoimg"></a>
                <div class="navbar"> <!--Display: none; si < 294 px-->
                    <a href=""><p>NOS&nbsp;PRODUITS</p></a>
                    <a href=""><p>PERSONNALISER</p></a>
                    <a href=""><p>GALERIE</p></a>
                    <a href=""><p>SUPPORT/SAV</p></a>
                    <a href=""><p>FAQ</p></a>
                    <a href=""><p>CONTACT</p></a>
                </div>
                <div class="snowstorm">
                    <img src="images/SNOWSTORM.GG.png" height="80%">
                </div>
                <div class="research">
                    <form action="/fr/search" role="search">
                        <input type="search" placeholder="Recherche"/>
                        <button type="submit"><img src="./images/search.cebfd63a204ba9fefa74.svg" height="10px"></button>
                    </form>
                </div>
            </div>
        </header>
    <div class="separator"></div>
<?php
// Connexion à la base de données
$db = new PDO('mysql:host=mysql-chinchilla.alwaysdata.net;dbname=chinchilla_bdd;charset=utf8', '345543', 'chinchilla@8520');

// Déterminer le critère de tri par défaut
$critere_tri = isset($_GET['tri']) ? $_GET['tri'] : 'nom_produit';

// Préparation de la requête SQL en fonction du critère de tri
switch ($critere_tri) {
    case 'date':
        $sql = "SELECT * FROM Produit ORDER BY date";
        break;
    case 'nombre_ventes':
        $sql = "SELECT * FROM Produit ORDER BY nombre_ventes DESC";
        break;
    case 'prix (croissant)':
        $sql = "SELECT * FROM Produit ORDER BY prix";
        break;
    case 'prix (decroissant)':
        $sql = "SELECT * FROM Produit ORDER BY prix DESC";
        break;
    case 'nom_produit':
    default:
        $sql = "SELECT * FROM Produit ORDER BY nom_produit";
        break;
}

// Exécution de la requête SQL
$result = $db->query($sql);

if ($result->rowCount() > 0) {
    // Afficher les filtres
    echo '<div class="filters">';
    echo '<label for="sort">Trier par :</label>';
    echo '<select id="sort">';
    echo '<option value="nom_produit" ' . ($critere_tri == 'nom_produit' ? 'selected' : '') . '>Nom</option>';
    echo '<option value="date" ' . ($critere_tri == 'date' ? 'selected' : '') . '>Date de publication</option>';
    echo '<option value="nombre_ventes" ' . ($critere_tri == 'nombre_ventes' ? 'selected' : '') . '>Popularité</option>';
    echo '<option value="prix (croissant)" ' . ($critere_tri == 'prix (croissant)' ? 'selected' : '') . '>Du moins cher au plus cher</option>';
    echo '<option value="prix (decroissant)" ' . ($critere_tri == 'prix (decroissant)' ? 'selected' : '') . '>Du plus cher au moins cher</option>';
    echo '</select>';
    echo '</div>';

    // Afficher les produits
    echo '<div class="grid-container">';
    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        echo '<div class="product">';
        echo '<img src="data:image/jpeg;base64,' . base64_encode($row['image']) . '" alt="' . $row['nom_produit'] . '">';
        echo '<p>' . $row['nom_produit'] . '</p>';
        echo '<p>' . $row['prix'] . ' €</p>';
        
        echo '</div>';
    }
    echo '</div>';
} else {
    echo "0 résultats";
}
?>

<script>
    // Script JavaScript pour trier les produits en fonction du filtre sélectionné
    document.getElementById('sort').addEventListener('change', function() {
        var sortValue = this.value;
        window.location.href = 'index.php?tri=' + sortValue;
    });
</script>

</body>
</html>
