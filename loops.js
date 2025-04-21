// Learn the concept of oops 


// let sum = 0;
// let i = 1;
// while (i<=5) {
//     sum += i; // sum  = sum+1
//     i++;
    
// }
// console.log(sum);

// let countdown = [];
// let j = 5;
// while (j>0) {
//     countdown.push(j);
//     j--;
    
// }
// console.log(countdown);

//----------------------------------
// let teacollection = [];
// let tea;
// do{
//     tea = prompt(`enter your favourite tea(type "stop" to finish)` );  // dowhile loop
//     if(tea !== "stop")
//     {teacollection.push(tea);                   // run this code in the console
//     }
    

// }while(tea !== "stop");


// let total = 0;
// let k  = 1;
// do{
//     total += k 
//     k++;

// }while(k <= 3);
// console.log(total);

// let multiplynumber = [];
// let numbers = [2,4,6];
// for (let i = 0; i < numbers.length;i++) {

//     //  takenumber = numbers[i]*2;
//     //  multiplynumber.push(takenumber);

//     multiplynumber.push((numbers[i]*2));

    
// }
// console.log(multiplynumber);

//-----------------------------------------

// let Cities = [ "london"  , "newyork" , "tokyo", "paris"];
// let cityList = [];
// for( let i  = 0; i<Cities.length;i++){
//     const mycity = Cities[i];
//     cityList.push(mycity);


// }
// console.log(
//     cityList
// );

// let teas = ["green tea", "black tea" , "chai" , "oolong tea"];
// let selectedteas = [];                                                // create array and stops the loop when it find chai and all the 
// for(let i = 0; i<teas.length;i++){                                    //before  element should save to another array
//     if(teas[i] === 'chai'){
//         break;
       
//     }
//     selectedteas.push(teas[i]);
// }
// console.log(selectedteas);



//--------------------------------------------------------

//create array store ciites then use for loop skip the paris city and store them in the new array

// let cities = ["london" , "newyork" , "paris" , " berlin"];
// let visitedcities = [];
// for(let i = 0; i < cities.length; i++)
//     {
//         if( cities[i] === "paris") { 
//             continue;
//         }
//     visitedcities.push(cities[i]);
// }
// console.log(visitedcities);
  

//--------------------------------------------------

 //               for of loop

//  let numbers = [1,2,3,4,5];
//  let smallnumers = [];

//  for (const num of numbers){
//      if( num === 4){ 
//         break;
//      }
    
//         smallnumers.push(num);
    
//  }
//  console.log(smallnumers);
//-------------------------------------------

// let teas = ["chai" , "green tea" , "herbal tea" , "black tea"];
// let preferredteas = [];
// for (const tea of teas) {
//     if( tea === "herbal tea"){ 
//         continue;
//     }
//     preferredteas.push(tea);
    
// }
// console.log(preferredteas);//--------------------------


                                                
//for in loop

// let worldCities = {
//     sydney: 5000000,
//     tokyo: 9000000,
//     berlin:3500000,
//     paris:2200000,

// } ;

//------------------------------------------------------
      
// let largeCities = {};
//  for (const city in worldCities) {
//     if( worldCities[city] < 3000000){
//         continue;
//     }
//     largeCities[city] = worldCities[city];
       
// }

//     console.log(largeCities);




//----------------------------------------------------------
// foreach loop

// let teacollection = ["earl grey" , " oolong tea" , "chai" , "green tea"];
// let availabletea = [];

// teacollection.forEach(function(tea) {
//     if( tea === "chai")
//         {
//             return;

//         }
//         availabletea.push(tea);


    
// });
// console.log(availabletea);

//-----------------------------------------------------------

// let citiesvisit = ["berlin" , " tokyo" , "sydney" , "paris"];
// let traveledcity = [];

// citiesvisit.forEach(function(city) {
//     if( city === "sydney"){
//         return;
//     }
//     traveledcity.push(city);
    
// });
// console.log(traveledcity);


// let numbers =[2,5,7,9];
// let storenumbers = [];
// for(let i = 0 ; i<numbers.length;i++){
//     if(numbers[i] === 7){
//         continue;
        
//     }
//     storenumbers.push((numbers[i]*2));
// }
// console.log(storenumbers);
//----------------------------------------------------------

// let myTeas = ["chai" , "green tea", "black tea" , " jaismin tea" , " herbal tea"];

// let shortTeas = [];

// for (const tea of myTeas) {
//     if ( tea.length > 10){ 
//         break;
//     }
//     shortTeas.push(tea);
    
// }
// console.log(shortTeas);
