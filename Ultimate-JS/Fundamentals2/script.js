/* // 1. Activating Scrict Mode

'use script';

// which makes it easier to write a secure Javscript code, will write this string always at the begining of the script code , wiil use for specific functions , but it's always better to use in the begining , basically it will help you to avoid accidental errors, EXAMPLES :

 let hasDriversLicense = false;

 const passTest=true;

 if(passTest) hasDriverLicense=true; // here the hasDriverLicensce is wrogly typed here to see what heppens without "strict mode", witch strict mode it will not show any error , but with "strict mode" it will show error(with dots under ... like this),that is "not defined"
 if(hasDriversLicense) console.log("I can drive")

 const interface="rohini"; // actually interface is reserved keyword, it was not allowed previously , but it is allowing now, 
 console.log(interface);

//  const if="chnadra"; here if is not allowed to use, these are the things that wil show using strict mode */ 


 /* 2. Functions 

// Fundemental building block of real world applications are "FUNCTIONS"
//  ************VERY VERY IMPORTANT TOPIC**************** 

// FUNCTION is a part of code or peice of code that will be used over and over again in the code , same like variable but variable holds a value , function can hold one or more lines of code

// syntax : function functionName(){      function body     };

function logger(){
    console.log("This is basic function")
} ; 

logger(); // function can only be executed when it calls, without calling a function it will never executed, this example is a basic function without return()
logger();
logger(); 


function fruitProcessor(banana, apple){ //here banana, apple are function parameters

    console.log(banana, apple)
    const juice=`juice with ${banana} bananas and ${apple} apples`;
    return juice; //we are returing value of the juice when function calls, and these reurn value can be stored in 

} 
 const appleJuice = fruitProcessor(0,5);
 console.log(appleJuice);

 console.log(fruitProcessor(3,5));
 

//  console.log(juice);

let dal;
function makingDal(urad,rajma){
     dal= `making dal with ${urad} grams of urad and ${rajma} grams of rajma !!`;
    return // if we does'nt return anything it will show undefined
} 
console.log(makingDal(100,50)); // undefined
console.log(dal);
makingDal(150,150); // replaced with new values 
console.log(dal); */

/*
// 3. Function Declaration and Function expression

// functions produce a value, or it is just a value, not type number, string, boolean...etc, if it's a value it is stored in a variable

/// Function Declaration

const age1=calcAge1(1997);// in declaration function, we can call the function before it's intialization
function calcAge1(birthYear){
       return 2023-birthYear;
    }
//   const age1=calcAge1(1997);
 console.log(age1)
// console.log(calcAge1(1997)); 

/// Function expression

const age2=calcAge2(1997); //will get error here : "Cannot access 'calcAge2' before initialization at script.js:77:12"
const calcAge2= function(birthYear){          
    // // functions produce a value, or it is just a value, not type number, string, boolean...etc, if it's a value it is stored in a variable
     return 2023-birthYear
}
// const age2=calcAge2(1997); // will not get error here
console.log(age2); 

*/


/*
// 4. Arrow functions

const calcAge3 = birthYear => 2023-birthYear; // this one liner arrow function, in this its automatically returns the value

const age3= calcAge3(1997); 
console.log(age3);

const yearUntilRetire = birthYear => { // in multiliner function , we need to give return statement if you want to return anything from the function
    const age4= 2023-birthYear;
    const retireAge = 65-age4;
    return retireAge;
}

console.log(yearUntilRetire(1997));

const yearUntilRetire2 = (birthYear, firstName)=> {
    const age5= 2023- birthYear;
    const retirement=65-age5;
    return `${firstName} retires in ${retirement} years!!!`
}

console.log(yearUntilRetire2(1997, "Rohini"));
console.log(yearUntilRetire2(1992, "harish")); 

*/

/*
// 5. Functions calling other functions 

const cutPieces=function(fruit){
    return fruit*4;
}
const fruitProcessor= function(apple, orange){
    const applePieces=cutPieces(apple); // here we are calling function from another function, nothing but function calling another function
    const ornagePieces=cutPieces(orange);
    const juice= `juice with  ${applePieces} pieces of apples and ${ornagePieces} pieces of ornages...!!!`
    return juice;
}

console.log(fruitProcessor(2,3));
console.log(fruitProcessor(3,4));

*/


/*
// 6. Reviewing functions

const calcAge = function(birthYear){
    return 2023-birthYear;
}

const yearUntilRetirement = function(birthYear, firstName){ // birthYear, firstName are local variables to this function
    const retirementAge = 65-calcAge(birthYear);

    if(retirementAge>0){
        return retirementAge;// return statement executed and it immediately excutes the function
        console.log(`rohini retires in ${retirementAge} years!!!`) // after return anything is not executedm so this will be not execued hre
    }
    else{
        console.log(`${firstName} already retired 🎉🎉🎉🎉 `); // it is excuted because it is placed before return statement
        return -1;
    }
}

console.log(yearUntilRetirement(1947,"rohini"));
*/

