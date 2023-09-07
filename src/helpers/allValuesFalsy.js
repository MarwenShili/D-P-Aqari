function allValuesFalsy(obj) {
  if (Object.keys(obj).length === 0) {
    return true; // Object is empty, return true
  }
  for (const key in obj) {
    if (
      obj.hasOwnProperty(key) &&
      (obj[key] === "" ||
        obj[key] === 0 ||
        obj[key] === "0" ||
        obj[key] === "no" ||
        obj[key] === false)
    ) {
      return true;
    }
  }
  return false;
}
export { allValuesFalsy };
