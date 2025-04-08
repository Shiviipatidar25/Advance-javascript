// function fetchUserData(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(() => {
//             resolve({name:"chaicode" , URL:"https//chaichode.com"})
            
//         },3000);

//     })
   
// }

// async function getUserData() {
//     try {
//         console.log("fetching user data...");
//         const userData = await fetchUserData();
//         console.log("User data:" ,userData);
        
//     } catch (error) {
//         console.log("Error fetching data", error);
        
//     }
// }

// getUserData();



// solve it with reject..........................................

// function fetchUserData(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(() => {
//             reject({name:"chaicode" , URL:"https//chaichode.com"})
            
//         },3000);

//     })
   
// }

// async function getUserData() {
//     try {
//         console.log("fetching user data...");
//         const userData = await fetchUserData();
//         console.log("User data:" ,userData);
        
//     } catch (error) {
//         console.log("Error fetching data", error);
        
//     }
// }

// getUserData();


function fetchPostData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("post data fetched")
        }, 2000);

    })
}

function fetchCommentData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("fetch comment data")
        }, 3000);

    })
}

async function getBlogData(){
    try {
        console.log("fetching blog data...");
        // const blogData  = await fetchPostData();
        // const commentData = await fetchCommentData();
        
        // also do this with promise .all 
         
        const [blogData, commentData] = await Promise.all([ fetchPostData(), fetchCommentData(),])
        console.log(blogData);
        console.log(commentData);

        console.log("fetch complete.");

    } catch (error) {
        console.log("Error blog data" , error)
        
    }
}

getBlogData();


//.................................... bind() call() apply()

// THIS and Binding Context
// Task 1: Bind the Correct Context

// Create an object person with properties name and a method introduce().
//  Use the bind() method to ensure the method works correctly when passed to another function.



// Task 2: Using call() to Invoke a Function with Different Contexts

// Write a function introduce() that uses the this keyword to introduce a person by name. 
// Then, invoke introduce() using call() to introduce different people with the same function.



// Task 3: Using apply() to Pass Arguments with Context

// Create a function sum() that accepts two numbers and uses this to access a multiplier value. 
// Then, invoke sum() with different contexts using apply(), passing the numbers as an array.




// // Task 1
// const person = {
//     name: 'Alice',
//     introduce() {
//       return `Hi, my name is ${this.name}`;
//     }
//   };
   
//   const boundIntroduce = person.introduce.bind(person);
   
//   // Task 2
//   function introduce() {
//     return `Hi, my name is ${this.name}`;
//   }
   
//   const person1 = { name: 'Alice' };
//   const person2 = { name: 'Bob' };
   
//   introduce.call(person1);
//   introduce.call(person2);
   
//   // Task 3
//   function sum(a, b) {
//     return (a + b) * this.multiplier;
//   }
   
//   const context1 = { multiplier: 2 };
//   const context2 = { multiplier: 3 };
   
//   sum.apply(context1, [5, 10]);
//   sum.apply(context2, [5, 10]);

// Async-Await and Promise.all.........................................



// Task 1: Async-Await with Promise.all

// Create two functions fetchUser() and fetchPosts(), both returning promises that resolve in 1 second.

// Use async-await and Promise.all to fetch both simultaneously and log the results as part of fetchAllData()



// Task 2: Error Handling in Async/Await with Promise.all

// Write two functions fetchSuccess() and fetchFailure(), where fetchSuccess() returns a promise that resolves successfully after 1 second, 
// and fetchFailure() returns a promise that rejects with an error after 1 second.

// Create a function handlePromises() that calls both functions using Promise.all 
// and handles success and failure cases.



// Task 3: Timeout with Async/Await and Promise.race

// Create a function fetchWithTimeout(promise, timeout) that takes a promise and a timeout value in milliseconds. 
// Use Promise.race() to return the result of the promise if it resolves within the timeout, otherwise return "Timeout exceeded".


// // Task 1
// function fetchUser() {
//     return new Promise((resolve)=>{
//         setTimeout(() =>{
//            resolve("User data") 
//         }, 1000);
        
//     })
// }

// function fetchPosts() {
//     return new Promise((resolve)=>{
//         setTimeout(function() {
//            resolve("Posts data") 
//         }, 1000);
//     });
// }

// async function fetchAllData() {
//     try {
        
//         const[user , posts] = await Promise.all([fetchUser(),fetchPosts()])
//         console.log(user);
//         console.log(posts);
//     } catch (e) {}
    

// }


// // Task 2
 
// function fetchSuccess() {
//   return new Promise(resolve => setTimeout(() => resolve('Success'), 1000));
// }
 
// function fetchFailure() {
//   return new Promise((_, reject) => setTimeout(() => reject('Error occurred'), 1000));
// }
 
//   try {
//     console.log(success);
//   } catch (error) {
//     console.log(error);
// }
// async function handlePromises() {
//   try {
//     const [success, failure] = await Promise.all([fetchSuccess(), fetchFailure()]);
//     console.log(success);
//   } catch (error) {
//     console.log(error);
//   }
// }



// // Task 3
// function fetchWithTimeout(promise, timeout) {
//   const timeoutPromise = new Promise((_, reject) => 
//     setTimeout(() => reject('Timeout exceeded'), timeout)
//   );
  
//   return Promise.race([promise, timeoutPromise]);
// }
 
// function fetchData() {
//   return new Promise(resolve => setTimeout(() => resolve('Data fetched'), 3000));
// }
