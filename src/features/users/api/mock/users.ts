export type UserStatus = "active" | "inactive" | "pending" | "blacklisted";

export interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: UserStatus;
}

const organizations = ["Lendsqr", "Lendstar", "Irorun", "Paylater"];

const randomItem = <T,>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

const randomDate = () => {
  const start = new Date(2020, 0, 1).getTime();
  const end = new Date().getTime();
  const date = new Date(start + Math.random() * (end - start));
  return date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const randomPhone = () =>
  `0${Math.floor(7000000000 + Math.random() * 999999999)}`;

  export const users: User[] = Array.from({ length: 1500 }).map((_, i) => ({
    id: String(i + 1),
    organization: organizations[i % organizations.length], // ✅ CORRECT PLACE
    username: `User${i + 1}`,
    email: `user${i + 1}@test.com`,
    phone: "08012345678",
    dateJoined: "01 Jan 2021",
    status: ["active", "inactive", "pending", "blacklisted"][i % 4],
  }));