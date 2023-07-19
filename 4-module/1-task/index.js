function makeFriendsList(friends) {
  let ul = document.createElement("ul");
  document.body.append(ul);
  for (let i = 0; i < friends.length; i++) {
    let names = `${friends[i].firstName} ${friends[i].lastName}`;
    let liAll = document.createElement("li");
    liAll.innerHTML = names;
    ul.append(liAll);
  } 
}