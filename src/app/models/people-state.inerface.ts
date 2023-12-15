import { CompanionItemResponse } from './companion-item-response.interface';
import { PersonItemResponseInterface } from './person-item-response.interface';

export interface PeopleStateInerface {
  isRefreshPeopleInProgress: boolean;
  peopleList: PersonItemResponseInterface[];
  companionsList: CompanionItemResponse[];
}
