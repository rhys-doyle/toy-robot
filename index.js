let _location = {
  x: undefined,
  y: undefined,
  f: undefined
};

const leftValues = ["0%", "20%", "40%", "60%", "80%"];
const topValues = ['80%', '60%', '40%', '20%', '0%'];
const orientation = [180, 270, 360, 90, 0];
let currentAngle = undefined;
const compass = ['North', 'East', 'South', 'West'];

const place = ({x, y, f}) => {
  if (x < 0 || x > 5 || (y < 0 || y > 5)) {
    console.log("Invalid Place");
  } else {
    console.log("x", x);
    return {
      x: x,
      y: y,
      f: f
    };
  }
};
