// // call stack
// function call() {
//   console.log('call');
// }

// function call2() {
//   console.log('call2');
//   call();
// }

// call2();
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