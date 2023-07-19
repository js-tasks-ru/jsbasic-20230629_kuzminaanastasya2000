function camelize(str) {
  return str
    .split("-")
    .map((part, index) => {
      if (index === 0) {
        return part
      } else {
        return part.slice(0, 1).toUpperCase() + part.slice(1)
      }
    })
    .join("");
}
