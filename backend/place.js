const place = (x, y, f) => {
  if (x < 0 || x > 5 || (y < 0 || y > 5)) {
    console.log("Invalid Place");
  } else {
    return {
      x: x,
      y: y,
      f: f
    };
  }
};

module.exports = place;
