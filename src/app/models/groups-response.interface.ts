import { GroupResponseInterface } from './group-response.interface';

export interface GroupsResponseInterface {
  Count: number;
  Items: GroupResponseInterface[];
}
