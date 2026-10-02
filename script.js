// // console.log("Application de commerce lectronique d marr e !");
// // console.log("Travaux pratique de Git et JavaScript");

// // // Partie II ***

// //=== Exercise 8 variable declaration ===
// const productName = "Desktop";
// let price = 450000;
// let productQuantity = 3;
// const productCategory = "Electronique";
// let isAvailable = true;

// // Variables display
// console.log("Product Name : ", productName);
// console.log("Price : ", price);
// console.log("Quantity : ", productQuantity);
// console.log("Category : ", productCategory);
// console.log("is Available : ", isAvailable);

// // total stock
// let totalStockAvailable = productQuantity * price;
// console.log(totalStockAvailable);

// //=== Exercise 9 Operateur Unaire ===
// let quantity = 10;
// console.log(quantity);

// quantity++;
// console.log(quantity);

// quantity--;
// console.log(quantity);
// console.log(-quantity);

// console.log(!true);

// console.log(typeof quantity);

// //=== Exercise 10 Operateur Binaires ===
// const Price = 2500;
// const Quantity = 4;
// const minimumQuantity = 2;

// const total = Price * Quantity;
// const remainder = Quantity % minimumQuantity;

// console.log(`Total : ${total}`);
// console.log(`Remainder : ${remainder}`);

// console.log(Price > 2000);
// console.log(Quantity > minimumQuantity);

// console.log(Quantity > 0 && Price > 0);
// console.log(Quantity === 4 || Price === 10000);

// // Tache
// const Sous_total = Price * Quantity;
// const reduction = Sous_total * 0.1;
// const finalPrice = Sous_total - reduction;

// console.log(Sous_total);
// console.log(reduction);
// console.log(finalPrice);

// //=== Exercise 11 Operateur ternaire ===

// // 1-Si un produit est disponible
// let article = true;

// let disponible = article
//   ? "L'article est disponible"
//   : "L'article n'est pas disponible";

// console.log(disponible);

// //   2- Si un client benefice de la livraison gratuite

// let initialPrice = 1000;

// let freeDeliver =
//   initialPrice > 1000
//     ? "Le client a droit a une livraison gratuite"
//     : "Le client n'a pas droit a une livraison gratuite";

// console.log(freeDeliver);

// // 3-Si un produit est cher

// const amount = 5000;

// let verdict = amount >= 5000 ? "L'article est cher" : "L'article est abordable";
// console.log(verdict);

// // 4-Si un client est mineur ou majeur

// let age = 18;

// let category = age >= 18 ? "Majeur" : "Mineur";
// console.log(category);

// // Partie III ***

// //=== Exercise 12 Tableaux ===
// const boite = ["Smartphone", "Casque audio", "Bonbon", "Chargeur"];

// // Afficher tout les element du tableau
// console.log(boite);

// // Afficher le premier element du tableau
// console.log(boite[0]);

// // Afficher le dernier element du tableau
// console.log(boite[boite.length - 1]);

// // Afficher le nombre d'element du tableau
// console.log(boite.length);

// //=== Exercise 13 Manipulation des tableau ===

// // Ajouter un element a la fin du tableau
// boite.push("Biscuit");
// console.log(boite);

// // Suprimer le dernier element du tableau
// boite.pop();
// console.log(boite);

// // Ajouter un element au debut du,tableau
// boite.unshift("Biscuit");
// console.log(boite);

// // Suprimer un element au debut du tableau
// boite.shift();
// console.log(boite);

// boite.forEach((element) => {
//   console.log(element);
// });

// // === Exercise 14 Tableau d'objet ===

// const productList = [
//   {
//     id: 1,
//     name: "Ordinateur Portable",
//     price: 450000,
//     quantity: 5,
//     category: "Electronique",
//   },
//   {
//     id: 2,
//     name: "Smartphone",
//     price: 250000,
//     quantity: 10,
//     category: "Electronique",
//   },
//   {
//     id: 3,
//     name: "Casque audio",
//     price: 35000,
//     quantity: 20,
//     category: "Accessoires",
//   },
// ];

