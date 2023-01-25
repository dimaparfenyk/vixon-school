(() => {
  const refs = {
    openModalBtn: document.querySelector('.hero_btn'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('.backdrop'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();


// const evenNumSum = (numbers)=>{
//   let total = 0;

//   for (const number of numbers){
//     if (number % 2 !== 0) {
//       continue
//     };
//     total += number;
// }
//   return total
// }

// console.log(evenNumSum(numbers));

// const names = ['dfgh', 'sdfg', 'aadvgr', 'dima'];
// const validName = 'dima';

// const findValidName = (names, validName) =>{
//   return alert(names.includes(validName)
//     ? `User ${validName} was found`
//     : `There's no user with ${validName} name`);
// };

// findValidName(names, validName)
// const message = names.includes(validName)
//   ? `User ${validName} was found`
//   : `There's no user with ${validName} name`;

// for (const name of names) {
//   (name === validName)
//     ? message = `User ${validName} was found`
//     : message = `There's no user with ${validName} name`;

// ------------------------------------------------
//   // if (name === validName ) {
//   //   message = `User ${validName} was found`;
//   //   break;
//   // }
//   // message = `There's no user with ${validName} name`
// }
// console.log(message);

// const friends = ['mango', 'poly', 'ajax', 'kiwi'];

// const concatStr = friends => {
//  return friends.join(', ').toUpperCase();
// };
// console.log(concatStr(friends));



// const string = 'JavaScript';

// const reverseStr = str =>{
//   const letters = str.split('');
//   let invertedStr = '';

//   for (const letter of letters) {
//     invertedStr +=
//       letter === letter.toLowerCase()
//         ? letter.toUpperCase()
//         : letter.toLowerCase();
//   }
//   return invertedStr;
// };

// console.log(reverseStr(string));



// const title = "Top 10 benefits of React Framework";

// const slugify= title => {
//   return title.toLowerCase().split(" ").join("-");
// };

// console.log(slugify(title))

// const getExtremeElements = (array) => {
//   array.splice(1, array.length - 2);
//   return array
// };

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));

// const message = "JavaScript essentials";
// console.log(message.split(" ").length); // ["JavaScript", "essentials"]


// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(2);
// const nonExtremeEls = fruits.slice(1, fruits.length-1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls)
// console.log(nonExtremeEls)
// console.log(lastThreeEls)

// function makeArray(firstArray, secondArray, maxLength) {
// const updatedArr=firstArray.concat(secondArray)
//   const arrLength = firstArray.concat(secondArray).length ;
 
//   if (arrLength>maxLength) {
//     updatedArr.splice(maxLength);
//      return updatedArr
//   }
//   return updatedArr
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3))
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4))
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3))
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2))

// const numbers = [10, 5, 8, 9, 12, 2, 15, 27, 30, 18, 20, 100, -200];

// const findMinNumber = numbers =>{
//   let minNumber = numbers[0];

//   for (const number of numbers) {
//     if (minNumber > number) {
//       minNumber = number;
//     }
//   };

//   return minNumber;
// };

// console.log(findMinNumber(numbers));


// function findLongestWord(string) {
//   const words = string.split(' ');
//   let longestWord = words[0];

//   for (let i = 0; i < words.length; i += 1){
//     if (longestWord.length < words[i].length) {
//        longestWord=words[i]
//     }
//   }
//   return longestWord
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let repeatedNumbersArr=[];
// for(item of array1){
//   if(array2.includes(item)){
//     repeatedNumbersArr.push(item)
//   }
// }
// return repeatedNumbersArr

//  // Change code above this line
// };
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))

// const findEqualNumber = ()=>{
//   const start = 6;
//   const end = 27;
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % 5 === 0) {
//       number = i;
//       break
//     }
//     return number
//   }
// }

// const quolity = 'color';
// const color = 'red';
// const login = 'login';
// const query='qwerty'


// const playlist = {
//   name: 'My favorite playlist',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2'],
//   trackCount: 2,
//   [quolity]: color,
//   [login]:query,
// };
// console.log(playlist)
// console.log(playlist['tracks'])


/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//   const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1
//         return
//       }
//     };
//     return this.items.push(newProduct);
//   },
//   remove(productName) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       const item = this.items[i];

//       if (productName===item.name) {
//         this.items.splice(i, 1);
//       };
//     };
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     let total = 0;
//     const { items } = this;

//     for (const {price,quantity} of items) {
//      total+=price*quantity
//     };
//     return total;
//   },
//   increaseQuantity(productName) {
//     const items=this.items
   
//     for (const item of items) {
//       if (productName===item.name) {
//         item.quantity += 1;
//         return;
//       }
//     }
//   },
//   decreaseQuantity(productName) {
//     const items=this.items
   
//     for (const item of items) {
//       if (productName===item.name) {
//         item.quantity -= 1;
//         return;
//       }
//     }
//   },
// };

// console.table(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });

// console.table(cart.getItems());

// // cart.remove('🍎');
// // console.table(cart.getItems());

// // cart.clear();
// // console.table(cart.getItems());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.price=5000;
// apartment.rating = 4.7;
// apartment.name = "Henry Sibola";
// apartment.tags=apartment.tags.push("trusted");

// const propTitle= 'title';
// const propAuthor = "autor";

// const book = {
//   [propTitle]: "The Last Kingdom",
//   [propAuthor] : "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
//   pageCount :836,
//   originalLanguage : "en",
//   translations : ["ua", "ru"],
// };


// console.dir(book)

// const bookShelf = {
//    books: ["The Last Kingdom"],
  
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };
// console.log(bookShelf.getBooks());
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks());
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks());


