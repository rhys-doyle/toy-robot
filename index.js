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

const inputCheck = input => {
  if (input.x === undefined || input.y === undefined || input.f === undefined) {
    throw new Error("Input is undefined");
  }
};

const move = input => {
  const facing = input.f;
  let output = input;

  inputCheck(output);

  if (
    (output.x === 0 && output.f === 3) ||
    (output.x === 4 && output.f === 1) ||
    (output.y === 0 && output.f === 2) ||
    (output.y === 4 && output.f === 0)
  ) {
    console.log("Invalid move command");
    return output;
  } else {
    switch (facing) {
      case 0:
        output.y = output.y + 1;
        break;
      case 1:
        output.x = output.x + 1;
        break;
      case 2:
        output.y = output.y - 1;
        break;
      case 3:
        output.x = output.x - 1;
    }
    return output;
  }
};

const report = input => {
  let output = input;
  document.querySelector('.reported').textContent = `The toy robot is facing ${compass[output.f]} at position x = ${(output.x) + 1} and y = ${(output.y) + 1}.`;
}

document.querySelectorAll('.xValue').forEach(element => {
  element.onclick = event => {
    document.querySelector('.xActive').classList.remove('xActive');
    event.target.classList.add('xActive');
  }
});

document.querySelectorAll('.yValue').forEach(element => {
  element.onclick = event => {
    document.querySelector('.yActive').classList.remove('yActive');
    event.target.classList.add('yActive');
  }
});
