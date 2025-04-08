

//  IN common js

//named export

function add(a,b){
    return a + b;
};

function subtract(a,b){
    return a -b;
};

function multiply(a ,b){
    return a * b;
};

module.exports  = {
    add,
    subtract,multiply,
};                                      // if we have one func to export we still write module.exports


