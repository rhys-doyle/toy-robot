const place = require("./place.js");
const move = require("./move.js");
const rotate = require("./rotate.js");
const report = require("./report.js");

let location = {
  x: undefined,
  y: undefined,
  f: undefined
};

document.querySelector(".place").forEach(element => {
  element.onClick = () => {
    location.x = parseInt(document.getElementById("x-coordinate").value, 10);
    location.y = parseInt(document.getElementById("y-coordinate").value, 10);
    location.f = parseInt(document.getElementById("facing").value, 10);
    location = place(loaction);
  };
});

document.querySelector(".rotateButton").forEach(element => {
  element.onClick = event => {
    let whichWay = event.target.textContent;
    location = rotate(loaction, whichWay);
  };
});

document.querySelector(".move").forEach(element => {
  element.onclick = () => {
    location = move(location);
  };
});

document.querySelector(".report").forEach(element => {
  element.onClick = () => {
    report(location);
  };
});
