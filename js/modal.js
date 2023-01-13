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

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
  const newProduct = {
      ...product,
      quantity: 1,
    };

    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1
        return
      }
    };
    return this.items.push(newProduct);
  },
  remove(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];

      if (productName===item.name) {
        item.splice(i, 1);
      };
    };
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let total = 0;
    const { items } = this;

    for (const {price,quantity} of items) {
     total+=price*quantity
    };
    return total;
  },
  increaseQuantity(productName) {
    const items=this.items
   
    for (const item of items) {
      if (productName===item.name) {
        item.quantity += 1;
        return;
      }
    }
  },
  decreaseQuantity(productName) {
    const items=this.items
   
    for (const item of items) {
      if (productName===item.name) {
        item.quantity -= 1;
        return;
      }
    }
  },
};

console.table(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });

console.table(cart.getItems());

// cart.remove('🍎');
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());

cart.increaseQuantity('🍎');
console.table(cart.getItems());

cart.decreaseQuantity('🍋');
cart.decreaseQuantity('🍋');
console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

