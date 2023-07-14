function showSalary(users, age) {
  let ageFilter = users.filter(item => item.age <= age)
  let balance = ageFilter.map(item => item.balance);
  let name = ageFilter.map(item => item.name);
  return `${name[0]}, ${balance[0]}\n${name[1]}, ${balance[1]}`
}