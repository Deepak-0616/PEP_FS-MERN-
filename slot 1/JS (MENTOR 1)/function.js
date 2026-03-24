console.log("FUNCTIONS:");

function addd() {
  console.log("Adding function");
}

function add(a, b) {
  return a + b;
}

console.log(add(5, 10));
addd();

let sub = function (c, d) {
  return c - d;
};
console.log(sub(10, 5));

let result = (e, f) => e + f;
console.log(result(5, 12));

console.log("INNER & OUTER FUNCTIONS: ");

var g = 10,
  h = 3;

let result1 = (g, h) => {
  return g - h;
};

console.log(typeof result1);
console.log(result1(g, h));

function outerfunction() {
  console.log("This is outer function");

  function innerfunction() {
    console.log("This is inner function");
    console.log("The sum of g and h is " + result(g, h));
  }

  innerfunction();
}
outerfunction();
console.log("FUNCTION WITH DEFAULT PARAMETERS:");
function getemployee(ename = "user", eid = 5) {
  console.log("Employee name is " + ename);
  console.log("Employee id is " + eid);
}
getemployee("deepak");
getemployee();
getemployee("deepak", 12345);
getemployee(undefined, 12345);

console.log("FUNCTION WITH FUNCTION PARAMETERS:");

function addd(g,h)
{
    return g+h;
}
function subb(g,h)
{
    return g-h;
}
function totadd(d,e)
{
    return d + e;
}
console.log(totadd(addd(5,10),subb(10,5)));

function outerfunction1()
{
    let x="This is outer function 1";
    console.log(typeof(x));
   function innerfunction1()
    {
        console.log("This is inner function 1");
        return x;
    }
    return innerfunction1;
}
let innerfun = outerfunction1();
console.log(innerfun());


console.log("GENERATOR FUNCTIONS:");

function* generatorfun()
{
    yield "Hello";
    yield "World";
    yield 21;
    yield null;
}   

console.log(generatorfun());
let generators = generatorfun();


console.log(generators.next().value);
console.log(generators.next());
console.log(generators.next());
console.log(generators.next());
console.log(generators.next());