// call stack
function call() {
  console.log('call');
}

function call2() {
  console.log('call2');
  call();
}

call2();
// console.log('end');

// event loop
setTimeout(() => {
  console.log('timeout');
}, 0);

console.log('end');

// loop
let i = 0;
while (i < 1000000000) {
  i++;
  console.log('loop finished');
}
console.log('loop finished');
    // output

// end
// loop finished
// loop finished
// timeout

// Code for learning loops

// For loop example
for (let j = 0; j < 5; j++) {
  console.log(`For loop iteration: ${j}`);
}

// While loop example
let k = 0;
while (k < 5) {
  console.log(`While loop iteration: ${k}`);
  k++;
}

// Do-while loop example
let m = 0;
do {
  console.log(`Do-while loop iteration: ${m}`);
  m++;
} while (m < 5);  
