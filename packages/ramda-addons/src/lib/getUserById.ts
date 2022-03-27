import { find, propEq } from "ramda";

type Users = Array<{ id: string | number }>; //todo, should have other items in the array...

export const getUserById = ({
  users,
  userId,
}: {
  users: Users;
  userId: string | number;
}) => {
  const user = find(propEq("id", userId))(users);
  return user;
};
