// 

function sayHello(){
   // console.log("i would like to say hello");

}

setTimeout(()=>{
    sayHello();

} , 4000);

//console.log("chaicode");

for( let index = 0; index<10; index++){
    //console.log(index);
}

//closures


function  Outer(){
    let counter = 4;
    return function(){
        counter++;
        return counter;
    }
   
    
}

// let increment = Outer();
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());


// promises

function fetchData(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            let success = true;
            if(success){
                resolve("data fetched sucessfully")

            }else{
                reject("Error fetching data")
            }
        } , 3000);

    });

}
fetchData()
//.then( (data) => console.log(data))
//.catch((Error) => console.log(Error))


// protoyple inheritance

function Person(name){
    this.name = name;

}
Person.prototype.greet = function(){
   // console.log(`Hello my name is ${this.name}`)
};

let shivii  = new Person("shivani");
//shivii.greet();



