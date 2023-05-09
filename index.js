let screen = document.getElementById("screen");

buttons = document.querySelectorAll("button");
let BlockValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;

    if (buttonText == "X") {
      buttonText = "*";
      BlockValue += buttonText;
      screen.value = BlockValue;
    } else if (buttonText == "C") {
      BlockValue = "";
      screen.value = BlockValue;
    } else if (buttonText == "=") {
      screen.value = eval(BlockValue);
    } else {
      BlockValue += buttonText;
      screen.value = BlockValue;
    }
  });
}
