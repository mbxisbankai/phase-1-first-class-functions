function mission(){
    return('Pass the tests.');
}

function receivesAFunction(callback){
    callback();
}
receivesAFunction(mission);

function returnsANamedFunction(){
    return function assigned(){
        console.log('Returned function');
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("Anonymous.");
    }
}