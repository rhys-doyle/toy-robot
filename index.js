const place = require("./place.js");
const move = require("./move.js");
const left = require("./left.js");
const right = require("./right.js");
const report = require("./report.js");

let location = {
  x: undefined,
  y: undefined,
  f: undefined
};

location = place(1, 2, "East");
location = move(location);
location = move(location);
location = left(location);
location = move(location);
report(location);
