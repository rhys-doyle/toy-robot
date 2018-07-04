const move = input => {
  const facing = input.f;
  let output = input;
  if (
    (output.x === 0 && output.f === "West") ||
    (output.x === 4 && output.f === "East") ||
    (output.y === 0 && output.f === "South") ||
    (output.y === 4 && output.f === "North")
  ) {
    console.log("Invalid move command");
    return output;
  } else {
    switch (facing) {
      case "North":
        output.y = output.y + 1;
        break;
      case "East":
        output.x = output.x + 1;
        break;
      case "South":
        output.y = output.y - 1;
        break;
      case "West":
        output.x = output.x - 1;
    }
    return output;
  }
};
module.exports = move;