// // Afficher le premier produit
// console.log(productList[0]);

// // Afficher le nom du deuxieme produit
// console.log(productList[1].name);

// // Afficher le nom du deuxieme produit
// console.log(productList[2].price);

// // Afficher le nom du deuxieme produit de chaqu'un des objet dans le tableau
// productList.forEach(({ name, id }) => {
//   console.log(`Product name in object ${id} : ${name}`);
// });

// // Calculer la valeur total du stock

// let valeurTotaleDuStock = productList.forEach(({ price }, next) => {
//   console.log(price + price);
// });

// //=== Exercise 15 Objet ===

// const client = {
//   id: 101,
//   name: "Jean dupont",
//   city: "Yaounde",
//   email: "jeanDupont@gmail.com",
//   balance: 250000,
// };

// // Afficher les proprieter souhaiter
// console.log(client.name);
// console.log(client.city);
// console.log(client.balance);

// // Ajouter une nouvelle proprieté
// client.phone = "677000000";

// // Modification du solde
// client.balance += 50000;

// // Afficher l'objet complet
// console.log(client);

// //=== Exercise 16 Structure Map ===

// const prices = new Map();

// // definir les valeur
// prices.set("Ordinateur", 450000);
// prices.set("Smartphone", 250000);
// prices.set("Tablette", 180000);
// prices.set("Casque audio", 35000);

// // recuperer les valeurs
// console.log(prices.get("Ordinateur"));
// console.log(prices.get("Smartphone"));

// // Verification du produit existant
// console.log(prices.has("Ordinateur"));
// console.log(prices.has("Imprimante"));

// // Obtenir le nombre d'element
// console.log(prices.size);

// // Tache
// // 1-Ajoute deux produit supplementaire
// prices.set("USB flash", 4500);
// prices.set("Modem", 10500);

// // 2-Recuperer les prix
// prices.get(4500);
// prices.get(10500);

// //3-Verification des produits
// prices.has("imprimante");

// //4-Suprime un produit
// prices.delete();

// //4-Afficher le map finale

// console.log(prices);

// Partie IV Mini projet integrer ***

const shop = [
  {
    id: 1,
    name: "Smartphone",
    category: "electronique",
    price: 250000,
    quantity: 10,
    available: true,
  },
  {
    id: 2,
    name: "Pot",
    category: "Kitchen utensil",
    price: 8000,
    quantity: 5,
    available: true,
  },
  {
    id: 3,
    name: "Television",
    category: "Electronique",
    price: 550000,
    quantity: 7,
    available: true,
  },
  {
    id: 4,
    name: "Spoon",
    category: "Kitchen utensils",
    price: 1000,
    quantity: 20,
    available: true,
  },
  {
    id: 5,
    name: "Desktop",
    category: "Electronique",
    price: 850000,
    quantity: 4,
    available: false,
  },
];

// Tache 1 afficher les produits
console.log(shop);

// Tache 2 Calcul de la valeur du stock
shop.forEach(({ price, quantity }) => {
  let stockValue;
  return console.log((stockValue = price * quantity));
});

// Tache 3 Calcul de la valeur totale de l'inventaire
const totalIventaire = shop.reduce((prev, next) => {
  return prev + next.price;
}, 0);

console.log(totalIventaire);

// Tache 4 Classification des produits
const classification = shop.map((element) => {
  return { ...element, status: element.price > 30000 ? "Premium" : "Standard" };
});
console.log(classification);

// Task 5 Recherche d'un produit
// let recherche = window.prompt("Entrer le nom du produit : ");
let recherche = "Smartphone";

const article = shop.find((element) => {
  return element.name.toLowerCase() === recherche.toLowerCase();
});
console.log(article);

// Task 6 Creation d'une Map de produit
const productMap = new Map();
shop.forEach((element) => {
  productMap.set(element.id, element);
});

console.log(productMap);

let numeroAChercher = 2;
const recuperation = productMap.get(numeroAChercher);
console.log("recherche par id: ", recuperation);
