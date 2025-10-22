export type User = {
  id: string;
  email: string;
  password: string;
};

const users: User[] = [
  {
    id: "1",
    email: "test@example.com",
    password: "$2b$10$/XppM3OsIActNbeesB63e.IGmzNYrUTKCWhwZN8d8zUJ5omfxuUzO",
  },
];

export function findUserByEmail(email: string): User | undefined {
  return users.find((u) => u.email === email);
}

export function addUser(email: string, password: string): User {
  const id = (users.length + 1).toString();
  const user = { id, email, password };
  users.push(user);
  return user;
}

export function getAllUsers(): User[] {
  return users;
}
