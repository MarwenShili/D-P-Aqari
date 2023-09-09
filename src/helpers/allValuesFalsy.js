function allValuesFalsy(obj) {
  if (Object.keys(obj).length === 0) {
    return true; // Object is empty, return true
  }
  let bol = false;
  for (const key in obj) {
    if (
      obj.hasOwnProperty(key) &&
      (obj[key] === "" ||
        +obj[key] === 0 ||
        obj[key] === "0" ||
        obj[key] === "no" ||
        obj[key] === false ||
        obj[key] === null ||
        obj[key] === "0.00" ||
        !obj[key])
    ) {
      bol = true;
    } else {
      bol = false;
      break;
    }
  }
  return bol;
}
export { allValuesFalsy };
