function allValuesFalsy(obj) {
  for (const key in obj) {
    if (
      obj.hasOwnProperty(key) &&
      (obj[key] === "" ||
        obj[key] === 0 ||
        obj[key] === "0" ||
        obj[key] === "no" ||
        obj[key] === false)
    ) {
      return false;
    }
  }
  return true;
}
export { allValuesFalsy };
