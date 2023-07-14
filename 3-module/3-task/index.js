function camelize(str) {
  let f = str
  .split("-")
  .map(item => item.slice(0, 1).toUpperCase() + item.slice(1))
  .join("")
  return f.slice(0, 1).toLowerCase() + f.slice(1)
}
