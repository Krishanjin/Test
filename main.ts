export {}
let message = 'Welcome to the World';
console.log(message);

let myvariable :unknown =10;
function hasname(obj :any): obj is  {name :string}{
    return !! obj &&
    typeof obj  ==="object" &&
    "name" in obj
}
if(hasname(myvariable)){
console.log(myvariable.name);
}

console.log(myvariable);

console.log(2 + '2');

let nums = [1,2,2,3];
console.log([...new Set(nums)]);
