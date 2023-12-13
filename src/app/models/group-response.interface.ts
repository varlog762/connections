export interface GroupResponseInterface {
  id: {
    S: string; // group id
  };
  name: {
    S: string; // group name
  };
  createdAt: {
    S: string; // unix timestamp when group was created
  };
  createdBy: {
    S: string; // user id who created this group
  };
}
