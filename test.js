function sayHello(subject) {
    return `Hello ${subject}`;
}

function greeting() {
   return sayHello;
}

var f = greeting()('Mickey');

console.log(f);