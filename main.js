// console.log(`hello`);
// console.log(`i like 0`);


// window.alert(`this is an alert`)
// window.alert(`i like 0`)

// document.getElementById("myH1").textContent = `hello`
// document.getElementById("myP").textContent = `i like 0`

// this is a comment

/*
this
is
a
comment
*/

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


//variable = A comtainer that stores a valu. bhaves as if it were the value it contains.

//1. declaration   let x;
//2. assignment    x = 100;

// let x 
// x = 12300;

// console.log(x);

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;
// console.log(`you are ${age} years old`);
// console.log(`the price is $${price}`);
// console.log(`your gpa is: ${gpa}`);


// let firstName = "bro";
// let favoriteFood = "susshi";
// let email = "bro123@gmail.com";


// console.log(typeof firstName);
// console.log(`your name is ${firstName}`);
// console.log(`you like ${favoriteFood}`);
// console.log(`your email is ${email}`);


// let online = true;
// let Forsale = false;
// let isStudent = true;

// console.log(`bro is online: ${online}`);
// console.log(`is this car for sale: ${Forsale}`);
// console.log(`Enrolled: ${isStudent}`);

// let fullname = "Ankit Kargupta";
// let age = 25;
// let student = false;

// document.getElementById("p1").textContent = `your full name is ${fullname}`;
// document.getElementById("p2").textContent = `you are ${age} years old`;
// document.getElementById("p3").textContent = `enrolled: ${student}`;


//arithmetic operator = opewrands (value, variables, et)
//                      operatoes ( + - * /)
//                      ex 11 = x + 5;
// let student = 30
// student = student + 1
// student = student - 1
// student = student * 3
// student = student / 2
// student = student ** 2
// student = student % 

// student += 1
// student -= 1
// student *= 2
// student /= 2
// student **= 2
// student %= 2

// student++;
// student--

// let result = 1+ 2 * 3 + 4 ** 2;


//how to accept user input

//1. easy way  = window promt
//2. professional way = html textbox


// let username;

// username = window.prompt("whats your user name?")

// console.log(username);

// let username;

// document.getElementById("mysubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myh1").textContent = `hello ${username}`
    
// }


// type conversion = change the datatype of a value to another 
//                   (string, boolean, number)


// let age = window.prompt("how old are you")
// age = Number(age)
// age+=1;

// console.log(age, typeof age);

// let x ;
// let y ;
// let z ;

// x = Number(x)
// y = String(y)
// z = Boolean(z)

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);



//const = a variable that can't be changed

// const pi = 3.14159;
// let radius;
// let circumferance;

// // radius = window.prompt(`enter the radius of a circle`)




// document.getElementById("mySubmit").onclick = function(){
//     radius = document.getElementById("myText").value
//     radius = Number(radius)
//     circumferance = 2 * pi * radius
//     document.getElementById("myH3").textContent = `the answer is: ${circumferance}cm`
// }

//math - built in object that provieds a collection of properties and methods


// console.log(Math.PI);
// console.log(Math.E);

// let x = 10
// let y = 2
// let z

// // z = Math.round(x)
// // z = Math.floor(x)
// // z = Math.ceil(x)
// // z = Math.trunc(x)
// // z = Math.pow(x, y)
// // z = Math.sqrt(x)
// z = Math.log(x)

// console.log(z);



//IF STATEMENT = if a condition is true, execute some code / if not, do something else

// let age = 12

// if(age >= 18){
//     console.log(`you are old enouge`);  
// }
// else{
//     console.log(`you mush be 18+ to enter this site`);
    
// }

// let time = 14

// if(time < 12){
//     console.log(`good morning`);
    
// }
// else{
//     console.log(`good afternoon`);
    
// }

// let isStudent = true
// if(isStudent){
//     console.log(`you are a student`);
    
// }
// else{
//     console.log(`you are not a student`);
    
// }

// let age = 18
// let hasLicense = true

// if(age >= 16){
//     console.log(`you are old enought to drive`)

//     if(hasLicense){
//         console.log(`you have your license!`);
        
//     }
//     else{
//         console.log(`you do not have your licience`);
        
//     }
// }
// else{
//     console.log(`you must be 16+ to have one`);
    
// }

// let age = 0

// if (age >= 100) {
//     console.log(`you are too old to enter  this site`);
    
// }
// else if(age == 0){
//     console.log(`you cant enter are are just born!!!!`);
    
// }
// else if(age >= 18){
//     console.log(`you arer old enoung to enter this site`);
    
// }
// else if (age < 0) {
//     console.log(`your age cant be below 0`);
    
// }
// else{
//     console.log(`you must be 18+ to enter this site`);
    
// }




//ternary operator - a shortcut to if{} and else{} statements helps to assign a variable based on a condition 
//condition ? codeIfTrue : codeIf False;

// let age = 1
// let message = age >= 18 ? "your an adult" : "you are a minor"

// console.log(message);

// let time = 9;
// let greeting = time < 12 ? "good morning sunsine" : "fuck you nigga"

// console.log(greeting);

// let isStudent = true 
// let message = isStudent ? "u are a student" : "you are not a student"

// console.log(message);



// let purchaseAmout = 99
// let discount = purchaseAmout >= 100 ? 10 : 0
// console.log(`your total is  $${purchaseAmout - purchaseAmout * (discount/100)}`);


// let day = 2

// switch(day){
//     case 1:
//         console.log(`it is monday`);
//         break
//         case 2:
//             console.log(`it is tuesday`);
//             break  
//             case 3:
//                 console.log(`it is wednesday`);
//                 break 
//                 case 4:
//                     console.log(`it is thusday`);
//                     break
//                     case 5:
//                         console.log(`it is friday`);
//                         break
//                         case 6:
//                             console.log(`it is saturday`);
//                             break
//                             case 7:
//                                 console.log(`it is sunday`);
//                                 break
//                                 default:
//                                     console.log(`${day} is not a day`);
                                    
                
        
