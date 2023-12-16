import { CompanionItemResponseInterface } from './companion-item-response.interface';

export interface CompanionsResponseInterface {
  Count: 'number';
  Items: CompanionItemResponseInterface[];
}