// const newBook = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in newBook) {
//   // Ключ
//   // console.log(key);
//   // Значение свойства с таким ключом
//   console.log(key, newBook[key]);
// };

// const user = {
//   name: "Vika Parfeniuk",
//   email: "qwer@gmail.com",
// }

// const autorizedUser = Object.create(user);
// autorizedUser.password = "qwerrt";
// autorizedUser.phone = 0987654364;

// for (const key in autorizedUser) {
//   // console.log('все свойства', key , autorizedUser[key])
//   if (autorizedUser.hasOwnProperty(key)) {
//     console.log(key , autorizedUser[key])
//   }
// }
// console.log(autorizedUser)

// const book = {
//   title: "Derek good",
//   author: "Frank Teodor",
//   rating: 8.9,
// };

// const newBook = Object.create(book);
// newBook.price = 100;
// newBook.pages = 456;
// newBook.genres=['fantastic', 'detective']
// console.log(newBook);
// for (const key in newBook) {
//   console.log("All keys ",key)
//   if (newBook.hasOwnProperty(key)) {
//     console.log("This is my own properties " ,key)
    
//   }
// }

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смешного человека",
//     author: "Федор Достоевский",
//     rating: 7.75,
//   },
// ];
// let averageRating=0

// for (const book of books) {
//   averageRating+=book.rating/books.length
// }
// console.log(averageRating.toFixed(1))

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значение первого аргумента
//   console.log(secondNumber); // Значение второго аргумента
//   console.log(otherArgs); // Массив остальных аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let values = [];
//   for (const product of products) {
  
//     if (product.hasOwnProperty(propName)) {
//       values.push(product[propName])
//     }
//     }
//     return values
//     // Change code above this line
//   }

// console.log(getAllPropValues("fgjj"))

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line

//   // Change code above this line
// }

// function findMatches(arr,...args) {
//   const matches = []; // Don't change this line
// for (const arg of args) {
//   if (arr.includes(arg)) {
//    matches.push(arg)
//   };
//   };
//   // Change code above this line
//   return matches;
// };

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//     { name: "Dragon breath", price: 780 },
//   ],
//   // Change code below this line
//   // getPotions() {
//   //   return this.potions;
//   // },
//   // addPotion(newPotion) {
//   //   for (let i = 0; i < this.potions.length; i+=1) {
//   //     if (this.potions[i].name===newPotion.name) {
//   //       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//   //     }
//   //     this.potions.push(newPotion);
//   //   }
//   // },
//   // removePotion(potionName) {
//   //   for (let i = 0; i < this.potions.length; i+=1) {
//   //     if (this.potions[i].name === potionName) {
//   //       this.potions.splice(i,1)
//   //     }
//   //   }
//   //    return `Potion ${potionName} is not in inventory!`;
//   // },
//   updatePotionName(oldName, newName) {
//     // const potionIndex = this.potions.indexOf(oldName);

//     // if (potionIndex === -1) {
//     //   return `Potion ${oldName} is not in inventory!`;
//     // }

//     // this.potions.splice(potionIndex, 1, newName);
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
// console.log(atTheOldToad.potions);



// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => console.log(`Индекс ${index}, значение ${number}`);

// numbers.forEach(logMessage);


// function processCall(recipient, onAvailable, onNotAvailable) {
 
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
// }
// processCall("Poly", takeCall, leaveHoloMessage);
// processCall("Mango", takeCall, activateAnsweringMachine);

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     const { pizzas } = this;
//      for (const pizza of pizzas) {
//       if (pizza === pizzaName) {
//         console.log(pizzaName);
//       }
//     }
//    }
//   };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// // const isPizzaAvailable = this.pizzas.includes(pizzaName);
// //     if (isPizzaAvailable) {
// //       return onSuccess(pizzaName)
// //     }
// //    return onError('Такой пицы нет')

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

