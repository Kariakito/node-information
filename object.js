var cowsay = require ("cowsay");

const person = { name:"Pilar"};

console.log(person.name);

console.log(cowsay.say({
    text : person.name ,
    e : "oO",
    T : "U "
}));


