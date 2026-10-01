console.log("Application de commerce lectronique d marr e !");
console.log("Travaux pratique de Git et JavaScript");

// Partie II

// Exercise 8 variable declaration
const productName = "Desktop";
let price = 450000;
let productQuantity = 3;
const productCategory = "Electronique";
let isAvailable = true;

// Variables display
console.log("Product Name : ", productName);
console.log("Price : ", price);
console.log("Quantity : ", productQuantity);
console.log("Category : ", productCategory);
console.log("is Available : ", isAvailable);

// total stock
let totalStockAvailable = productQuantity * price;
console.log(totalStockAvailable);

// Exercise 9 Operateur Unaire
let quantity = 10;
console.log(quantity);

quantity++;
console.log(quantity);

quantity--;
console.log(quantity);
console.log(-quantity);

console.log(!true);

console.log(typeof quantity);

// Exercise 10 Operateur Binaires
const Price = 2500;
const Quantity = 4;
const minimumQuantity = 2;

const total = Price * Quantity;
const remainder = Quantity % minimumQuantity;

console.log(`Total : ${total}`);
console.log(`Remainder : ${remainder}`);

console.log(Price > 2000);
console.log(Quantity > minimumQuantity);

console.log(Quantity > 0 && Price > 0);
console.log(Quantity === 4 || Price === 10000);

// Tache
const Sous_total = Price * Quantity;
const reduction = Sous_total * 0.1;
const finalPrice = Sous_total - reduction;

console.log(Sous_total);
console.log(reduction);
console.log(finalPrice);

// Exercise 11 Operateur ternaire

// 1-Si un produit est disponible
let article = true;

let disponible = article
  ? "L'article est disponible"
  : "L'article n'est pas disponible";

console.log(disponible);

//   2- Si un client benefice de la livraison gratuite

let initialPrice = 1000;

let freeDeliver =
  initialPrice > 1000
    ? "Le client a droit a une livraison gratuite"
    : "Le client n'a pas droit a une livraison gratuite";

console.log(freeDeliver);

// 3-Si un produit est cher

const amount = 5000;

let verdict = amount >= 5000 ? "L'article est cher" : "L'article est abordable";
console.log(verdict);

// 4-Si un client est mineur ou majeur

let age = 18;

let category = age >= 18 ? "Majeur" : "Mineur";
console.log(category);
