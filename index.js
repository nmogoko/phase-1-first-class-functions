function receivesAFunction (sampleFunction) {
    sampleFunction()
}
function returnsANamedFunction() {
    return returnsANamedFunction;
};
returnsANamedFunction();

function returnsAnAnonymousFunction() {
    return function(){};
}
returnsAnAnonymousFunction();