/*
// 7. Introductions to array
// arrays are such a data structure, array like big container to throw variables and later reference them. arrays, objects are 2 importanat data structures

const friends=['rohini', 'ramya','sowmya'];
console.log(friends);
const x=[friends, 26, 'harika', 2023-1997]; // array with different type of values
console.log(x);

const y= new Array(1990,1991,1997,1996); // another way creating array using object "new"
console.log(y);

console.log(friends.length);
console.log(friends[0]); // arrays are 0 typed values
console.log(friends[friends.length-1]);// last elemnet of the array

friends[2]='rama'; // we can change the values in array even it has "const", because arrays are not primitive values, but we can not change the whole array like below
// const friends=['chitti' ,'potti' , 'kutti']; // error: identifier friends already declared

console.log(friends);

const calcAge= function(birthYear){
    return 2023-birthYear;
}

const years=[1990, 1997, 1996, 2022];
console.log(calcAge(years)); // here we can not give directly an array as an argument to the function, it will give an " NaN"

const age1=calcAge(years[0]);
const age2=calcAge(years[1]);
const age3=calcAge(years[2]);
const age4 = calcAge(years[3]);

console.log(age1,age2,age3,age4);

const ages= [calcAge(years[0]),calcAge(years[1]),calcAge(years[2]),calcAge(years[3])];

console.log(ages);
*/

/*
// 8. Basic array operations
// in arrays, we have built in functions called "methods"

const friends=['rohini', 'rama','ramya'];

// add elements to the array, at last position
const x=friends.push('gayatri');
console.log(friends);
console.log(x); // push methods returns the length of the array and stored in variable x

// add elements at the first

const y=friends.unshift('chinni');
console.log(friends);
console.log(y); // unshift method also returns the length of the array

// remove element at last postion of the array

friends.pop();//don't need to add anything in brackets, it's automatically remove last elemts
const z=friends.pop();
console.log(friends); //last 2 elemets removed, bcz 2 times pop method called here
console.log(z); // pop method returns the removed element in the array

// remove element at the first

const zz=friends.shift();
console.log(friends);
console.log(zz) // shift emthod also returns the removed element in the array

// method to show the index of the array

console.log(friends.indexOf('rohini')); // gives "0", bcz it is 0 th index
console.log(friends.indexOf('potti')); // gives "-1" bcz potti not available in the array

//method to the show given elemt is in the array ot not, if it is there returns true value , not there retirns false value

console.log(friends.includes('rama'));
friends.push('bujjulu');
console.log(friends.includes('baby'));
console.log(friends.includes('bujjulu')); 

if(friends.includes('bujjulu')){ // includes method useful for may operations like this;
    console.log("you have a friend called bujjulu")
}
else{
    console.log('you dont have the bujjulu friend');
}

*/

/*
// 9. Introduction to objects

// values of the arrays should be retrieved using array indexes, and arrays values depends on the order of the data which is stored, and we can not reference those values with any variables, 
// to avoid these problems we have objects, objects are defined with properties which has multiple key: value pairs

const rohini=['rohini', 'chandra', 2023-1997,['chinni','chandra','chandravva']];

const rohin={
    fistname:'rohini',
    lastname:'chandra',
    age:2023-1997,
    job:'devloper',
    nicknames:['chinni','chandra','chandravva']

} // this 'rohini' objects has 5 properties which has key:value pairs
*/


/*

// // 10. DOT. Versus []bracket notation


const rohin={
    firstname:'rohini',
    lastname:'chandra',
    age:2023-1997,
    job:'devloper',
    nicknames:['chinni','chandra','chandravva']

}
console.log(rohin); // it shows the properties in alphabetical order

console.log(rohin.firstname); // retrieve property value using . notation
console.log(rohin['lastname']);// using bracket notation

const nameKey='name';
console.log(rohin['first'+nameKey]);
console.log(rohin['last'+nameKey]); // mainly bracket notation is used for comupte the values
//console.log(rohin.'first'+nameKey); using . notation it doesnt work

const intrestedIn=prompt('what do you want to know about rohini? choose between firstname, lastname, age or job or nicknames..');

//  console.log(rohin.intrestedIn); // when you use . notation it will give undefined, because it doesnt compute the values of the object "rohini"

// console.log(rohin[intrestedIn]);// if we give any value that doesnt have in the object, then only it will give undefined value here 

if(rohin[intrestedIn]){
    console.log(rohin[intrestedIn])
}else{
    console.log('wrong request !choose between firstname, lastname, age or job or nicknames.. ')
}


rohin.location='hyderabad';
rohin.mailId='rohini@g';
console.log(rohin);


// challenge
// print like this: rohini has 3 nicknames , and her best nickname is chandravva

console.log(`${rohin.firstname} has ${rohin.nicknames.length} nicknames, and her best nick name is ${rohin.nicknames[rohin.nicknames.length-1]}`); 
*/


