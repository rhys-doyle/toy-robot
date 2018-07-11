const inputCheck = input => {
  if (input.x === undefined || input.y === undefined || input.f === undefined) {
    throw new Error("Input is undefined");
  }
};

module.exports = inputCheck;
