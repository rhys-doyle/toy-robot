const inputCheck = require("./inputCheck");

/*const left = input => {
  const facing = input.f;
  let output = input;
  importCheck(output);

  switch (facing) {
    case "North":
      output.f = "West";
      break;
    case "East":
      output.f = "North";
      break;
    case "South":
      output.f = "East";
      break;
    case "West":
      output.f = "South";
  }
  return output;
};

module.exports = left; */

const rotate = (input, whichWay) => {
  const facing = input.f;
  let output = input;
  inputCheck(output);
  let direction = whichWay;

  switch (direction) {
    case "Left":
      if (facing != 0) {
        output.f = facing - 1;
      } else {
        output.f = facing + 3;
      }
      break;
    case "Right":
      if (facing != 3) {
        output.f = facing + 1;
      } else {
        output.f = facing - 3;
      }
  }
  return output;
};

module.exports = rotate;
