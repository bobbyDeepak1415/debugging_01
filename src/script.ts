function printName(firstName: string, lastName: string) {
  console.log(`${firstName} ${lastName}`);
  return `${firstName} ${lastName}`;
}

function printTimes(n: number, value: string) {
  debugger;
  for (let i = 0; i <= n; i++) {
    console.log(value);
  }
}

debugger;

setTimeout(() => {
  console.log("setTimeout");
}, 1000);

document.addEventListener("click", () => {
  console.log("clicked");
});

function main() {
  printName("Leo", "Kingman");
}

function test() {
  printTimes(4, "Bobby");
}

main();

test();
