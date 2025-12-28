const chngBtn = document.querySelector("button");
const textToChange = document.getElementById("myTexts");

chngBtn.addEventListener("click", function () {
  console.log('here')
  textToChange.innerText = "doing well learning debugging";
});
