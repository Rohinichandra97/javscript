    /*  //   1. How to link JS file
      
    //   let js="amzing";
    //     if(text="amazing") alert("Hello Rohini chandra !!")
        

    //     // 40+80-23; this statement can not be calucuated and didnt show the resul in console,
         // will use below statemnt to diaplay content in console
    //     console.log(40+80-23);

        // 2. Values and variables 

        console.log('rohini'); // here "rohini" is a value

        let myName = "rohini"; 
        // here i'm storing this value/data into the box/container
                               
        // with the variable and name of the variable is "myName"
                               
        // using this variable we can reuse if you want to fetch same 
                               
        // data anywhere in the code
    
        //    rules for naming a variable
   
        // * camelCase like first one is lowercase, and secondis uppercase like "myName"
    
        // * we will use $, _ , at the intial...ie firstplace
   
        // * will use numbers, $ , _ , at the middle
    
        // will not use numbers at the first place
    
        // will not use any special charachtres other than $, _ at first and aslo in middle
   
        // will not use reserved keyword as variable name...ex : new, function
     
    
        let $person = "developer"; //valid
    
        // let 3person = "prgrammer"; // not valid
    
        let _person="teacher";
    
        let Person="driver"; // valid but not suggested to use
    
        // let new="painter"; //not valid
    
        // let &person="programmer"; //not valid 
    
        // let my&Name = "rohini" //not valid
    
        let my_name="Rohini chandra";

   
        console.log(my_name);

        // *** Assignment *** Declare variables called country, continent and population and assign their values according to your own country (population in millions).Log their values to the console.

        let country= "India";
        let continent="asia";
        let population="1000000 billions";
        console.log(country);
        console.log(continent);
        console.log(population); */

        
        
        /* // 3.DATA TYPES IN JS

        // 7 TYPES: NUMBER, STRINGS, BOOLEAN, UNDEFINED, NULL, SYMBOL, BIG INT
        // 1.NUMBERS : USED TO DEFINE DECIMAL VALUES, LIKE EX: let num= 23; so here 23 stored as 23.o

        // 2. STRINGS:  USED TO DEFINE OR DECLARE TEXT , EX: let myName="rohini"; always use quotes(double, single)

        // 3.BOOLEAN: USED TO DEFINE TRUE OR FALSE, TO TAKE DECISIONS EX: let jsIsHard= true;

        //4. UNDEFINED: MEANS WE CAN ONLY DECLARE A VARIABLE OR DEFINE A VARIABLE THAT'S IT AND NOT INTIALIZED THE VALUE FOR THAT VAR EX: let myName;

        //5. NULL: MEANS NULL IS A DATA TYPE , IT IS DECLARED AND ASSIGNED A VALUE AS NULL, undefined means a variable has been declared but has not yet been assigned a value, whereas null is an assignment value, meaning that a variable has been declared and given the value of null . EX: let name=null;

        //6.SYMBOL: USED TO DECLARE A VARIABLE THAT IS UNIQUE AND CAN NOT BE CHANGED(USED TO INDENTIFY KEYS IN OBJECTS, ES6 VERSION)

        //7. BIG INT: USED TO ASSIGN LARGE NUMBERS , ANOTHER TYPE FOR NUMBERS

        // In js we don not nedd to declare the type of variable, that why js dynamic prgmng lunge 

        let num=23; //number type
        console.log(typeof num); //typeof is operator used to know the type of data

        let myName="rohini";
        console.log(myName);

        let jsIsFun=true;
        console.log(typeof jsIsFun);

        let person;
        console.log(person);
        console.log(person);
        // person="good"; we can define it later anyhow

        let thisValue=null;
        console.log(thisValue);
        console.log(typeof thisValue)
        
        // type of null is object 
        // In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value. The type tag for objects was 0. null was represented as the NULL pointer (0x00 in most platforms). Consequently, null had 0 as type tag, hence the "object" typeof return value. (reference)

        //will use only these datatypes in day-day */


       /* // 4. LET, CONST, VAR

        // let is used to declare a varibale, and that variable value can be changed

        let age=30;
        age=31;
        console.log(age)// 31 is the output , bcz it will print most recent changed value

        //const is also used to declare a variable but value can not be changed through ou the code

        const dob=1997;
        // dob=1998; //will get error here ERR: " Assignment to constant variable."
        console.log(dob);

        // var is works samle like let but the diffrenece is, The main difference is scoping rules. Variables declared by var keyword are scoped to the immediate function body (hence the function scope) while let variables are scoped to the immediate enclosing block denoted by { } (hence the block scope).

        var myJob="programmer";
        myJob="developer";
        console.log(myJob); */


        /* // 5. Basic operators
        //math operators: + , - , * , / , %
        // assignment operators: = , += , =+ , -=, ++ , -- 
        //comparision operators: === , > , < , >= , <= 

        let myAge= 2023-1997;
        console.log(myAge);

        const ageRohini= 1997+26;
        console.log(ageRohini);

        console.log(myAge, ageRohini, myAge/2, myAge*2, 3**3, ageRohini%10);// all math operations, % gives remainder, / gives quotient
        // 3**3= 3 to the power of 3

        // assignment operators 
        let x=10;
        console.log(x);
        x =+2; // x =+ 2;: This statement assigns the value of positive 2 to the variable x
        console.log(x);
       x +=2; // x += 2;: This statement is a compound assignment operator. It adds 2 to the current value of x and assigns the result back to x
       console.log(x);
       // x+ ; doesnt work like this 
    
       x++;
       x--;
       x--;
       console.log(x);

       console.log(ageRohini>myAge); // relational operators
       console.log(2023-1997 > 1997+26); // here + , - take precedence than >

       console.log(x<=3);
       console.log(x>=5);

       // always good idea to check operator precedence in Google MDN 

        let y=(10-20)+80; // here paranthesis will take precedence that + , - 
        console.log(y); */


       /* //6. Strigs and Template literals

        const rohini="my name is rohini chandra , age 26 , DOB 1997 !!";
        console.log(rohini);

        const myName= "rohini chandra";
        const age=26;
        const birthYear ="1997";

        const rohiniNew= "my name is "+myName+" , age "+age+" , DOB "+birthYear +" !!";
        console.log(rohiniNew);

        const rohiniChandra=`my name is ${myName} , age ${age} , DOB ${birthYear} !!`;
        console.log(rohiniChandra); // this is using template literlas, using backtik charechter " ` " ;

        // if we want to to print string in muitiple lines normally will do like below

console.log("strings in\n\multiple\n\lines");

console.log( // this is using templte literals 
`strings
multiple
lines`); */