/*
//11. Objects methods:

// functions dec;ared with in the objects are called as objects methods, 

const rohin={
    firstname:'rohini',
    lastname:'chandra',
    birthYear: 1997,
    job:'developer',
    friends:['rama', 'ramya','sowmya'],
    hasDriversLicense:false,


    // calcAge:function(birthYear){
    //     return 2023-birthYear

    // } // basic method

    // calcAge: function(birthYear){
    //     console.log(this);
    //     return 2023-this.birthYear; // referrs to the property birthyear in the object

    // }

    calcAge : function(){
        this.age=2023-this.birthYear;
        return this.age; // like this will add any functions
    },

    getSummary:function(){
        return `${rohin.firstname} is ${this.age} years old ${this.job}, and she has ${this.hasDriversLicense ? 'a':'no'} drivers license` ;
    }

}

console.log(rohin.calcAge()); // using . notation
console.log(rohin['calcAge']()); // calling using bracket notation

console.log(rohin.calcAge()); // instead of calling function multiple times, we can create use "this" keyword and  create a "age" property in object, like the last function we defined, so that we can print age like below

console.log(rohin.age);
// challange : write a function thet retirns this string : Rohini is 26 year old and developer, and she has a/no driver license
console.log(rohin.getSummary());

*/


/*
// 11. Iteration: for loop
// if-else is control structure, there are more controlstructures available ex: for loop

// console.log("lifting weights repetotion 1 🏋🏻")
// console.log("lifting weights repetotion 2 🏋🏻")
// console.log("lifting weights repetotion 3 🏋🏻")
// console.log("lifting weights repetotion 4 🏋🏻")
// console.log("lifting weights repetotion 5 🏋🏻")
// console.log("lifting weights repetotion 6 🏋🏻")
// console.log("lifting weights repetotion 7 🏋🏻")
// console.log("lifting weights repetotion 8 🏋🏻")
// console.log("lifting weights repetotion 9 🏋🏻")
// console.log("lifting weights repetotion 10 🏋🏻")

for(let rep=5;rep<=15;rep++){
    console.log(`lifting weights repetation ${rep} 🏋🏻`);

}
*/

/*
// 12. Looping arrays, continuing and break

const rohin=[
    'rohini',
    'velagala',
    26,
    'developer',
    ['chitti','potti','kutti'],
    true

];
 for (i=0; i<=5;i++){
    console.log(rohin[i], typeof(rohin[i]));
}
 
 
types = [];
 for (i=0;i<=5;i++){
    types.push(typeof(rohin[i]));
 }
 console.log(types);




years=[1997,1996,1995,1990]
 ages=[]

 for(i=0;i<=3;i++){
    ages.push(2023-years[i]); // each value caluculated from years and pushed into the ages array
 }
 console.log(ages);

 // continue
 console.log('---------CONTINUE---------')
 for(i=0;i<=5;i++){
    if(typeof(rohin[i]) === 'string') continue; // not string means, when current  iterations is tsring it stops the execution and continue the next iteration and so....on, when it is eual to string ,continue when it is string
    console.log(rohin[i]);
 }

 // break 
 console.log('------------BREAK-----------')
 for(i=0;i<=rohin.length;i++){
    if(typeof(rohin[i])==='number') break; // when typeof is a number , then it will stop the execution and exits the loop
    console.log(rohin[i]);
 }
*/

/*
// 13. Looping backwards and loops in loops

// looping backwards

const rohin=[
    'rohini',
    'velagala',
    26,
    'developer',
    ['chitti','potti','kutti'],
    true

];
for(i=rohin.length-1;i>=0;i--){ // looping backwards
    console.log(i,rohin[i]);
}

// loops in loops

for(exercise=1;exercise< 4;exercise++){
    console.log(`-------starting exercise day ${exercise}----------`);

    for(repeat=1;repeat< 6;repeat++){ // this is loop in loop
        console.log(`Exercise: ${exercise} repeatation no: ${repeat}`);
    }
}
*/


/*
// 14. While loop

// while loop really doesnt have to depend on any counter variable, whenever we have a loop without a counter will use while loop, basically you dont knoe before how many iterations the loop has then will use while loop


let i=1; // will put the counter explicitly for while loop
while(i<=10){
    console.log(`---doing exercise day ${i}----`);
    i++ // will put the counter explicitly for while loop
}

let dice = Math.trunc( Math.random()*6 ) + 1; // this example is dice, when we dont know when the dice rolled to show 6, that's why we are using while here, " Math.trunc( Math.random()*6 ) + 1;" this will generate some randome numbers from 1 to 6

while(dice!==6){
    console.log(`You have rolled NO: ${dice}`);

    dice = Math.trunc( Math.random()*6 ) + 1;
    if(dice===6){
        console.log('Loop is about to end....')
    }
}
*/

