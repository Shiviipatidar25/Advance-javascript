 // making doc for learning purpose



// const readline = require("readline-sync");


// const product = {
//     name:'realme C51',
//     price:7888,
//     description: 'a high quality smart phone advance features',
//     reviews:[
//         {
//             user:'priyansh',
//             rating:4,
//             comment:'i am impressed by the performance'
//         },

//     ],
//     availability:true
// }


// access object property through (.)   


// const productName = product.name;
// const productPrice = product.price;
// const productDescription = product.description;

 // access object pro[erty by [] 

//  const productName = product['name'];
//  const productDescription = product['description'];
//  const productReviews = product['reviews'];


// console.log("product Name:",productName);
// //console.log("product Price:",productPrice);
// console.log("product Description:", productDescription);
// console.log("product reviews:",productReviews);


// let myName;
// myName = "shivani";
//  myName = "paul";
// let myAge = 26;
// {
// const myName = 'palak';
// console.log(myName);
// }



// console.log(myName);
// console.log(myAge);

// document.body.innerHTML = '';

// //create an appenr papragrapgh element

// const para1 = document.createElement('p');
// para1.textContent = myName;

// const para2 = document.createElement('p');
// para2.textContent = `IN 20 years , I will be ${myAge+20} `;

// document.body.appendChild(para1);
// document.body.appendChild(para2);


// const myInt = 5;
// const myFloat = 6.667;
// myInt;
// myFloat;
// console.log(typeof(myInt));
// console.log(typeof(myFloat));


// const lotsOfDecimal = 1.78956544332;
// lotsOfDecimal;
// const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
// twoDecimalPlaces;

// console.log(twoDecimalPlaces);

// let myNumber ="25";
// myNumber += 3;

// console.log(typeof(myNumber));
// console.log(myNumber);

// let myNumber = "25";
// myNumber = Number(myNumber)+1

// console.log(myNumber);

// 10 +7;
// 9*8;
// 60%5;

// const num1 = 10;
// const num2 = 20;

// const num4 =   9*num1;
//    const num5 = num1 ** 3;
//   num3 = num2/ num1;

//   console.log(num3);
//   console.log(num4);
//   console.log(num5);

//   let x = 5+10*3;
//   console.log(x);

//   let y = 45;
//   y++;
//   y;
//   console.log(y);





// let finalResult;
// let evenOddResult;

// let x = 20;
// let y = 12;
// let p = 15;
// let q = 25;

// let z = x+y;
// let fourth = q - p;
//  finalResult = z *fourth;
//  if  ((finalResult%2) === 0){
//     evenOddResult = `even number ${finalResult}`;
//     console.log(evenOddResult);

//  }else{
//     evenOddResult = `odd number ${finalResult}`;
//     console.log(evenOddResult);

// //  }

// let result = (7 +13 )/ (9 + 7 );

// let result2 = 100 /  (2 * 6 );
//  result = (result * result2);

// //let finalResult = result.toFixed(2); // tofixed always return string not a number
// // we used it like this

// let finalResult = Number(result.toFixed(2));

// if(typeof (finalResult) === 'string'){
//     console.log("data type id a string");
//     finalResult = Number(finalResult);
//     console.log(`the data type is changed to the number datatype  ${finalResult}`)

// }else{
    
//     console.log(`data type is already to number `);

// }






// let eleWeight = Number(readline.question("enter the weight of an elephant"+ " " ));
//   // readline is always return string 
//   // so yuo have make sure to change it whatever data type yuo want to enter


// let  mouseWeight = Number(readline.question(" Enter the weigth of a mouse"+" "));

// if(eleWeight > mouseWeight){
//     console.log(`yes elephant weight is always more then mouse , and the weight of Elephtant is ${eleWeight} kg` );
// }else{
//     console.log(`oops! `);
// }





// const browserType = "mozilla";

// if(browserType.includes("zilla")){
//     console.log("found zilla!");

// }else{
//     console.log("NO zilla here!");
// }

// const greetings = ['Happy birthdaty','Merry christmas my love ', 'a very happy christmas ti all the family','get well soon','you are all i want for christmas'];

// for (const greeting of greetings){
//     if (greeting.includes("christmas")){
//         console.log(greeting);
//     }
// }


// const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
// for (const city of cities){
// const newcities = city.toLowerCase();

// const firstLetter = newcities.slice(0,1);
// const capitAalized = newcities.replace(firstLetter,firstLetter.toUpperCase());
// //const result = capitAalized;
// console.log(capitAalized);

// }


// const machineCode = ['MAN675847583748sjt567654;Manchester Piccadilly',
//                   'GNF576746573fhdg4737dh4;Greenfield',
//                   'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//                   'SYB4f65hf75f736463;Stalybridge',
//                   'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

