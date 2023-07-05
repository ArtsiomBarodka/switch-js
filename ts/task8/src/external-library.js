export function User(id, name, email) {
  this.id = id;
  this.name = name;
  this.email = email;
}

const users = new Map([
  [1, new User(1, "Artsiom", "email")],
  [2, new User(2, "Poul", "email")],
  [3, new User(3, "John", "email")],
]);

export function getUser(id) {
  return users.get(id);
}

export function getUsers() {
  return Array.from(users.values());
}