// firstArray.forEach(number=>{
//   if(secondArray.includes(number)){
//     commonElements.push(number)
//   }
// })
  
//   return commonElements;
//   // Change code above this line
// }

// function changeEven(numbers, value) {
//   // Change code below this line
//   let newArr=[];
//   numbers.forEach(number=>{
//     if (number % 2 === 0) {
//     return  newArr.push(number+value);
//     }
//     newArr.push(number)
   
//   })
//   console.log(newArr)
//  return newArr
//   // Change code above this line
// }
// function changeEven(numbers, value) {
//   const newArr = numbers.map(number => {
//     const isNumberEven = number % 2 === 0;
//    return isNumberEven?(number + value):number
//   //   if (isNumberEven) {
//   //   return  number + value;
//   //   }
//   //  return number
//   })
//   console.log(newArr)
//   return newArr
// }
// changeEven([1, 2, 3, 4, 5], 10)

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length );
// console.log(planetsLengths)


// const friends = [
//   "Briana Decker", "Sharron Pace", "Sharron Pace", "Marilyn Mcintosh",
//   "Padilla Garrison", "Naomi Buckner", "Goldie Gentry", "Aisha Tran",
//   "Jordan Sampson", "Eddie Strong", "Jacklyn Lucas", "Linda Chapman",
//   "Goldie Gentry", "Briana Decker"]

// const getFriends = (users) => {
//    const allFriends=users.flatMap(user=>user.friends);
//   return allFriends.filter((friend,index,arr)=>arr.indexOf(friend)===index)
// };

// const sortByName = users => [...users].sort((firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name));

// const users=[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const getNamesSortedByFriendCount =
//   users => [...users].sort((firstUser, secondUser) => firstUser.friends.length - secondUser.friends.length)
//     .flatMap(({ friends }) => friends)
//     // .filter((user,index, arr)=>arr.indexOf(user)===index);
  
// console.log(getNamesSortedByFriendCount(users))

// const getSortedFriends = users =>
//   [...users].flatMap(({ friends }) => friends)
//     .filter((friend, index, arr) => arr.indexOf(friend) === index)
//   .sort((firstFriend,secondFriend)=>firstFriend.localeCompare(secondFriend));
// console.log(getSortedFriends(users))

// const getTotalBalanceByGender = (users, gender) => [...users].filter(user => user.gender === gender)
//   .reduce((total, user) => total+user.balance, 0);
// console.log(getTotalBalanceByGender(users, "male"));
// console.log(getTotalBalanceByGender(users, "female"));


// const user = {
//   name: "Mango",
//   showName() {
//     console.log("user", user)
//     console.log("this" , this)
//   }
// }

// user.showName();



// class Car {
//   // Change code below this line
//   static MAX_PRICE=50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice<Car.MAX_PRICE){
//        this.#price = newPrice;
//     }
   
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
// blacklistedEmails=[];
//   blacklist(email){
//     this.blacklistedEmails.push(email)
//   }
//   isBlacklisted(email){
//   // return  this.blacklistedEmails.includes(email)
//     return this.blacklistedEmails.some(el=>el===email)
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// const descendingScores = [...scores].sort((a, b) => b - a);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
// console.log(descendingScores);
// console.log(scores);

// const bookShelf = {
//   authors: ["Бернард Корнуэлл", "Роберт Шекли"],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };

// console.log(bookShelf.getAuthors()); // ["Бернард Корнуэлл", "Роберт Шекли"]
// bookShelf.addAuthor("Ли Танит");
// console.log(bookShelf.getAuthors()); // ["Бернард Корнуэлл", "Роберт Шекли", "Ли Танит"]

// function foo() {
//   console.log(this);
// }

// foo(); // window без "use strict" и undefined с "use strict"

// const petya = {
//   username: "Petya",
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.username);
//   },
// };

// petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
// petya.showName(); // 'Petya'

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback.bind(customer)()}.`);
// }

// makeMessage(customer.getFullName); // Будет ошибка при вызове функции

// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       // Стрелки запоминают контекст во время объявления,
//       // из родительской области видимости
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();

const animal = {
  legs: 4,
  eats: true,
};
const dog = Object.create(animal);
dog.barks = true;
dog.name = "Манго";

for (const key in dog) {
  if (!dog.hasOwnProperty(key)) continue;
  console.log(key); // barks, eats
}

console.log(Object.keys(dog))

// const user = {
//   name: 'Dima',
//   surname: 'Ivanov',
// };

// const myUser = Object.create(user);
// myUser.phone = 097654322;
// console.log(user)

// console.log(myUser)
// console.log(myUser.name)
// console.log(myUser.surname)
// console.log(user.isPrototypeOf(myUser))