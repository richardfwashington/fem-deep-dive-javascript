// TODO: define polyfill for `Object.is(..)`

if(!Object.is || true) { // Remove || true for actual polyfill use
    Object.is = function (isThis, theSameAsThis) {
        console.log(isThis + ' ' + theSameAsThis);
        if(isItNaN(isThis) && isItNaN(theSameAsThis)) {            
            return true;           
        } else if(isItNegZero(isThis) || isItNegZero(theSameAsThis)) {
            return isItNegZero(isThis) && isItNegZero(theSameAsThis);
        } else if (isThis === theSameAsThis) {
            return true;
        }

        return false;

        function isItNegZero(x) {
            return x === 0 && (1/x) === -Infinity
        }

        function isItNaN(x) {
            return x !== x;
        }
    }
}

// tests:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);