// for (const station of machineCode){
//     const code = station.slice(0,3);
//     const semiColon = station.indexOf(';');
//     const name = station.slice(semiColon + 1);
//     const result = `${code}:${name}`;
//     console.log(result);
// // }  


// // const quoteStart = 'Don t judge each day by the harvest you reap';
// // const quoteEnd = ' And dont judge a book by its cover ';
// // const finalQuote = quoteStart + quoteEnd;

// // console.log(finalQuote);

// let quote = " I do not like green eggs and ham. I do not like them, Sam-I-Am.";
// let substring  = "green eggs and ham";

// let quoteLength = quote.length;
// console.log(quoteLength);

// let index = quote.indexOf(substring);

// let revised  = quote.slice(0,index + substring.length) ;
//  console.log(revised);



// Arrays ____________________________________________________________

// const shopping = ["bread","milk","cheese","hummus","noodles"];
// console.log(shopping);
// console.log(shopping.length);//length of the array
// console.log(shopping[0]);//finding value through index
// shopping[0] = "tahini";//replace array
// console.log(shopping);


// const sequence = [1,1,1,2,3,4,5];
// const random = ["tree",756,[1,2,3]];
// console.log(sequence);
// console.log(random);
// random[2][2];
// console.log(random[2][2]); //index in index value


// const birds = ["parrot","falcon","Owl"];
// console.log(birds.indexOf("Owl")); // finding out the index value 
// console.log(birds.indexOf("rabbit"));//bcz rabbit is nor present in the array

// const cities = ["Manchester","Liverpool"];
// cities.push("cardiff"); // to add items in array in last of array
// console.log(cities);
// cities.pop([0]);//tp remove item from array  in last  pop method count index in reverse of array
// console.log(cities);

// cities.unshift("LA"); // to add item from starting of an array
// console.log(cities);

// cities.shift(); // index no doesnt matter in pop or shift method 
// // shift use to remove itme from starting of an element
// console.log(cities);
// //we can use splice method to remove item through index

// cities.splice(0, 2); // first argument is where to start removing item , and second for how many item should removed
//  ///0 index and 2 item // means it should be an empty array

// console.log(cities);

// const cities = ["Manchester","Liverpool","Edinburgh","Carlisle"];
// const index = cities.indexOf("Liverpool");
// if(index !== -1){
//     cities.splice(1, 2);

// }
// console.log(cities);

// //accessing every element

// const birds = ["parrot","falcon","owl"];
// for (const bird of birds){
//     console.log(bird);
// }

// function double(number){
//     return number*2;
// }
// const numbers = [5,3,4,5,6];
// const doubled = numbers.map(double);
// console.log(doubled);

// function isLong(city){
//     return city.length>8;
// }
// const cities = ["London","Liverpool","Totnes","Easter"];
// const longer = cities.filter(isLong);
// console.log(longer);

// const data = "Machester , london, liverpool,belgium, leeds , canada";
// const cities = data.split(",");
// //console.log(cities);
// console.log(cities.length);
// console.log(cities[0]);
// console.log(cities[1]);
// console.log(cities);
// // const reverse = data.reverse();  //data is a string  and .reverse() is an array method so it cant be reverse
// const reverse =  cities.reverse();
//  console.log(reverse);
// cities[cities.length - 1];//last item in the array
// const commaSeparated = cities.join(",");
// console.log(commaSeparated);



// const dogName = ["Rocket" , "false", "Bella" , "Slluger"];
//  const dog = dogName.toString();
//  console.log(dog);
//  console.log(dogName);



//  const study = "welcom to javascript";
//  const diff = [...study];
//  console.log(diff);

// const study = "welcome to javascript";
// const diff = study.split("");
// console.log(diff);

// const study = "welcome to javascript";
// const diff = study.split(" ");
// console.log(diff);


// const study = "code";
// const diff = Array.from(study);
// console.log(diff);

// const study = "coding is fun! 100% sure." ;
// const diff = study.match(/\w+/g);
// console.log(diff);



// const colors = ["red" , "blue", "green"];
// const color  = colors.join("|");
// console.log(color);

// const number = [100 , 200 , 300];
// const add = number.join("-");
// console.log(add);

// const convert = ["java","python","c++"];
// console.log(JSON.stringify(convert));

// const pet = ["cat","dog","fish"];
// console.log(pet.toString());




// const birds = ["parrot","falcons", "Eagles","Emus","Caracus","Egrets"];

// const eagle = birds.indexOf("Eagles");
// if(eagle !== -1){
//     birds.splice(eagle,1);

// }

// const ebirds = [];
// for(let bird of birds){
//     if(bird.startsWith("E")){
//         ebirds.push(bird);
//     }
// }
// console.log(ebirds);






























   
                  

                  



















