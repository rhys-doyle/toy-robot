const right = input => {
  const facing = input.f;
  let output = input;
  switch (facing) {
    case "North":
      output.f = "East";
      break;
    case "East":
      output.f = "South";
      break;
    case "South":
      output.f = "West";
      break;
    case "West":
      output.f = "Norht";
  }
  return output;
};

module.exports = right;
