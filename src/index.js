let Button = document.querySelector(".btn");
let boxOne = document.querySelector(".Box-1");
Button.addEventListener("click", () => {
  console.log("click");
  boxOne.style.background = "red";
});