/* // 7. Taking decisions, if/else statements

const age=17;

if(age>=18){
    console.log(`Rohini is eligible for driving licence`);
}
else{
    const years=18-age;
    console.log(`Rohini is not eligible for driving licenec wait another ${years} years :)!!`)
}

const birthYear=1997;
let century; // this it should work , we are declaring ouside of the block

if(birthYear<=2000){
    century=20;
}
else{
    century=21;
}
console.log(century); // HERE century can not be accesssed because century variable avialble(scoped) with in the block of code { }, out side of the block it cant be modified, showing error : century is not defined */

/* //8. Type conversion & coersion
// String to number

const year="1997"; //string
console.log(year+26); // result is string(black clor in output)

const yearNew=Number(1997)//string converted to number(pink color)
console.log(yearNew+26)

console.log(Number("rohini")); // text to number shows results as : NaN , not a number
console.log(typeof Number('rohini'));

//number to string
const age=26;
console.log(String(age));

// Type coersion

console.log("My name is rohini and age is "+ 26 +" year 1997 ! ") // here + operator used to convert number to strings, in built
console.log("26"-"5"+10);// here - operator will do caluculation
console.log(26-5+5+"10"); // here  - perator will do caluculation as before but (+ string ) will be concatinated not caluculated */


/*  // 9. Truthy and falsey values (boolean)

// falsey values: 0, undefined, null, " "(empty string), NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("")); // WITHOUT SPACE
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean("rohini"));
console.log(Boolean({})); //boolean of object is true

const money=0;

if(money){
    console.log("Don't spend too much"); // here if(Boolean(0)); will be executed
}
else{
    console.log("You should get a job");
}

let height=100;
if(height){
    console.log(" YAY height is defined");
}
else{
    console.log("height is undefined")
} */

