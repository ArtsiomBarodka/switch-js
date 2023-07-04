function getValueByKey<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

const nameValue = getValueByKey(person, "name");
console.log(nameValue);

const ageValue = getValueByKey(person, "age");
console.log(ageValue);

const cityValue = getValueByKey(person, "city");
console.log(cityValue);
