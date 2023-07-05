interface Entity {
  id: number;
  name: string;
  description: string;
}

function save(entity: Entity) {
  console.log(
    `Saved to DB (Entity: id=${entity.id}, name=${entity.name}, description=${entity.description})`
  );
}

class User implements Entity {
  id: number;
  name: string;
  description: string;

  constructor(id: number, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

let user1: User = new User(1, "Tom", "I'm a new user");
save(user1);
