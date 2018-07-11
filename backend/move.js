const importCheck = require("./inputCheck");

const move = input => {
  const facing = input.f;
  let output = input;

  inputCheck(output);

  if (
    (output.x === 0 && output.f === "3") ||
    (output.x === 4 && output.f === "1") ||
    (output.y === 0 && output.f === "2") ||
    (output.y === 4 && output.f === "0")
  ) {
    console.log("Invalid move command");
    return output;
  } else {
    switch (facing) {
      case "0":
        output.y = output.y + 1;
        break;
      case "1":
        output.x = output.x + 1;
        break;
      case "2":
        output.y = output.y - 1;
        break;
      case "3":
        output.x = output.x - 1;
    }
    return output;
  }
};
module.exports = move;
