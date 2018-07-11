const report = input => {
  let output = input;
  switch (output.f) {
    case 0:
      output.f = "North";
      break;
    case 1:
      output.f = "East";
      break;
    case 2:
      output.f = "South";
      break;
    case 3:
      output.f = "West";
  }
};

module.exports = report;
