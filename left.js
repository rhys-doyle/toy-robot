const left = input => {
  const facing = input.f;
  let output = input;
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

module.exports = left;
