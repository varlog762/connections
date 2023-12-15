import { PersonItemResponseInterface } from './person-item-response.interface';

export interface PeopleResponseInterface {
  Count: 'number';
  Items: PersonItemResponseInterface[];
}
