import { PersonItemResponse } from './person-item-response.interface';

export interface PeopleResponse {
  Count: 'number';
  Items: PersonItemResponse[];
}
