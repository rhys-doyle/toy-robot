let _location = {
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
