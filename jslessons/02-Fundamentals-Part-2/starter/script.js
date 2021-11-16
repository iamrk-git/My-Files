// function logger() {
//     console.log("My name is Roshan");
// }
// logger();

// function fruitProcessor(apples, orange) {
//     console.log(apples, orange);

//     const juice = `Juice with ${apples} apples and ${orange} oranges`;
//     return juice;

// }
// console.log(fruitProcessor(5, 0));
//function declarration
// function calcAge1(birthYear) {
//     return 2021 - birthYear;
// }
// console.log(calcAge1(1998));
// //finction expression/anonymous function
// const age = function (birthYear) {
//     return 2021 - birthYear;
// }    
// console.log(age(1998));

//arrow function
// const age1 = (birthYear) => {
//     2021 - bithyear;
// }

// console.log(age(1998));

//function calling form another function

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//     const applesPieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     console.log(apples, oranges);

//     const juice = `Juice with ${applesPieces}   pieces of apple and ${orangePieces} pieces of oranges`;
//     return juice;

// }
// console.log(fruitProcessor(2, 3));


// const calcAverage = (dAvg, kAvg) => {

//     return dAvg;
//     return kAvg;

// }
// console.log(calcAverage((44 + 23 + 71) / 3), (65 + 54 + 49) / 3);

// const checkWinner = (dAvg, kAvg) => {
//     calcAverage(dAvg, kAvg);
//     if (dAvg >= 2 * kAvg) {
//         const wDolphin = `winner is dolphin ${dAvg}`;
//         return wDolphin;

//     }
//     else if (kAvg >= 2 * dAvg) {
//         const wKoalas = `winner  is Koals ${kAvg}`
//         return wKoalas;
//     }
//     else {

//         console.log('draws');
//     }


// }


// console.log(checkWinner(calcAverage()));







/////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


//another way
// const calcAverage = (dAvg, kAvg) => {

//     return dAvg;
//     return kAvg;

// }
// const AVG = console.log(calcAverage((44 + 23 + 71) / 3), (65 + 54 + 49) / 3);

// const checkWinner = (dAvg, kAvg) => {
//     calcAverage(dAvg, kAvg);
//     if (dAvg >= 2 * kAvg) {
//         const wDolphin = `winner is dolphin ${dAvg}`;
//         return wDolphin;

//     }
//     else if (kAvg >= 2 * dAvg) {
//         const wKoalas = `winner  is Koals ${kAvg}`
//         return wKoalas;
//     }
//     else {

//         console.log('draws');
//     }


// }

// console.log(checkWinner(calcAverage(AVG)));


/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// //Test 1
// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = (scoreDolphins, scoreKoalas) => {
//     if (scoreDolphins >= 2 * scoreKoalas) {
//         console.log(`Dolphin win (${scoreDolphins}) vs (${scoreKoalas})`);
//     }

//     else if (scoreKoalas >= 2 * scoreDolphins) {
//         console.log(`Koalas ein(${scoreKoalas})vs (${scoreDolphins})`);
//     }
//     else {
//         console.log('draws');
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////


/*Array*/
//type-1
/*const mobile = ['samsusng', 'apple', 'nokia'];
console.log(mobile);*/
//type-2
// const mobile = new Array('samsung', 'apple', 'nokia');
// console.log(mobile);
// console.log(mobile[0]);

// //lenght of an array
// console.log(mobile.length);
// console.log(mobile.length - 1);

// mobile[2] = 'redmi';
// console.log(mobile);

//we cannot change  entire array

//mobile=['huwaei','LG'];

//we can use user defines variable in array
// const firstname = 'Roshan';
// const roshan = [firstname, 'Kandel', 2021 - 1998, mobile];
// console.log(roshan);
// console.log(roshan.length);
// //exercise
// const calcAge = function (bithyear) {
//     return 2037 - bithyear;
// }
// const years = [1998, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years.lenght - 1);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge[years.length - 1]];

// console.log(ages);

/////////////////coding challenge///////////////
// let calcTip = (bills) => {
//     if (bills >= 50 & bills <= 300) {
//         const billValue = 0.15 * bills;
//         return billValue;





//     }
//     else {
//         billValue = 0.2 * bills;
//         return billValue;


//     }




// }



// let bills = [125, 555, 44];
// let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// let total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, total);
//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// coding challenge///
// let mark = {
//     first_name: 'Mark Miller',
//     mass: 78,
//     ht: 1.69,
//     calcBMI: function () {
//         this.bmi = (this.mass / this.ht) ** 2;
//         return this.bmi;

//     }
// }
// let john = {
//     mass: 92,
//     ht: 1.69,
//     calcBMI: function () {
//         this.bmi = (this.mass / this.ht) ** 2;
//         return this.bmi;
//     }
// }

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//     const winner = `Mark has (${mark.bmi}) higher BMI than John BMI (${john.bmi})`;
//     console.log(winner);
// }
// else if (john.bmi > mark.bmi) {
//     const winner = `John has higher (${john.bmi}) BMI than Mark BMI $(${mark.bmi}) `;
//     console.log(winner);
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// tips = [];
// total = [];
// const calcTip = function () {
//     for (let i = 0; i < bills.length; i++) {

//         if (bills[i] >= 50 & bills[i] <= 300) {
//             const bill1 = [];
//             bill1 = 15 * bills[i];
//             console.log(bill1);
//         }
//         else {
//             const bill2 = [];
//             bill2 = 0.2 * bills[i];
//             console.log(bill2);


//         }
//     }
// }
// calcTip();

// tips.push(calcTip());
// total.push(bills + tips);
// console.log("The tip is" + tips, "The total is" + total);
// const tips = [];
// const total = [];

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// let calcTip = (bill) => {
//     if (bill >= 50 & bill <= 300) {
//         const billValue = 0.15 * bill;
//         return billValue;





//     }
//     else {
//         billValue = 0.2 * bill;
//         return billValue;
//     }
// }
// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     total.push(tip + bills[i]);

// }
// console.log("This is bill " + bills, "This is tips " + tips, "This is total " + total);


const calcAverage = function (array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {


        sum = sum + array[i];



    }
    console.log(sum);
    return sum / array.length;


}

const arr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
console.log(calcAverage(arr));

