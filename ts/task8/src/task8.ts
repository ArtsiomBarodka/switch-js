import { getUser, getUsers } from "./external-library.js";

const user = getUser(1);
console.log(user);

const allUsers = getUsers();
console.log(allUsers);
