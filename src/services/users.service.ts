import { users } from "../features/users/api/mock/users";
import type { User } from "../features/users/api/mock/users";


const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

  export interface GetUsersParams {
    page?: number;
    limit?: number;
    organization?: string;
  }

export interface GetUsersResponse {
  data: User[];
  total: number;
  page: number;
  limit: number;
}

export const getUsers = async ({
  page = 1,
  limit = 10,
  organization,
}: GetUsersParams): Promise<GetUsersResponse> => {
  await delay(500);

  let filteredUsers = users;

  if (organization) {
    filteredUsers = users.filter(
      (user) => user.organization === organization
    );
  }

  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    data: filteredUsers.slice(start, end),
    total: filteredUsers.length,
    page,
    limit,
  };
};

export const getUserById = async (id: string): Promise<User | null> => {
  await delay(300);

  return users.find((user) => user.id === id) || null;
};