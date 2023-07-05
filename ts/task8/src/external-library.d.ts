export interface User {
  id: number;
  name: string;
  email: string;
}

export declare function getUser(id: number): User;
export declare function getUsers(): User[];
