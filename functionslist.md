Fonctions : 

1 - nom : "addElem" qui permet d'ajouter un élément à la liste

2 - nom : "modifyElem" permet de modifier un élément 

3 - nom : "deleteElem" permet de supprimer un élément

4 - nom : "elemDone" permet d'indiquer que l'élément a été réalisé 

5 - nom : "selectAll" permet la sélection de tous les éléments de la liste

6 - nom : "unselectAll" permet de décocher tous les éléments de la liste

Tests : 

````
NOM : Ajout d'un élément à ma liste          
ID : 0

Objectif : test permettant de valider l'ajout d'un élément 

Conditions préalables : tâche créée avec label + statut

Etapes de test : 
1 - créer un élément possédant un label et un statut done valant : false
2 - ajouter cet élément au tableau (liste)

Résultat : un élément supplémentaire apparaît dans ma liste
````

````
NOM : Modifier un élément          
ID : 1

Objectif : valider la modification d'un élément 

Conditions préalables : tâche créée avec label + statut

Etapes de test : 
1 - sélectionner un éléments de mon tableau 
2 - donner de nouvelles valeurs à son label et/ou changer la valeur de son statut

Résultat : un élément de ma liste est modifié
````

````
NOM : Supprimer un élément
ID : 2

Objectif : valider la suppression d'un élément 

Conditions préalables : tâche créée avec label + statut

Etapes de test :
1 - sélectionner un élément du tableau 
2 - suppression du label et du statut de l'élément 

Résultat : un élément est supprimé du tableau
````
````
NOM : Indiquer qu'une tâche a été réalisée
ID : 3

Objectif : valider le statut "done" d'un élément 

Etapes de test :
1 - accéder au statut de l'élément 
2 - modifier son état initial de "false" à "true"

Résultat : un élément possède le statut done 
````
````
NOM : Sélectionner tous les éléments de la liste
ID : 4

Objectif : valider la sélection de toutes les tâches

Etapes de test :
1 - 

Résultat : tous les éléments sont sélectionnés
````
````
NOM : Décocher tous les éléments de la liste
ID : 5

Objectif : valider la "désélection" de toutes les tâches

Etapes de test :
1 - 

Résultat : tous les éléments sont sélectionnés
````