/* // 10. Equality operators

// 1. strict equality operator , it will not perform any coersions

const age="18";

if(age === 18){
    console.log("you just became an adult")
}

const ageNew="19";
if(ageNew==19){ // this is loose operator it will perform coersion, 19 string converted to number
    console.log("this is loose operator");
}

const ageRohini ="26";
if(Number(ageRohini)===26) {
    console.log("rohini's age is"+ageRohini);
}

const favourite = Number(prompt("what's your favourite number"));
console.log(favourite);
console.log(typeof favourite);

if(favourite===23){
    console.log("23: that's a cool number")
} else if(favourite===7){
    console.log("7: is also amazing number");
} else if(favourite===9){
    console.log("9: that's wonderful number");
}else{
    console.log("number is not 23 or 7 or 9");
} */


/* // 11. Boolean logic

// A AND B : if one value is false then results will be false , if two are true results is true, same logic for three (A AND B AND C)

// A OR B : if one value is true then results is true, if all false result is false, same logic for three (A OR B OR C)

// !A(not A) : if A is true , !A is false

// Example: 

const hasDriverLicence= true;
const hasGoodVision=true;

console.log(hasDriverLicence&&hasGoodVision);
console.log(hasDriverLicence||hasGoodVision);
console.log(!hasGoodVision);

if(hasDriverLicence&&hasGoodVision){
    console.log("rohini is able to drive")
}else{
    console.log("someone should drive");
}

const notTired=false;
if(hasDriverLicence&&hasGoodVision&& !notTired){
    console.log("rohini is able to drive")
}else{
    console.log("another person should drive");
} */



/* // 12. Switch statement

const day = "sunday"; // without switch statement

if(day==="monday"){
    console.log("plan the course structure")
}else if(day==="tuesday"){
    console.log("go to course material");
}else if(day==="wednesday"|| day==="thursday"){
    console.log("go to code exmples")
} else if(day==="friday"){
    console.log("prepare course notes")
}else if(day==="saturday"|| day==="sunday"){
    console.log("free time");
}else{
    console.log("go...... and study first!!!!");
}

// with switch statement
 //syntax: switch(condition){ case 1:  break; default; } // without break below case also excuted 

          switch(day){
            case 'monday':
                console.log("plan the course structure");
                break;
            case "tuesday":
                console.log("go to course material");
                break;
            case "wednesday":
            case "thursaday" :
                console.log("go to code exmples");
                break;
            case "friday":
                console.log("prepare course notes");
                break;
            case "saturday":
            case "sunday":
                console.log("free time");
                break;
            default:
                console.log("go...... and study first!!!!");
} */


/* // 13.Statements and expression
// an expression produce a " value"
// statements are comination of expressions and and sentences that all statements doesn't need to produce values, some are some are not

// example : 13+5; is expression

if(23>16){
    const str="23 is bigger thann 16" // expression
} // this all if block is statement it's like a complete sentesnce

// in templte literals will use only expressions, will not insert any staement inside  ${}
const nameNew='rohini';
console.log(`I'm ${2023-1997} years ol , and name is ${nameNew}`) */

// 14. ternary(conditional) operator
// syntax: condition ? "if condition true this will be executed" : "else this will be executed "

const age=10;

const drink= age>=19 ? console.log("drink wine"):console.log("drink water");

let drink2;

if(age>=19){
   drink2="wine"
}
else{
    drink2="water";
}
console.log(drink2); // instead of doing all these steps simply we can use ternary operator but in cases it will be not suggestable, " it is not replacement of if else" alternative 


