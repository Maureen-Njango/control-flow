//1
function numbersArray(arr){
    const firstfourNumbers = arr.slice (0,4).map(
        item =>item*item);
        console.log(firstfourNumbers)
        const lastNumbers = arr.slice(-2).map(
            items => items +10);
            const middleNumbers = arr.slice(4, -2)
            const newValueArr = firstfourNumbers
       +(middleNumbers)+(
        lastNumbers)
        console.log(newValueArr)
}
numbersArray([3,5,8,4,9,8,3])




//2
let arrNum = [1,2,3,4,5,6,7,8,9];
let i = 0;
while(i<arrNum.length){
    if (arrNum[i]=== arrNum[3]){
        break;

    }
    console.log(arrNum[i]);
    i++;
    
}
//3
function myFruits(arr){
 for (let i=0; i<arr.length; i ++){
    if (i ===1){
        continue;
    }
    console.log(arr[i]);
  }
}
let fruits =["apple", "plum", "banana", "strawberries","Kiwi"]
myFruits(fruits)
//4
function myCars(arr){
   for (let i =0; i<arr.length; i++){
console.log(`cars; ${arr[i]}`)
      }
   
}
let cars = ["audi", "rangerover", "mercedes", "porche"]
myCars(cars)
//5
function reverseString(String){
    let reverseString = ' '
    let i = String.length -1;
    while (i>=0){
        reverseString += String[i];
        i--;

    }
    return reverseString;


    
}
let originalString ='learning'
let m = reverseString(originalString)

console.log(m);