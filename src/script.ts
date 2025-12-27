function printName(firstName: string, lastName: string) {
  console.log(`${firstName} ${lastName}`);
  return `${firstName} ${lastName}`;
}

function printTimes(n: number, value: string) {
  for (let i = 0; i <= n; i++) {
    console.log(value);
  }
}

printName("Leo", "Kingman");

printTimes(4, "Bobby");

document.addEventListener("click", () => {
  console.log("clicked");
});