// }


// let testScore = 6
// let lettergrade 

// switch(true){
//     case testScore >= 90:
//         lettergrade = "A";
//         break
//         case testScore >= 80:
//             lettergrade = "B";
//             break
//             case testScore >= 70:
//                 lettergrade = "c";
//                 break
//                 case testScore >= 60:
//                     lettergrade = "D";
//                     break
//                     default:
//                         lettergrade = "F"
    
// }

// console.log(lettergrade);


// string methods = allow you to manipulate and work with text (string)

// let username = "BroCode"

// let result = username.includes(" ")

// if(result){
//     console.log(`your username cant end with ' '`);
// }
// else{
//     console.log(username);
    
// }

// let phoneNumber = 123-456-7890

// phoneNumber = phoneNumber.
// console.log(phoneNumber);



// string slicing = creating a substring from a portion of another string 
//                string.slice(string, end)

// const fullName = "Ankit Kargupta"

// let firstName = fullName.slice(0, 6)
// let lastName = fullName.slice(6)

// let firstChar = fullName.slice(0, 1)
// let lastCHAR = fullName.slice(-1)

// console.log(firstName);
// console.log(lastName);
// console.log(firstChar);
// console.log(lastCHAR);


// const fullName = "bro code"

// let firstName = fullName.slice(0, fullName.indexOf(" "))
// let lastName = fullName.slice(fullName.indexOf(" ") + 1)

// console.log(firstName);
// console.log(lastName);




// const email = "ankitkargupta@gmail.com"

// let username = email.slice(0, email.indexOf("@"))
// let extention = email.slice(email.indexOf("@") + 1)
// console.log(username);
// console.log(extention);




//method  chainig = calling onemethod after anothr in one continious line of code 
// let username = window.prompt("enter your username")
//-----------------no method chaining-----------------------



// username = username.trim();
// let letter = username.charAt(0)
// letter = letter.toUpperCase()

// let extraChars = username.slice(1)
// extraChars = extraChars.toLowerCase()
// username = letter + extraChars
// console.log(username);






// // ---------------------- method chaining ---------------------

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLocaleLowerCase()

// console.log(username);

//logical operators = user to combine or manipulate coolean values(true or false)

//                AND = &&
//                OR = ||
//                NOT = !

// const temp = -9

// if(temp <= 0 || temp > 30){
//     console.log(`weather is bad`);
    
// }
// else{
//     console.log(`good weather`);
    
// }

// const isSunny = true 

// if(!isSunny){
//     console.log(`it is cloudy`);
    
// }
// else{
//     console.log(`its not sunny`);
    
// }


// = assignment opertator 
// == comparison operator (compar if valus are equal)
// === strict equality operator (compare if datatypes are equal)
//  != ineuality operator 
// !== strict inequality operator


// const PI = 3.14

// if(PI != 3.14){
//     console.log(`that is not pie`);
// }
// else{
//     console.log(`pie`);
    
// }

// while loop = repeat some code WHILE some is true

// let username = ""

// while(username === "" || username === null){
//     username = window.prompt(`enter your name`)
// }
//  console.log(`hello ${username}`);
 
// let loggedin = false;
// let username;
// let password;


// while(!loggedin){
//     username = window.prompt(`enter your username`)
//     password = window.prompt(`enter your password`)

//     if(username === "myusuername" && password === "myPassword"){
//         loggedin = true
//         console.log(`you are loged in!!`);
//     }
//     else{
//         console.log(`invalid credentials`);
        
//     }
// }


// for loop = some code a LIMITED amount of times

// for(let i = 10; i > 0; i-=2){
//     console.log(i);
    
// }
// console.log(`happy new year`);

// for(let i = 1; i <= 20; i++){

//     if(i == 13){
//         break
//     }
//     else{
//         console.log(i);
        
//     }
    
// }

// number gussing game

// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum)

// console.log(answer);

// let attemps = 0
// let guess
// let running = true

// while (running) {

//    guess =  window.prompt(`guess a number between ${minNum} - ${maxNum}`)
//     guess = Number(guess)
//     if(isNaN(guess)){
//         window.alert(`pls enter a valiv number`)
//     }
//     else if (guess < minNum || guess > maxNum){
//         window.alert(`pls enter a valiv number`)
//     }
//     else{
//         attemps++
//         if(guess < answer){
//             window.alert(`your choice is too low`)
//         }
//         else if(guess > answer){
//             window.alert(`your choice is too high`)
//         }
//         else{
//             window.alert(`correct!!! the answer was ${answer} it took you ${attemps} attemps`)
//             running = false
//         }
//     }

// }

//function = A section of reusable code 
//           declare code once , use it whenever you want 
//           call the function to execute that code

// function happyBirthday(username,age){
//     console.log(`happy birthday toooooooooooo youu`);
//     console.log(`happy birthday toooooooooooo youu dear`);
//     console.log(`happy birthday toooooooooooo youu dear ${username}`);
//     console.log(`happy birthday toooooooooooo youu`);
//     console.log(`happy birthday toooooooooooo youu dear`);
//     console.log(`you are ${age} year age`);
// } 

// happyBirthday("Ankit", 25);

function add(x, y){
    let result = x + y
    return result
}
function subtract(x,y){
    return x - y
}
function multiply(x,y){
    return x * y
}
function devide(x,y){
    return x / y
}
function isEven(number){
    return number % 2 === 0 ? true : false
}
function isvalidEmail(email){
    if(email.includes("@")){
        return true
    }
    else{
        return false
    }
}


console.log(isvalidEmail("{brofake.com"));












































