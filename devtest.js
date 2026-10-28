const users = [
    { prenom : 'Khary' , nom : 'Doumbia' , statut : 0 , age : 18 , role : 'admin'},
    { prenom : 'Oumy' , nom : 'Dieng' , statut : 1 , age : 23 , role : 'user'},
    { prenom : 'Marema' , nom : 'Diallo' , statut : 0 , age : 35 , role : 'admin'},
    { prenom : 'Souleymane' , nom : 'Ba' , statut : 0 , age : 28 , role : 'user'},
    { prenom : 'Naby' , nom : 'Ndiaye' , statut : 1 , age : 18 , role : 'admin'},
    { prenom : 'Aicha' , nom : 'Sene' , statut : 1 , age : 24 , role : 'user'}

];
// Creer une fonction fléchée nommée getadmins qui prend en parametre le tableau et retourne un tableau contenant tt les utilisateurs ayant le role admin
//faite l'appel de la fonction pour afficher le résultat

const getadmins = (users) => {
    return users.filter(user => user.role==='admin');
};
console.log(getadmins(users));

//declarer un objet utilisateur

let u = {
     prenom : 'Adjara' , nom : 'Dieye' , statut : 0 , age : 16 , role : 'user'
};

//recuperer le nom le prenom et le role et les afficher

let uprenom = u.prenom;
let unom = u.nom;
let urole = u.role;

console.log(uprenom,unom,urole);

//une autre maniere de faire par rapport à la consigne d'avant(destructuration)
const {prenom,nom,role} = u;
console.log(prenom,nom,role);

//utilisation de map
let umap = users.map(({prenom,role})=>{
    return {
        p:prenom , r:role
    }
});
console.log(umap);

//à faire destructuration d'un tableau ensuite récupérer le premier utilisateur du tableau users et le mettre dans une variable appelé user1 pareil pour le 3eme utilisateur qu'on appelle user3 et on ignore le deuxieme
//Spread operator  creer un autre tableau appelé équipe contenant tt les données du 1er tableau plus un nouvel utilisateur à la fin sans utiliser push
//ensuite modifier le statut du 2eme utilisateur users

//La destructuration
const [user1, ,user3] = users;
console.log(user1);
console.log(user3);

//Spread operator (ça permet de copier les éléments d'un tableau dans un autre tableau et d'ajouter de nouveaux éléments à la fin du tableau. le '...' est l'opérateur de spread)
const equipe = [...users , { prenom : 'Mamadou' , nom : 'Toure' , statut : 1 , age : 22 , role : 'user'}];
console.log(equipe);

//modif du 2eme utilisateur
users[1].statut = 0;
console.log(users);


